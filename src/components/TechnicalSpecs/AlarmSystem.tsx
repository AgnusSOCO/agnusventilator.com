import React from 'react';
import { Bell, AlertTriangle, Shield, Gauge, Wind, MonitorCheck } from 'lucide-react';
import SectionHeader from './SectionHeader';

const alarmCategories = [
  {
    title: 'Pressure Monitoring',
    icon: <Gauge className="w-5 h-5 text-blue-400" />,
    description: 'Continuous pressure monitoring across multiple parameters',
    alerts: [
      {
        name: 'PEEP',
        range: '0-45 cmH₂O',
        priority: 'High',
        response: 'Auto-adjustment'
      },
      {
        name: 'Peak Pressure',
        range: '10-80 cmH₂O',
        priority: 'Critical',
        response: 'Immediate relief'
      },
      {
        name: 'Plateau Pressure',
        range: '5-60 cmH₂O',
        priority: 'Medium',
        response: 'Flow adjustment'
      }
    ]
  },
  {
    title: 'Volume Control',
    icon: <Wind className="w-5 h-5 text-blue-400" />,
    description: 'Precise volume measurement and control system',
    alerts: [
      {
        name: 'Tidal Volume',
        range: '4-8 mL/kg',
        priority: 'High',
        response: 'Flow compensation'
      },
      {
        name: 'Minute Volume',
        range: '2-30 L/min',
        priority: 'Medium',
        response: 'Rate adjustment'
      },
      {
        name: 'APNEA',
        range: '20-60 sec',
        priority: 'Critical',
        response: 'Backup ventilation'
      }
    ]
  },
  {
    title: 'System Monitoring',
    icon: <MonitorCheck className="w-5 h-5 text-blue-400" />,
    description: 'Comprehensive system health monitoring',
    alerts: [
      {
        name: 'FiO2',
        range: '21-100%',
        priority: 'High',
        response: 'O2 adjustment'
      },
      {
        name: 'Air Pressure',
        range: '2-6 bar',
        priority: 'Medium',
        response: 'Source switch'
      },
      {
        name: 'Battery',
        range: '0-100%',
        priority: 'Low',
        response: 'Power backup'
      }
    ]
  }
];

const AlarmSystem = () => {
  return (
    <div className="space-y-12">
      <SectionHeader
        icon={<Bell className="w-8 h-8 text-blue-400" />}
        title="Alarm System"
        subtitle="Comprehensive monitoring and alert system for patient safety"
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {alarmCategories.map((category, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl overflow-hidden border border-slate-600"
          >
            {/* Category Header */}
            <div className="p-4 bg-gradient-to-r from-blue-500/10 to-transparent border-b border-slate-600">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  {category.icon}
                </div>
                <h4 className="text-lg font-semibold text-white">{category.title}</h4>
              </div>
              <p className="text-sm text-slate-300">{category.description}</p>
            </div>

            {/* Alerts List */}
            <div className="p-4 space-y-3">
              {category.alerts.map((alert, alertIndex) => (
                <div
                  key={alertIndex}
                  className="bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-700/50 transition-colors group"
                >
                  <div className="p-3 flex items-center justify-between border-b border-slate-600/50">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className={`w-4 h-4 ${
                        alert.priority === 'Critical' ? 'text-rose-400' :
                        alert.priority === 'High' ? 'text-amber-400' :
                        'text-blue-400'
                      }`} />
                      <span className="text-white font-medium">{alert.name}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      alert.priority === 'Critical' ? 'bg-rose-500/20 text-rose-300' :
                      alert.priority === 'High' ? 'bg-amber-500/20 text-amber-300' :
                      'bg-blue-500/20 text-blue-300'
                    }`}>
                      {alert.priority}
                    </span>
                  </div>
                  <div className="p-2 grid grid-cols-2 gap-2 text-xs">
                    <div className="text-slate-400">
                      Range: <span className="text-slate-200">{alert.range}</span>
                    </div>
                    <div className="text-slate-400">
                      Response: <span className="text-slate-200">{alert.response}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlarmSystem;