import Container from 'components/Container/Container';
import CountItem from 'reuse/CountItem/CountItem';

export default function Count() {
  return (
    <section className="count">
      <Container>
        <h2 className="count-title">Some count that matters</h2>
        <p className="count-text">Our achievement in the journey depicted in numbers</p>
        <div className="count-container">
          <CountItem title="5" text="Service Geographics" />
          <CountItem title="30" text="Fortune 500 Clients" />
          <CountItem title="300" text="Dedicated Members" />
          <CountItem title="8" text="Years of Journey" />
        </div>
      </Container>
    </section>
  );
}
