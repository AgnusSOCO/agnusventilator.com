import React from 'react';
import { Wind, Info, Clock, Timer, Activity, Heart, Shield } from 'lucide-react';
import SectionHeader from './SectionHeader';

const modes = [
  {
    id: 'cmv-pc-ac',
    name: 'CMV-PC-A/C',
    fullName: 'Continuous Mandatory Ventilation with Pressure Control - Assist/Control',
    description: 'Delivers preset pressure with each breath, ideal for patients with variable lung compliance. Features pre-programmable Post Inspiratory Pause Maneuver (PIPM) for enhanced lung assessment.',
    features: [
      'Pressure-targeted breaths',
      'Constant inspiratory pressure',
      'Volume varies with compliance',
      'Synchronized patient triggering',
      'Pre-programmable automatic PIPM',
      'Customizable pause duration and frequency'
    ]
  },
  {
    id: 'cmv-vc-ac-apc',
    name: 'CMV-VC-A/C-APC',
    fullName: 'Continuous Mandatory Ventilation with Volume Control - Assist/Control with Automatic Pressure Compensation',
    description: 'Ensures consistent tidal volume delivery with automatic pressure compensation for varying lung mechanics.',
    features: [
      'Volume-targeted breaths',
      'Constant flow delivery',
      'Automatic pressure compensation',
      'Synchronized patient triggering',
      'Pressure varies with resistance'
    ]
  },
  {
    id: 'simmv',
    name: 'SIMMV',
    fullName: 'Spontaneous Intermittent Mandatory Minute Volume',
    description: 'Combines mandatory breaths with spontaneous breathing support.',
    features: [
      'Patient-triggered breaths',
      'Backup mandatory rate',
      'Pressure support for spontaneous breaths',
      'Synchronized start capability'
    ]
  },
  {
    id: 'rm',
    name: 'RM',
    fullName: 'Recruitment Maneuver',
    description: 'Specialized mode for lung recruitment with pre-configurable settings.',
    features: [
      'Pre-configurable pressure levels',
      'Adjustable maneuver duration',
      'Automatic safety monitoring',
      'Seamless mode transition',
      'Real-time compliance monitoring'
    ]
  },
  {
    id: 'csv',
    name: 'CSV',
    fullName: 'Continuous Spontaneous Ventilation',
    description: 'Supports natural breathing with automatic backup ventilation when TW time expires.',
    features: [
      'Automatic inspiration on TW expiry',
      'Automatic return to previous mode',
      'Patient-initiated breathing support',
      'Adjustable trigger window (TW)',
      'Continuous monitoring'
    ]
  }
];

const VentilationModes = () => {
  return (
    <div>
      <SectionHeader
        icon={<Wind className="w-8 h-8 text-blue-400" />}
        title="Ventilation Modes"
        subtitle="Comprehensive range of ventilation strategies with synchronized start capability for optimal patient care"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modes.map((mode) => (
          <div
            key={mode.id}
            className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-600 hover:border-blue-500/30 transition-all group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <Info className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">{mode.name}</h4>
                <p className="text-blue-300 text-sm">{mode.fullName}</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4">{mode.description}</p>
            <ul className="space-y-2">
              {mode.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Synchronized Start Notice */}
      <div className="mt-8 bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-2">
          <Clock className="w-6 h-6 text-blue-400" />
          <h4 className="text-lg font-semibold text-white">Synchronized Operation</h4>
        </div>
        <p className="text-slate-300">
          All ventilation modes feature synchronized start capability, ensuring optimal
          timing and coordination with patient breathing efforts for enhanced comfort
          and effectiveness.
        </p>
      </div>
    </div>
  );
};

export default VentilationModes;
