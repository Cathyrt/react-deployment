import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import AboutUsContent from './AboutUsContente';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <AboutUsContent/>
      <Footer />
    </>
  );
}

export default Home;
