{/* Previous imports remain the same */}
import React from 'react';
import { 
  Activity, 
  LineChart, 
  Bell, 
  AlertTriangle,
  PlayCircle,
  PauseCircle,
  AlertOctagon,
  StopCircle,
  Wand2,
  Gauge,
  Waves,
  Timer,
  Wind,
  Shield,
  MonitorCheck,
  Siren,
  Zap
} from 'lucide-react';

// ... Previous code until Alarms section ...

{/* Replace the Alarms and Visual Indicators sections with: */}

const TechnicalSpecs = () => {
  // ... Previous code remains the same until Alarms section ...

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" id="specs">
      {/* Previous sections remain the same */}

      {/* Alarms Section */}
      <div className="mb-20">
        <SectionHeader
          icon={<Bell className="w-6 h-6" />}
          title="Alarm System"
          subtitle="Comprehensive monitoring and alert system for patient safety"
        />
        
        <div className="grid gap-8 mt-12">
          {/* Alarm Categories */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {alarmCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl overflow-hidden border border-slate-600 group hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="p-4 bg-gradient-to-r from-blue-500/10 to-transparent border-b border-slate-600">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      {category.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-white">{category.title}</h4>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  {category.alerts.map((alert, alertIndex) => (
                    <div 
                      key={alertIndex}
                      className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span className="text-slate-200 text-sm">{alert}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Control Systems */}
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {/* Pilot Lights System */}
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
              <div className="grid gap-4">
                {statusIndicators.map((indicator, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl group hover:bg-slate-700/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      {indicator.icon}
                      <span className="text-slate-200">{indicator.label}</span>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${indicator.status} animate-pulse`} />
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
              <div className="grid gap-4">
                {emergencyControls.map((control, index) => (
                  <button
                    key={index}
                    className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl group hover:bg-rose-500/20 transition-all duration-300"
                  >
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ... Previous components remain the same ...

const alarmCategories = [
  {
    title: 'Pressure Monitoring',
    icon: <Gauge className="w-5 h-5 text-blue-400" />,
    alerts: [
      'PEEP High/Low Alert',
      'Peak Pressure (PPK) High Alert',
      'Plateau Pressure (PPL) High/Low Alert'
    ]
  },
  {
    title: 'Volume Control',
    icon: <Wind className="w-5 h-5 text-blue-400" />,
    alerts: [
      'Tidal Volume (VT) High/Low Alert',
      'Minute Volume (VM) High/Low Alert',
      'APNEA Detection'
    ]
  },
  {
    title: 'System Monitoring',
    icon: <Shield className="w-5 h-5 text-blue-400" />,
    alerts: [
      'FiO2 High/Low Monitor',
      'Respiratory Rate (RR) High/Low Alert',
      'Compressed Air Pressure High/Low Alert'
    ]
  }
];

const statusIndicators = [
  {
    label: 'Inspiration Phase',
    icon: <PlayCircle className="w-5 h-5 text-emerald-400" />,
    status: 'bg-emerald-500'
  },
  {
    label: 'Expiration Phase',
    icon: <PauseCircle className="w-5 h-5 text-sky-400" />,
    status: 'bg-sky-500'
  },
  {
    label: 'System Status',
    icon: <Zap className="w-5 h-5 text-amber-400" />,
    status: 'bg-amber-500'
  }
];

const emergencyControls = [
  {
    label: 'Emergency Stop',
    description: 'Immediate access to spontaneous respiration',
    icon: <StopCircle className="w-5 h-5 text-rose-400" />
  },
  {
    label: 'Alarm System',
    description: 'Audible alert system for critical events',
    icon: <Bell className="w-5 h-5 text-rose-400" />
  }
];

export default TechnicalSpecs;