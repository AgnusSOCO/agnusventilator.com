import React from 'react';
import { MonitorCheck, Siren, PlayCircle, PauseCircle, Zap, StopCircle, Bell } from 'lucide-react';
import SectionHeader from './SectionHeader';

const statusIndicators = [
  {
    label: 'Inspiration Phase',
    icon: <PlayCircle className="w-5 h-5 text-emerald-400" />,
    status: 'bg-emerald-500',
    details: {
      duration: '0.8-1.2s',
      flow: '15-60 L/min',
      trigger: 'Time/Flow/Pressure'
    }
  },
  // Add more indicators...
];

const emergencyControls = [
  {
    label: 'Emergency Stop',
    description: 'Immediate access to spontaneous respiration',
    icon: <StopCircle className="w-5 h-5 text-rose-400" />,
    action: 'Instant system shutdown with failsafe mode',
    recovery: 'Automatic backup ventilation'
  },
  // Add more controls...
];

const ControlPanel = () => {
  return (
    <div>
      <SectionHeader
        icon={<MonitorCheck className="w-8 h-8 text-blue-400" />}
        title="Control Panel"
        subtitle="Advanced monitoring and emergency response system"
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Status Indicators */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-600">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-500/20 rounded-xl">
              <MonitorCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Status Indicators</h3>
              <p className="text-slate-300 text-sm">Real-time system status monitoring</p>
            </div>
          </div>
          <div className="space-y-4">
            {statusIndicators.map((indicator, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl group hover:bg-slate-700/50 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    {indicator.icon}
                    <span className="text-slate-200">{indicator.label}</span>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${indicator.status} animate-pulse`} />
                </div>
                <div className="grid grid-cols-3 gap-2 px-4 text-xs">
                  <div>
                    <span className="text-slate-400 block">Duration</span>
                    <span className="text-slate-300">{indicator.details.duration}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Flow Rate</span>
                    <span className="text-slate-300">{indicator.details.flow}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Trigger</span>
                    <span className="text-slate-300">{indicator.details.trigger}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Controls */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-600">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-rose-500/20 rounded-xl">
              <Siren className="w-6 h-6 text-rose-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Emergency Controls</h3>
              <p className="text-slate-300 text-sm">Critical safety intervention systems</p>
            </div>
          </div>
          <div className="space-y-4">
            {emergencyControls.map((control, index) => (
              <div key={index} className="space-y-2">
                <button className="w-full flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl group hover:bg-rose-500/20 transition-all duration-300">
                  <div className="p-3 bg-rose-500/20 rounded-xl group-hover:bg-rose-500/30 transition-colors">
                    {control.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-semibold group-hover:text-rose-300 transition-colors">
                      {control.label}
                    </h4>
                    <p className="text-slate-300 text-sm">{control.description}</p>
                  </div>
                </button>
                <div className="grid grid-cols-2 gap-2 px-4 text-xs">
                  <div>
                    <span className="text-slate-400 block">Action</span>
                    <span className="text-slate-300">{control.action}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Recovery</span>
                    <span className="text-slate-300">{control.recovery}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;