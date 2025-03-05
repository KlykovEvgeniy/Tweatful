import Container from 'components/Container/Container';
import HeadlineRight from './HeadlineRight/HeadlineRight';
import HeadlineLeft from './HealineLeft/HeadlineLeft';

export default function Headline() {
  return (
    <section className="headline">
      <Container>
        <HeadlineLeft />
        <HeadlineRight />
      </Container>
    </section>
  );
}
