import Circle from 'reuse/Circle/Circle';
import elevator from '../../img/eleavator-2.svg';
import design from '../../img/design.svg';
import card from '../../img/card.svg';
import deploy from '../../img/deploy.svg';
import Container from 'components/Container/Container';

export default function Approach() {
  return (
    <section className="process">
      <Container>
        <h2 style={{maxWidth: '730px', color: 'white'}} className="process-title">Our approach to reach your business goals</h2>
        <div className="process-container">
          <Circle
            title="Ideate"
            text="Turn your idea from concept to MVP"
            img={<img src={elevator} alt={elevator} />}
            line
            color="white"
          />
          <Circle
            title="Design"
            text="Sketch out the product to align the user needs"
            img={<img src={design} alt={design} />}
            line
            color="white"
          />
          <Circle
            title="Develop"
            text="Convert the designs into a live application"
            img={<img src={card} alt={card} />}
            line
            color="white"
          />
          <Circle
            title="Deploy"
            text="Launching the application to the market"
            img={<img src={deploy} alt={deploy} />}
            color="white"
          />
        </div>
      </Container>
    </section>
  );
}
