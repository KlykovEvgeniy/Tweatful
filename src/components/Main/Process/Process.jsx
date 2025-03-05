import Container from 'components/Container/Container';
import { FaCircle } from 'react-icons/fa6';
import Circle from 'reuse/Circle/Circle';

export default function Process() {
  return (
    <section className="process">
      <Container>
        <h2 className="process-title">The procrss we follow</h2>
        <div className="process-container">
          <Circle title="Ideate" text="Turn your idea from concept to MVP" img={<FaCircle fill='blue' />} line />
          <Circle title="Design" text="Sketch out the product to align the user needs" img={<FaCircle />} line />
          <Circle title="Develop" text="Convert the designs into a live application" img={<FaCircle />} line />
          <Circle title="Deploy" text="Launching the application to the market" img={<FaCircle />} />
        </div>
      </Container>
    </section>
  );
}
