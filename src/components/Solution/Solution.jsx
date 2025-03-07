import Container from 'components/Container/Container';
import SolutionCard from 'reuse/SolutionCard/SolutionCard';
import elevator from '../../img/elevator.svg';
import impossible from '../../img/impossible.svg';
import card from '../../img/stage.svg';
import stage from '../../img/flex.svg';
import map from '../../img/mapTwo.svg';
import desktop from '../../img/desktop.svg';

export default function Solution() {
  const text = 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.';
  return (
    <section className="solution">
      <Container>
        <h2 className="solution-title">Solutions that connect you to your Prospects & Clients</h2>
        <div className="solutions-container">
          <SolutionCard img={elevator} title="Mobile Application" text={text}/>
          <SolutionCard img={desktop} title="Mobile Application" text={text}/>
          <SolutionCard img={card} title="Mobile Application" text={text}/>
          <SolutionCard img={map} title="Mobile Application" text={text}/>
          <SolutionCard img={impossible} title="Mobile Application" text={text}/>
          <SolutionCard img={stage} title="Mobile Application" text={text}/>
        </div>
      </Container>
    </section>
  );
}
