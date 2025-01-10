import React from 'react';
import { FileText, Download, Clock, BookOpen } from 'lucide-react';
import SectionHeader from './SectionHeader';

const brochureDetails = [
  {
    icon: <Clock className="w-5 h-5 text-blue-400" />,
    title: 'Latest Version',
    description: 'Updated January 2025'
  }
];

const Brochure = () => {
  return (
    <div className="space-y-12">
      <SectionHeader
        icon={<FileText className="w-8 h-8 text-blue-400" />}
        title="Product Documentation"
        subtitle="Download our comprehensive product brochure for detailed specifications and features"
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left side - Preview */}
        <div className="relative group">
          <div className="aspect-[3/4] bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl overflow-hidden border border-slate-600">
            <iframe
              src="/brochures/agnus-ventilator-2025.pdf"
              className="w-full h-full"
              title="Brochure Preview"
            />
            {/* Overlay for better visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
          </div>
          
          {/* Download button */}
          <a
            href="/brochures/agnus-ventilator-2025.pdf"
            download="Agnus-Ventilator-Brochure-2025.pdf"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transition-all duration-300 group-hover:transform group-hover:-translate-y-1"
          >
            <Download className="w-5 h-5" />
            Download Brochure
          </a>
        </div>

        {/* Right side - Details */}
        <div className="space-y-8">
          {/* Quick Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-slate-400 text-sm">Format</p>
              <p className="text-white font-medium">PDF Document</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-slate-400 text-sm">Size</p>
              <p className="text-white font-medium">2.66 MB</p>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4">
            {brochureDetails.map((detail, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
              >
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  {detail.icon}
                </div>
                <div>
                  <h4 className="text-white font-medium">{detail.title}</h4>
                  <p className="text-slate-300 text-sm">{detail.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Document Sections */}
          <div className="bg-slate-800/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <h4 className="text-lg font-semibold text-white">Document Contents</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h5 className="text-white font-medium mb-2">Technical Specifications</h5>
                <p className="text-slate-300 text-sm">
                  Detailed breakdown of ventilation modes, pressure ranges, flow rates,
                  and monitoring capabilities.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h5 className="text-white font-medium mb-2">Component Overview</h5>
                <p className="text-slate-300 text-sm">
                  Comprehensive guide to the ventilator's core components, including
                  the innovative pressure control system and sensor array.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h5 className="text-white font-medium mb-2">Operating Instructions</h5>
                <p className="text-slate-300 text-sm">
                  Step-by-step guidance for setup, operation, and maintenance procedures
                  to ensure optimal performance.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <p className="text-blue-300 text-sm">
              This comprehensive guide provides detailed information about the Agnus
              Ventilator's innovative features, core components, and operational
              capabilities. Learn about our groundbreaking pressure control system,
              advanced monitoring features, and how our technology delivers gold-standard
              performance at an accessible price point.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brochure;
