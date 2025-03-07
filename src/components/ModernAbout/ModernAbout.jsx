import modernImg from '../../img/pricing-second-img.png';
import ModernItem from 'reuse/ModernItem/ModernItem';
import star from '../../img/white-star.svg';
import light from '../../img/light.svg';
import mark from '../../img/mark.svg';
import box from '../../img/box.svg';
import heart from '../../img/heart.svg';
import guard from '../../img/guard.svg';
import Container from 'components/Container/Container';

export default function ModernAbout() {
  const text = 'Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons';
  return (
    <section className="modern-about">
      <Container>
        <div className="modern-container">
          <ModernItem img={star} title="First Feature" text={text} color="black" />
          <ModernItem img={light} title="Second Feature" text={text} color="black" />
          <ModernItem img={mark} title="Third Feature" text={text} color="black" />
          <ModernItem img={box} title="Fourth Feature" text={text} color="black" />
          <ModernItem img={heart} title="Fifth Feature" text={text} color="black" />
          <ModernItem img={guard} title="Sixth Feature" text={text} color="black" />
        </div>
        <img className='moderm-about-img' src={modernImg} alt={modernImg} />
      </Container>
    </section>
  );
}
