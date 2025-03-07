import Container from 'components/Container/Container';
import ModernPricingLeft from './ModernPricingLeft/ModernPricingLeft';
import ModernPricingRight from './ModernPricingRight/ModernPricingRight';

export default function ModernPricing() {
  return (
    <section className="modern-pricing">
      <Container>
        <ModernPricingLeft />
        <ModernPricingRight />
      </Container>
    </section>
  );
}
