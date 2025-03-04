import { Link } from 'react-router-dom';
import { HiArrowLongRight } from 'react-icons/hi2';
import './styles/bluebutton.css';

export default function BlueButton({ text }) {
  return (
    <Link to='/pricing' className="blue-button">
      {text} <HiArrowLongRight fill="white" className="arrow" />
    </Link>
  );
}
