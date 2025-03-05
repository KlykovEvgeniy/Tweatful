import HomeHeadlineArticle from '../../../reuse/HomeHeadlineArticle/HeadlineArticle';
import elevator from '../../../img/elevator.svg';
import impossible from '../../../img/impossible.svg';
import card from '../../../img/stage.svg';
import stage from '../../../img/flex.svg';
import Container from 'components/Container/Container';

export default function Benefits() {
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.';
  return (
    <section className="benefits">
      <Container>
        <h2>Benefits of working with us</h2>
        <div className="benefits__container">
          <HomeHeadlineArticle title="Time zones ain’t no thing" text={text} img={elevator} />
          <HomeHeadlineArticle title="Full spectrum of services" text={text} img={impossible} />
          <HomeHeadlineArticle title="Impossible? We’re on it" text={text} img={card} />
          <HomeHeadlineArticle title="Flexible work terms" text={text} img={stage} />
        </div>
      </Container>
    </section>
  );
}
