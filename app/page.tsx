import { connection } from 'next/server';
import Banner from './components/Banner';
import FeaturedProjects from './components/FeaturedProjects';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

export default async function HomePage() {
  await connection();
  return (
    <div>
      <Hero />
      <Banner />
      <FeaturedProjects />
      <Services />
      <Testimonials />
    </div>
  );
}
