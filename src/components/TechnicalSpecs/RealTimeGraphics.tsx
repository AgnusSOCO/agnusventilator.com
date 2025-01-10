import React, { useState, useEffect, useCallback } from 'react';
import { LineChart, Activity, ArrowRight, X, Play, Pause, RotateCcw, HelpCircle, Settings, ChevronDown, Info } from 'lucide-react';
import SectionHeader from './SectionHeader';

// Clinical scenarios for interactive learning
const clinicalScenarios = [
  {
    id: 'normal',
    name: 'Normal Breathing',
    description: 'Typical breathing pattern of a healthy adult',
    settings: {
      respiratoryRate: 12,
      tidalVolume: 500,
      peep: 5,
      inspiratoryPressure: 15
    }
  },
  {
    id: 'ards',
    name: 'ARDS Pattern',
    description: 'Acute Respiratory Distress Syndrome pattern',
    settings: {
      respiratoryRate: 20,
      tidalVolume: 350,
      peep: 10,
      inspiratoryPressure: 25
    }
  },
  {
    id: 'copd',
    name: 'COPD Pattern',
    description: 'Chronic Obstructive Pulmonary Disease pattern',
    settings: {
      respiratoryRate: 16,
      tidalVolume: 400,
      peep: 5,
      inspiratoryPressure: 20
    }
  }
];

// Parameters definition
const parameters = [
  {
    id: 'tidal-volume',
    name: 'Tidal Volume (VT)',
    description: 'Real-time measurement of air volume delivered in each breath',
    range: '2-2000 mL',
    accuracy: '±3% or ±2 mL',
    updateRate: '100 Hz',
    currentValue: '450 mL',
    trend: 'stable'
  },
  {
    id: 'peep',
    name: 'PEEP',
    description: 'Post-Expiratory End Pressure monitoring',
    range: '0-45 cmH₂O',
    accuracy: '±1 cmH₂O',
    updateRate: '100 Hz',
    currentValue: '5 cmH₂O',
    trend: 'increasing'
  },
  {
    id: 'airway-pressure',
    name: 'Airway Pressure (PAW)',
    description: 'Continuous airway pressure measurement',
    range: '-20 to 100 cmH₂O',
    accuracy: '±0.5 cmH₂O',
    updateRate: '200 Hz',
    currentValue: '22 cmH₂O',
    trend: 'decreasing'
  }
];

