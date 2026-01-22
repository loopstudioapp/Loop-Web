
import React from 'react';

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  content: React.ReactNode;
  onBack: () => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ title, lastUpdated, content, onBack }) => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-24 min-h-[80vh]">
      <button 
        onClick={onBack}
        className="text-gray-500 hover:text-white mb-12 flex items-center gap-2 group transition-colors"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span>
        Back to Home
      </button>
      
      <header className="mb-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">{title}</h1>
        <p className="text-gray-600 font-medium">Last Updated: {lastUpdated}</p>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        {content}
      </div>
    </div>
  );
};

export default LegalPage;
