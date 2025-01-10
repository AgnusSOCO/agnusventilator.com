import React from 'react';
import { Settings, Shield, AlertCircle } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          State-of-the-Art Technology
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Settings className="w-8 h-8 text-blue-500" />}
            title="Comprehensive Modes"
            description="Full range of ventilation modes including CMV-PC/VC, SIMMV, CPAP/BPAP, and RM"
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8 text-blue-500" />}
            title="Automatic Pressure Control"
            description="Advanced safety features ensuring optimal patient protection"
          />
          <FeatureCard
            icon={<AlertCircle className="w-8 h-8 text-blue-500" />}
            title="Integrated Alarms"
            description="Comprehensive monitoring for apnea, tidal volume, and peak pressure"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Features;