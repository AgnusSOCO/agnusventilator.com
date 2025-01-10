import React from 'react';
import { Heart, Activity, CheckCircle2 } from 'lucide-react';

const Technology = () => {
  return (
    <section className="py-20" id="technology">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Advanced Mechanical Ventilation
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <FeatureList
              icon={<Heart className="w-6 h-6 text-blue-500" />}
              title="Patented Technology"
              description="Diaphragm propulsion mechanism that replicates natural human respiration"
            />
            <FeatureList
              icon={<Activity className="w-6 h-6 text-blue-500" />}
              title="Precise Control"
              description="Tidal Volume changes of less than 5% even with pressure variations up to 100 cm H₂O"
            />
            <FeatureList
              icon={<CheckCircle2 className="w-6 h-6 text-blue-500" />}
              title="Safety Features"
              description="Automatic Pressure Control with integrated alarms for real-time monitoring"
            />
          </div>
          <div className="bg-gray-100 rounded-2xl p-8">
            <img
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80"
              alt="Human Lungs Medical Illustration"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureList = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Technology;