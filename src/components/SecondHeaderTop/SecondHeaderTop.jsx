import BlueButton from 'reuse/BlueButton/Button';
import womanImg from '../../img/young-indian-busniess-woman.png';
import Container from 'components/Container/Container';

export default function SecondHeaderTop({ title, color, text, textColor = '#191919' }) {
  return (
    <section style={{ backgroundColor: color }} className="second-header-top">
      <Container>
        <h1 style={{ color: textColor }} className="second-header-title">
          {title}
        </h1>
        <p style={{ color: textColor }} className="second-header-descritpion">
          {text}
        </p>
        <div className="second-header-woman">
          <div className="second-header-container">
            <img src={womanImg} alt={womanImg} className="second-header-woman__img" />
            <div className="second-header-text">
              <p style={{ color: textColor }} className="header-name">
                Jesica Kumari
              </p>
              <p style={{ color: textColor }} className="header-woman-description">
                CEO Of Acme Limited
              </p>
            </div>
          </div>
          <BlueButton text="Explore More About This" />
        </div>
      </Container>
    </section>
  );
}
