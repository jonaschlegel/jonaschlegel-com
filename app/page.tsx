import Banner from './components/Banner';
import FeaturedProjects from './components/FeaturedProjects';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

export default function HomePage() {
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
