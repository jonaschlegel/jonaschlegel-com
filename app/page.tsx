import React from 'react';
import Banner from './components/Banner';
import FeaturedProjects from './components/FeaturedProjects';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Banner />
      <FeaturedProjects />
      <Services />
      <Testimonials />
    </div>
  );
};

export default HomePage;
