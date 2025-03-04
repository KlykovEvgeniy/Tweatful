import { Link } from 'react-router-dom';

export default function Logo({ logo }) {
  return (
    <Link className='logo' to="/about">
      <img src={logo} alt="logo" />
    </Link>
  );
}
