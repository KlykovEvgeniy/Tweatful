import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Dropdowm.css';
import { useBodyOverflow } from '../../hooks/useBodyOverflow';
import { IoMenu } from 'react-icons/io5';
import { GrClose } from 'react-icons/gr';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const style = document.body.style;

  const handleHomeClick = () => {
    style.backgroundColor = 'white';
    window.scrollTo({ top: 0 });
  };
  const handleFeaturesClick = () => {
    style.backgroundColor = '#052825';
    window.scrollTo({ top: 0 });
  };

  const hanldeToggler = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClick = (event) => {
    if (event.target.nodeName === 'A' && isOpen) {
      setIsOpen(false);
    }
  };
  useBodyOverflow(isOpen);
  return (
    <>
      <button className="dropdown-button" type="button" onClick={hanldeToggler}>
        {isOpen ? <GrClose /> : <IoMenu />}
      </button>
      {isOpen && (
        <nav onClick={handleClick} className="nav-dropdown">
          <ul>
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
      )}
    </>
  );
}
