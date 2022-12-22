import Link from '../link/Link';
import './header.scss';
import Logo from './logo/Logo';

export default function Header() {
    return (
        <header className="header container">
            <Logo />
            <nav className="header__menu">
                <ul>
                    <li>
                        <Link to="/info">Info</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
