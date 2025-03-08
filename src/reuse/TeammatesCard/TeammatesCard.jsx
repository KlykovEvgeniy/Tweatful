import twiter from '../../img/twiter.svg';
import inc from '../../img/in.svg';
import google from '../../img/googleLogo.svg';
import Container from 'components/Container/Container';
import './styles/teammatsCard.css'

export default function TeammatesCard({ title, role }) {
  return (
    <article className="teammates-card">
      <div className="teammates-card-image-faker"></div>
      <h3>{title}</h3>
      <p>{role}</p>
      <div className="teammates-logos-container">
        <div className="teammates-logo-border">
          <img src={inc} alt={inc} />
        </div>
        <div className="teammates-logo-border">
          <img src={google} alt={google} />
        </div>
        <div className="teammates-logo-border">
          <img src={twiter} alt={twiter} />
        </div>
      </div>
    </article>
  );
}
