import { NavLink } from 'react-router-dom';

export default function AppBar() {
  const style = document.body.style;
  const handleHomeClick = () => {
    style.backgroundColor = 'white';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleFeaturesClick = () => {
    style.backgroundColor = '#052825';
    window.scrollTo({ top: 0 });
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
          <NavLink onClick={handleFeaturesClick} to="/features">
            Features
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleHomeClick} to="/pricing">
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleHomeClick} to="/about">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleHomeClick} to="/help">
            Help
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
