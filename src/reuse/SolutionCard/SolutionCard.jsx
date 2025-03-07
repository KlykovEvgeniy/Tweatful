import { HiArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import './styles/solution-card.css';

export default function SolutionCard({ img, title, text }) {
  const handleClick = () => {
    document.body.style.backgroundColor = '#052825';
  };
  return (
    <article className="solution-card">
      <img className="solution-img" src={img} alt={img} />
      <h3 className="solution-title">{title}</h3>
      <p className="solution-text">{text}</p>
      <Link onClick={handleClick} to="/features">
        Explore
        <HiArrowLongRight/>
      </Link>
    </article>
  );
}
