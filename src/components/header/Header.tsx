import Link from '../link/Link';
import './header.scss';

export default function Header() {
    return (
        <header className="header">
            <div className="header__topbar content">
                <div className="header__logo"></div>
                <nav className="header__menu">
                    <ul>
                        <li>
                            <Link>Info</Link>
                        </li>
                        <li>
                            <Link>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
