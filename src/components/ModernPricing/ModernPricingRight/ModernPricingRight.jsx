import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa6';

export default function ModernPricingRight() {
  const handleClick = () => {
    document.body.style.backgroundColor = '#052825';
  };
  return (
    <div className="modern-pricing-right">
      <h2 className="modern-pricing-title">Headline of Modern and Digital Lending Platform In a Few Seconds for You</h2>
      <p className="pricing-modern-description">
        Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy to streamline the lending
        process Gorgeous, high-quality design system for mobile, tablet & a few reasons digital
      </p>
      <Link className='modern-button' onClick={handleClick} to="/features">
        <FaPlay />
        Play Tutorial
      </Link>
    </div>
  );
}
