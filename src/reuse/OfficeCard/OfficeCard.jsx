import { FaCaretRight } from 'react-icons/fa';
import './styles/officeCard.css';

export default function OfficeCard({ img, title, text }) {
  return (
    <article className="office-card">
      <img src={img} alt={img} />
      <div className="office-card-text">
        <h3 className="office-card-title">{title}</h3>
        <p className="office-card-description">{text}</p>
        <a href="https://www.google.ru/maps">
          Open in maps <FaCaretRight />
        </a>
      </div>
    </article>
  );
}
