import React from 'react';
import { Page } from '../types.ts';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="py-16 px-6 md:px-12 border-t border-white/5 text-center bg-black">
      <div className="flex justify-center gap-8 mb-8">
        <button 
          onClick={() => onNavigate(Page.PRIVACY)}
          className="text-gray-500 hover:text-white transition-colors text-sm font-medium"
        >
          Privacy Policy
        </button>
        <button 
          onClick={() => onNavigate(Page.TERMS)}
          className="text-gray-500 hover:text-white transition-colors text-sm font-medium"
        >
          Terms of Service
        </button>
      </div>
      <p className="text-gray-700 text-sm">
        &copy; {new Date().getFullYear()} Loop Studio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;