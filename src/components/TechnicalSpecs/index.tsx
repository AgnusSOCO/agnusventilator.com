import React from 'react';
import { Bell } from 'lucide-react';
import VentilationModes from './VentilationModes';
import RealTimeGraphics from './RealTimeGraphics';
import AlarmSystem from './AlarmSystem';
import ControlPanel from './ControlPanel';
import Brochure from './Brochure';
import SectionHeader from './SectionHeader';

const TechnicalSpecs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" id="specs">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          icon={<Bell className="w-8 h-8 text-blue-400" />}
          title="Technical Specifications"
          subtitle="Advanced respiratory support system with comprehensive monitoring and control capabilities"
        />
        
        <div className="space-y-20">
          <VentilationModes />
          <RealTimeGraphics />
          <AlarmSystem />
          <ControlPanel />
          <Brochure />
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;