const RealTimeGraphics = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [time, setTime] = useState(0);
  const [selectedScenario, setSelectedScenario] = useState(clinicalScenarios[0]);
  const [showTooltip, setShowTooltip] = useState('');
  const [settings, setSettings] = useState(clinicalScenarios[0].settings);
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  // Animation frame for waveform
  useEffect(() => {
    let animationFrameId: number;
    
    const animate = () => {
      if (isPlaying) {
        setTime((prevTime) => (prevTime + 1) % 360);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    if (showDemo) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPlaying, showDemo]);

  // Generate waveform path
  const generateWaveformPath = useCallback((type: 'pressure' | 'flow' | 'volume') => {
    const points: { x: number; y: number }[] = [];
    const width = 1000;
    const height = 300;
    const amplitude = height / 4;
    const frequency = type === 'pressure' ? 1 : type === 'flow' ? 2 : 0.5;

    for (let x = 0; x <= width; x += 5) {
      const t = (x / width) * 2 * Math.PI * frequency + (time * 0.05);
      let y = 0;

      switch (type) {
        case 'pressure':
          y = Math.sin(t) * amplitude + height / 2;
          break;
        case 'flow':
          y = (Math.sin(t) * 0.7 + Math.sin(t * 2) * 0.3) * amplitude + height / 2;
          break;
        case 'volume':
          y = Math.sin(t * 0.5) * amplitude + height / 2;
          break;
      }

      points.push({ x, y });
    }

    return points.reduce((path, point, i) => 
      i === 0 ? `M ${point.x},${point.y}` : `${path} L ${point.x},${point.y}`,
      ''
    );
  }, [time]);

  const handleScenarioChange = (scenario) => {
    setSelectedScenario(scenario);
    setSettings(scenario.settings);
  };

  const handleSettingChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: Number(value)
    }));
  };

  return (
    <div>
      <SectionHeader
        icon={<LineChart className="w-8 h-8 text-blue-400" />}
        title="Real-Time Graphics"
        subtitle="High-precision monitoring with advanced waveform visualization"
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Parameters List */}
        <div className="space-y-4">
          {parameters.map((param) => (
            <div
              key={param.id}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-600 hover:border-blue-500/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{param.name}</h4>
                  <p className="text-slate-300 text-sm">{param.description}</p>
                </div>
                <div className="flex flex-col items-end">
                  <Activity className={`w-5 h-5 ${
                    param.trend === 'stable' ? 'text-blue-400' :
                    param.trend === 'increasing' ? 'text-emerald-400' :
                    'text-amber-400'
                  }`} />
                  <span className="text-white font-mono mt-2">{param.currentValue}</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-slate-400 mb-1">Range</p>
                  <p className="text-white font-mono">{param.range}</p>
                </div>
                <div>
                  <p className="text-slate-400 mb-1">Accuracy</p>
                  <p className="text-white font-mono">{param.accuracy}</p>
                </div>
                <div>
                  <p className="text-slate-400 mb-1">Update Rate</p>
                  <p className="text-white font-mono">{param.updateRate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Visualization */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-600">
          <div className="aspect-square rounded-lg bg-slate-900/50 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
            <div className="relative z-10 text-center">
              <Activity className="w-16 h-16 text-blue-400 mx-auto mb-4 animate-pulse" />
              <p className="text-slate-300">Interactive waveform visualization</p>
              <button 
                onClick={() => setShowDemo(true)}
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors group"
              >
                View Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 rounded-2xl w-full h-[90vh] max-w-6xl mx-auto flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-bold text-white">Interactive Waveform Learning</h3>
                <button
                  onClick={() => setShowHelp(!showHelp)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Info className="w-5 h-5" />
                </button>
              </div>
              <button 
                onClick={() => setShowDemo(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Help Panel */}
            {showHelp && (
              <div className="p-4 bg-slate-800 border-b border-slate-700">
                <h4 className="text-lg font-semibold text-white mb-2">How to Use This Demo</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Select different clinical scenarios to observe typical waveform patterns</li>
                  <li>• Adjust ventilation parameters using the settings panel</li>
                  <li>• Hover over the help icons for detailed explanations of each waveform</li>
                  <li>• Use play/pause to control animation and reset to start over</li>
                </ul>
              </div>
            )}

            {/* Main Content - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 space-y-4">
                {/* Controls Bar */}
                <div className="bg-slate-800 rounded-xl p-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Clinical Scenario Selector */}
                    <div className="flex-1">
                      <label className="text-sm text-slate-400 mb-1 block">Clinical Scenario</label>
                      <div className="relative">
                        <select
                          value={selectedScenario.id}
                          onChange={(e) => handleScenarioChange(
                            clinicalScenarios.find(s => s.id === e.target.value)
                          )}
                          className="w-full bg-slate-700 text-white rounded-lg px-4 py-2 appearance-none"
                        >
                          {clinicalScenarios.map(scenario => (
                            <option key={scenario.id} value={scenario.id}>
                              {scenario.name}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      </div>
                    </div>
                    
                    {/* Control Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        {isPlaying ? 'Pause' : 'Play'}
                      </button>
                      <button
                        onClick={() => setTime(0)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition-colors"
                      >
                        <RotateCcw className="w-4 h-4" />
                        Reset
                      </button>
                      <button
                        onClick={() => setShowSettings(!showSettings)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition-colors"
                      >
                        <Settings className="w-4 h-4" />
                        Settings
                      </button>
                    </div>
                  </div>

                  {/* Settings Panel */}
                  {showSettings && (
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <label className="text-sm text-slate-400 mb-1 block">
                          Respiratory Rate (bpm)
                        </label>
                        <input
                          type="range"
                          min="8"
                          max="30"
                          value={settings.respiratoryRate}
                          onChange={(e) => handleSettingChange('respiratoryRate', e.target.value)}
                          className="w-full"
                        />
                        <span className="text-white text-sm">{settings.respiratoryRate}</span>
                      </div>
                      <div>
                        <label className="text-sm text-slate-400 mb-1 block">
                          Tidal Volume (mL)
                        </label>
                        <input
                          type="range"
                          min="200"
                          max="800"
                          step="50"
                          value={settings.tidalVolume}
                          onChange={(e) => handleSettingChange('tidalVolume', e.target.value)}
                          className="w-full"
                        />
                        <span className="text-white text-sm">{settings.tidalVolume}</span>
                      </div>
                      <div>
                        <label className="text-sm text-slate-400 mb-1 block">
                          PEEP (cmH₂O)
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="20"
                          value={settings.peep}
                          onChange={(e) => handleSettingChange('peep', e.target.value)}
                          className="w-full"
                        />
                        <span className="text-white text-sm">{settings.peep}</span>
                      </div>
                      <div>
                        <label className="text-sm text-slate-400 mb-1 block">
                          Inspiratory Pressure (cmH₂O)
                        </label>
                        <input
                          type="range"
                          min="10"
                          max="40"
                          value={settings.inspiratoryPressure}
                          onChange={(e) => handleSettingChange('inspiratoryPressure', e.target.value)}
                          className="w-full"
                        />
                        <span className="text-white text-sm">{settings.inspiratoryPressure}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Waveforms */}
                <div className="space-y-4">
                  {/* Pressure Waveform */}
                  <div className="bg-slate-800 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <h4 className="text-white font-semibold">Pressure (cmH₂O)</h4>
                        <button
                          onMouseEnter={() => setShowTooltip('pressure')}
                          onMouseLeave={() => setShowTooltip('')}
                          className="text-slate-400 hover:text-white transition-colors"
                        >
                          <HelpCircle className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-blue-400 font-mono">{settings.inspiratoryPressure} cmH₂O</span>
                    </div>
                    {showTooltip === 'pressure' && (
                      <div className="bg-slate-700 p-3 rounded-lg mb-2 text-sm text-slate-300">
                        The pressure waveform shows the airway pressure throughout the respiratory cycle.
                        The peak represents maximum inspiratory pressure, while the plateau shows
                        alveolar pressure at end-inspiration.
                      </div>
                    )}
                    <div className="h-[150px] bg-slate-900 rounded-lg overflow-hidden">
                      <svg className="w-full h-full" viewBox="0 0 1000 300">
                        <path
                          d={generateWaveformPath('pressure')}
                          fill="none"
                          stroke="rgb(96, 165, 250)"
                          strokeWidth="3"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Flow Waveform */}
                  <div className="bg-slate-800 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <h4 className="text-white font-semibold">Flow (L/min)</h4>
                        <button
                          onMouseEnter={() => setShowTooltip('flow')}
                          onMouseLeave={() => setShowTooltip('')}
                          className="text-slate-400 hover:text-white transition-colors"
                        >
                          <HelpCircle className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-emerald-400 font-mono">60 L/min</span>
                    </div>
                    {showTooltip === 'flow' && (
                      <div className="bg-slate-700 p-3 rounded-lg mb-2 text-sm text-slate-300">
                        The flow waveform indicates the rate and direction of gas movement.
                        Positive values show inspiratory flow, while negative values indicate
                        expiratory flow.
                      </div>
                    )}
                    <div className="h-[150px] bg-slate-900 rounded-lg overflow-hidden">
                      <svg className="w-full h-full" viewBox="0 0 1000 300">
                        <path
                          d={generateWaveformPath('flow')}
                          fill="none"
                          stroke="rgb(52, 211, 153)"
                          strokeWidth="3"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Volume Waveform */}
                  <div className="bg-slate-800 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <h4 className="text-white font-semibold">Volume (mL)</h4>
                        <button
                          onMouseEnter={() => setShowTooltip('volume')}
                          onMouseLeave={() => setShowTooltip('')}
                          className="text-slate-400 hover:text-white transition-colors"
                        >
                          <HelpCircle className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-amber-400 font-mono">{settings.tidalVolume} mL</span>
                    </div>
                    {showTooltip === 'volume' && (
                      <div className="bg-slate-700 p-3 rounded-lg mb-2 text-sm text-slate-300">
                        The volume waveform shows the cumulative amount of air delivered during
                        inspiration and removed during expiration. The peak represents the
                        tidal volume.
                      </div>
                    )}
                    <div className="h-[150px] bg-slate-900 rounded-lg overflow-hidden">
                      <svg className="w-full h-full" viewBox="0 0 1000 300">
                        <path
                          d={generateWaveformPath('volume')}
                          fill="none"
                          stroke="rgb(251, 191, 36)"
                          strokeWidth="3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Clinical Analysis */}
                <div className="bg-slate-800 rounded-xl p-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Clinical Analysis</h4>
                  <p className="text-slate-300 text-sm">
                    {selectedScenario.description}. Current settings show a
                    {settings.respiratoryRate > 20 ? ' rapid ' : ' normal '}
                    respiratory rate with
                    {settings.tidalVolume < 400 ? ' low ' : settings.tidalVolume > 600 ? ' high ' : ' normal '}
                    tidal volume. PEEP is
                    {settings.peep > 10 ? ' elevated' : ' within normal range'}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RealTimeGraphics;