import AppBar from './AppBar/AppBar';
import BlueButton from 'reuse/BlueButton/Button';
import Logo from './Logo/Logo';
import logo from '../../img/Logo (5).svg';
import Container from 'components/Container/Container';
import Dropdown from "../Dropdown/Dropdown";

import '../../styles/header.css';
import useWindowSize from "../../hooks/useWindowSize";

export default function Header() {
    const size = useWindowSize();

    return (
        <header className="header">
            <Container>
                <div className="logo-bar">
                    <Logo logo={logo}/>
                    {size.width > 924 && <AppBar/>}
                </div>
                {size.width > 924 && <BlueButton text="Book A Meeting"/>}
                {size.width < 924 && <Dropdown/>}
            </Container>
        </header>
    );
}
