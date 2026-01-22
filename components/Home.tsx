import React from 'react';
import Hero from './Hero.tsx';
import Services from './Services.tsx';
import Contact from './Contact.tsx';

interface HomeProps {
  onContactClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onContactClick }) => {
  return (
    <>
      <Hero onContactClick={onContactClick} />
      <Services />
      <Contact />
    </>
  );
};

export default Home;