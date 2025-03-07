import pricingImage from '../../../img/pricing-main-img.png';
export default function ModernPricingLeft() {
  return (
    <div className="pricing-modern-left">
      <img src={pricingImage } alt={pricingImage } />
      <p className="modern-pricing-lower__text">Video store with 10 samples on 20 min</p>
    </div>
  );
}
