import React from 'react';
import { Heart, Activity, Shield, Globe2, Lightbulb, Target, Users, Building2 } from 'lucide-react';

const impactAreas = [
  {
    title: 'Healthcare Equity',
    description: 'Bridging the gap in critical care access worldwide',
    metric: 'Potential to serve 4B+ people',
    icon: <Users className="w-6 h-6 text-blue-500" />
  },
  {
    title: 'Cost Revolution',
    description: 'Making advanced ventilation affordable for all facilities',
    metric: '90% cost reduction',
    icon: <Building2 className="w-6 h-6 text-blue-500" />
  },
  {
    title: 'Global Reach',
    description: 'Transforming critical care in developing regions',
    metric: '180+ countries',
    icon: <Globe2 className="w-6 h-6 text-blue-500" />
  }
];

const innovationHighlights = [
  {
    icon: <Shield className="w-6 h-6 text-emerald-500" />,
    title: 'Gold Standard Features',
    description: 'Advanced functionality matching premium ventilators at a fraction of the cost'
  },
  {
    icon: <Activity className="w-6 h-6 text-blue-500" />,
    title: 'Precision Engineering',
    description: 'Innovative design achieving medical-grade accuracy with simplified components'
  },
  {
    icon: <Heart className="w-6 h-6 text-rose-500" />,
    title: 'Universal Access',
    description: 'Democratizing critical care technology for healthcare facilities worldwide'
  }
];

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionizing Critical Care
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Through innovative engineering and a mission-driven approach, we're making
            advanced ventilation technology accessible to healthcare providers worldwide.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To revolutionize critical care accessibility by providing high-quality,
              affordable ventilation technology that ensures every healthcare facility
              has the tools they need to save lives.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To create a world where no patient goes without critical care due to
              equipment costs or availability, setting a new standard for accessible
              medical technology.
            </p>
          </div>
        </div>

        {/* Innovation Highlights */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Innovation Highlights
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {innovationHighlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-50 rounded-xl mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Impact */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-4">Transformative Impact</h3>
          <p className="text-blue-100 text-center max-w-3xl mx-auto mb-12">
            Our innovative approach to ventilator technology has the potential to revolutionize
            global healthcare accessibility. By making advanced critical care equipment affordable
            and accessible, we're working to ensure that no patient anywhere in the world goes
            without the care they need.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl mb-4">
                  {area.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{area.title}</h4>
                <p className="text-blue-100 mb-4">{area.description}</p>
                <div className="text-2xl font-bold text-blue-300">{area.metric}</div>
              </div>
            ))}
          </div>
          
          {/* Additional Impact Context */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h5 className="text-lg font-bold mb-3">Current Challenge</h5>
              <p className="text-blue-100">
                Over 50% of the world's population lacks access to essential critical care
                equipment, with ventilators being one of the most crucial yet inaccessible
                pieces of medical technology.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h5 className="text-lg font-bold mb-3">Our Solution</h5>
              <p className="text-blue-100">
                By reimagining ventilator design and manufacturing, we've created a solution
                that maintains gold-standard quality while dramatically reducing costs,
                making critical care accessible to healthcare facilities worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;