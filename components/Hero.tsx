
import React from 'react';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="h-[90vh] flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-4xl space-y-6">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none animate-fade-in-up">
          We Build Apps<br />That Matter
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-medium animate-fade-in-up delay-100">
          Crafting digital experiences for the next generation
        </p>
        <div className="pt-8 animate-fade-in-up delay-200">
          <button 
            onClick={onContactClick}
            className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
