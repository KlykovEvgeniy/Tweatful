import { NavLink } from 'react-router-dom';

export default function AppBar() {
  const style = document.body.style;
  const handleHomeClick = () => {
    style.backgroundColor = 'white';
  };
  const handleFeaturesClick = () => {
    style.backgroundColor = '#052825';
  };

  const handlePricingClick = () => {
    style.backgroundColor = 'white';
  };

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <NavLink onClick={handleHomeClick} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleFeaturesClick} to="/features">Features</NavLink>
        </li>
        <li>
          <NavLink onClick={handlePricingClick} to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/help">Help</NavLink>
        </li>
      </ul>
    </nav>
  );
}
