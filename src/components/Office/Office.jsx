import OfficeCard from 'reuse/OfficeCard/OfficeCard';
import picture1 from '../../img/Address_ 459 Brandon Town Center Drive  Brandon, FL 33511 - Zoom_ 15 (1).png';
import picture2 from '../../img/Address_ 459 Brandon Town Center Drive  Brandon, FL 33511 - Zoom_ 15.png';
import Container from 'components/Container/Container';

export default function Office() {
  const text = '1085 Homer St. Vancouver BC, Canada V6B 2X5';
  return (
    <section className="office">
      <Container>
        <div className="office-titles">
          <h2 className="office-title">Our offices</h2>
          <p className="office-description">
            Amazing cities, totally tricked out offices. Explore the world of Tweakful.
          </p>
        </div>
        <div className="office-main">
          <OfficeCard title="Vancouver Office" text={text} img={picture2} />
          <OfficeCard title="San Fransisco" text={text} img={picture1} />
        </div>
      </Container>
    </section>
  );
}
