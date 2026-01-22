
import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 bg-black/80 backdrop-blur-md border-b border-white/5 flex justify-between items-center">
      <div 
        className="text-2xl font-bold tracking-tighter cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => onNavigate(Page.HOME)}
      >
        Loop Studio
      </div>
      <ul className="flex gap-8 text-sm font-medium">
        <li>
          <button 
            onClick={() => onNavigate(Page.PRIVACY)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </button>
        </li>
        <li>
          <button 
            onClick={() => onNavigate(Page.TERMS)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Terms of Service
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
