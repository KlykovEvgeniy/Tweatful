import {NavLink} from 'react-router-dom';

export default function AppBar() {
    return (<nav className="nav">
        <ul className="nav-list">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/features">Features</NavLink>
            </li>
            <li>
                <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
                <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
                <NavLink to="/help">Help</NavLink>
            </li>
        </ul>
    </nav>);
}
