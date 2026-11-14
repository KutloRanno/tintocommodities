import ScrollReveal from './scroll-reveal';
import Navigation from './navigation';

// Add the business destinations here when they are available.
const destinations = { shop: null, location: null, contact: null };

const benefits = [
  { icon: 'quality', title: '100% quality assured', text: 'Quality food products, chosen with care for your home and business.' },
  { icon: 'local', title: 'Locally sourced', text: 'Supporting local farmers and bringing our communities closer to their food.' },
  { icon: 'supply', title: 'Reliable supply', text: 'A dependable supply of everyday essentials, from household needs to bulk orders.' },
  { icon: 'community', title: 'Trusted across Botswana', text: 'Building lasting relationships with the homes and businesses we serve.' },
  { icon: 'customers', title: 'Customer focused', text: 'Your needs come first, with friendly service and care in every interaction.' },
];

function DestinationLink({ destination, children, className, label }) {
  if (destination) {
    return <a className={className} href={destination} aria-label={label}>{children}</a>;
  }
  return <button className={className} type="button" disabled aria-label={label} title="Coming soon">{children}</button>;
}

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation destinations={destinations} />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">Quality Food Products for a<br /><span>Stronger Botswana</span></h1>
            <p>The world trusts our locally sourced produce, consistently high quality</p>
            <DestinationLink className="buy-button" destination={destinations.shop}>Buy now</DestinationLink>
          </div>
          <img className="hero-peanuts" src="/images/peanuts.png" alt="A cupped hand pouring shelled peanuts onto a pile" width="1229" height="819" fetchPriority="high" />
        </section>
        <ScrollReveal id="about" className="benefits" labelledBy="benefits-title">
          <div className="benefits-intro">
            <p className="section-eyebrow">Rooted in quality. Built on trust.</p>
            <h2 id="benefits-title">Why homes and businesses <span>choose Tinto.</span></h2>
            <p className="benefits-description">Good food starts with a supplier you can count on. Here’s what matters to us.</p>
          </div>
          <div className="benefits-panel">
            <ul className="benefits-grid">
              {benefits.map(({ icon, title, text }) => (
                <li className="benefit-card" key={icon}>
                  <div className="benefit-icon"><img src={`/images/benefits/${icon}.svg`} alt="" width="48" height="48" loading="lazy" /></div>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </li>
              ))}
            </ul>
            <div className="benefits-image-strip">
              <DestinationLink className="benefits-buy-button" destination={destinations.shop}>Buy Now</DestinationLink>
            </div>
            <div className="benefits-image-fade" aria-hidden="true" />
          </div>
        </ScrollReveal>
      </main>
      <footer className="site-footer" />
    </div>
  );
}
