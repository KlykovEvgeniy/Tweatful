import { Link } from 'react-router-dom';
import { HiArrowLongRight } from 'react-icons/hi2';
import './styles/bluebutton.css';

export default function BlueButton({ text }) {
  const style = document.body.style
  const handleClick = () => {
    style.backgroundColor = 'white'
  }
  return (
    <Link onClick={handleClick} to='/pricing' className="blue-button">
      {text} <HiArrowLongRight fill="white" className="arrow" />
    </Link>
  );
}
