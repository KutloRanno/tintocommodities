import ScrollReveal from './scroll-reveal';
import Navigation from './navigation';
import SocialIcon from './social-icon';
import { assetPath } from './asset-path';

const whatsappUrl = 'https://wa.me/26777337433';
const destinations = { shop: '#produce', location: null, contact: '#contact' };
const produce = ['Sugar beans', 'Ground beans', 'Samp', 'Black eyed peas', 'Jugo beans'];

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
        <ScrollReveal className="hero" labelledBy="hero-title" hero>
          <div className="hero-copy">
            <h1 id="hero-title">Quality Food Products for a<br /><span>Stronger Botswana</span></h1>
            <p>The world trusts our locally sourced produce, consistently high quality</p>
            <DestinationLink className="buy-button" destination={destinations.shop}>Buy now</DestinationLink>
          </div>
          <img className="hero-peanuts" src={assetPath('/images/peanuts.png')} alt="A cupped hand pouring shelled peanuts onto a pile" width="1229" height="819" fetchPriority="high" />
        </ScrollReveal>
        <ScrollReveal id="about" className="benefits" labelledBy="benefits-title" fadeWithNext>
          <div className="benefits-intro">
            <p className="section-eyebrow">Rooted in quality. Built on trust.</p>
            <h2 id="benefits-title">Why homes and businesses <span>choose Tinto.</span></h2>
            <p className="benefits-description">Good food starts with a supplier you can count on. Here’s what matters to us.</p>
          </div>
          <div className="benefits-panel">
            <ul className="benefits-grid">
              {benefits.map(({ icon, title, text }) => (
                <li className="benefit-card" key={icon}>
                  <div className="benefit-icon"><img src={assetPath(`/images/benefits/${icon}.svg`)} alt="" width="48" height="48" loading="lazy" /></div>
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
        <ScrollReveal id="produce" className="produce-section" labelledBy="produce-title">
          <div className="produce-heading">
            <div>
              <p className="section-eyebrow">From our selection to your table</p>
              <h2 id="produce-title">Good food.<br /><span>Everyday essentials.</span></h2>
            </div>
            <p>Explore our produce and chat with us on WhatsApp for prices, availability, and bulk orders.</p>
          </div>
          <ul className="produce-grid">
            {produce.map((name, index) => (
              <li className="produce-card" key={name}>
                <div className="produce-image-wrap">
                  <img className="produce-image" src={assetPath(`/images/produce/${name.toLowerCase().replaceAll(' ', '-')}.webp`)} alt={name === 'Ground beans' ? 'A wooden bowl of shelled groundnuts' : `A wooden bowl of ${name.toLowerCase()}`} width="800" height="800" loading="lazy" />
                  <span className="produce-number" aria-hidden="true">0{index + 1}</span>
                </div>
                <h3>{name}</h3>
              </li>
            ))}
          </ul>
          <div className="produce-enquiry">
            <a href={`${whatsappUrl}?text=${encodeURIComponent('Hello Tinto Commodities, I would like to enquire about your produce. Please share your prices and availability.')}`}>
              <SocialIcon name="whatsapp" />Enquire on WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </main>
      <footer id="contact" className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#main" aria-label="Tinto Commodities home"><img src={assetPath('/images/tinto-logo.png')} alt="Tinto Commodities" width="100" height="100" loading="lazy" /></a>
            <h2>Tinto Commodities</h2>
            <p>Quality food products for a stronger Botswana.</p>
            <nav className="footer-socials" aria-label="Follow Tinto Commodities">
              <a href="https://www.tiktok.com/@tinto.commodities" target="_blank" rel="noopener noreferrer" aria-label="Tinto Commodities on TikTok (opens in a new tab)"><SocialIcon name="tiktok" />TikTok <span aria-hidden="true">↗</span></a>
              <a href="https://www.facebook.com/profile.php?id=61573897371498" target="_blank" rel="noopener noreferrer" aria-label="Tinto Commodities on Facebook (opens in a new tab)"><SocialIcon name="facebook" />Facebook <span aria-hidden="true">↗</span></a>
              <a href="https://www.instagram.com/tinto_commodities/" target="_blank" rel="noopener noreferrer" aria-label="Tinto Commodities on Instagram (opens in a new tab)"><SocialIcon name="instagram" />Instagram <span aria-hidden="true">↗</span></a>
            </nav>
          </div>
          <div className="footer-contact">
            <p className="section-eyebrow">Let’s talk</p>
            <h2>How can we help?</h2>
            <p>Message us for produce enquiries and orders.</p>
            <address>
              <span>WhatsApp</span>
              <a className="footer-phone" href={whatsappUrl}>+267 77 337 433 <span aria-hidden="true">↗</span></a>
            </address>
            <a className="footer-whatsapp" href={whatsappUrl}><SocialIcon name="whatsapp" />Chat on WhatsApp</a>
          </div>
        </div>
        <div className="footer-bottom"><span>Tinto Commodities · Botswana</span><a href="#main">Back to top ↑</a></div>
      </footer>
    </div>
  );
}
