import Circle from 'reuse/Circle/Circle';
import elevator from '../../img/eleavator-2.svg';
import design from '../../img/design.svg';
import card from '../../img/card.svg';
import deploy from '../../img/deploy.svg';
import Container from 'components/Container/Container';
import line1 from '../../img/Line Indicator.svg';
import line2 from '../../img/Line Indicator (1).svg';
import CircleSecond from 'reuse/Circle/CircleSecond';

export default function Approach() {
  return (
    <section className="process">
      <Container>
        <h2 style={{ maxWidth: '730px', color: 'white' }} className="process-title">
          Our approach to reach your business goals
        </h2>
        <div className="process-container">
          <CircleSecond
            title="Ideate"
            text="Turn your idea from concept to MVP"
            img={elevator}
            line
            color="white"
            secondImg={line1}
          />
          <CircleSecond
            title="Design"
            text="Sketch out the product to align the user needs"
            img={design}
            line
            color="white"
            secondImg={line2}
          />
          <CircleSecond
            title="Develop"
            text="Convert the designs into a live application"
            img={card}
            line
            color="white"
            secondImg={line1}
          />
          <CircleSecond
            title="Deploy"
            text="Launching the application to the market"
            img={deploy}
            color="white"
          />
        </div>
      </Container>
    </section>
  );
}
