import React from 'react';
import { Wind, Info } from 'lucide-react';
import SectionHeader from './SectionHeader';

const modes = [
  {
    id: 'cmv-pc',
    name: 'CMV-PC',
    fullName: 'Continuous Mandatory Ventilation with Pressure Control',
    description: 'Delivers preset pressure with each breath, ideal for patients with variable lung compliance.',
    features: ['Pressure-targeted breaths', 'Constant inspiratory pressure', 'Volume varies with compliance']
  },
  {
    id: 'cmv-vc',
    name: 'CMV-VC',
    fullName: 'Continuous Mandatory Ventilation with Volume Control',
    description: 'Ensures consistent tidal volume delivery regardless of lung mechanics.',
    features: ['Volume-targeted breaths', 'Constant flow delivery', 'Pressure varies with resistance']
  },
  {
    id: 'simmv',
    name: 'SIMMV',
    fullName: 'Spontaneous Intermittent Mandatory Minute Volume',
    description: 'Combines mandatory breaths with spontaneous breathing support.',
    features: ['Patient-triggered breaths', 'Backup mandatory rate', 'Pressure support for spontaneous breaths']
  },
  // Add more modes...
];

const VentilationModes = () => {
  return (
    <div>
      <SectionHeader
        icon={<Wind className="w-8 h-8 text-blue-400" />}
        title="Ventilation Modes"
        subtitle="Comprehensive range of ventilation strategies for optimal patient care"
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
    </div>
  );
};

export default VentilationModes;