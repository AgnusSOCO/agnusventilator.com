import React from 'react';

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/20 mb-4">
        {icon}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-300 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;