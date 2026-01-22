
import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Contact from './Contact';

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
