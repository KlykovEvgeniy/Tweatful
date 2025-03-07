import ModernItem from 'reuse/ModernItem/ModernItem';
import star from '../../img/white-star.svg';
import light from '../../img/light.svg';
import mark from '../../img/mark.svg';
import box from '../../img/box.svg';
import heart from '../../img/heart.svg';
import guard from '../../img/guard.svg';
import Container from 'components/Container/Container';

export default function Modern() {
  const text = 'Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons';

  return (
    <section className="modern">
      <Container>
        <h2 className="modern-title">Headline of Modern and Digital Platform</h2>
        <div className="modern-container">
          <ModernItem img={star} title="First Feature" text={text}/>
          <ModernItem img={light} title="Second Feature" text={text} />
          <ModernItem img={mark} title="Third Feature" text={text} />
          <ModernItem img={box} title="Fourth Feature" text={text} />
          <ModernItem img={heart} title="Fifth Feature" text={text} />
          <ModernItem img={guard} title="Sixth Feature" text={text} />
        </div>
      </Container>
    </section>
  );
}
