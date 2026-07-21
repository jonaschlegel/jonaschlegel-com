import { testimonialsData } from '../data/content';
import ClientCard from './ClientCard';

/** Static client testimonials that remain readable without carousel controls. */
const Testimonials = () => {
  return (
    <section
      className="container mx-auto py-16 md:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mb-10 max-w-2xl">
        <p className="eyebrow">Client perspective</p>
        <h2 id="testimonials-heading" className="mt-3 text-3xl md:text-5xl">
          Thoughtful work is collaborative work.
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonialsData.map((client) => (
          <div
            key={`client-${client.name}`}
            className="border border-primary-dark/15 bg-white p-6 md:p-8"
          >
            <ClientCard {...client} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
