import './footer.scss';
import Link from '../../link/Link';

export default function Footer() {
    return (
        <footer className="footer container">
            <section>
                <ul className="footer__menu">
                    <li className="footer__menu-item">
                        <Link to="/info">Info</Link>
                    </li>
                    <li className="footer__menu-item">
                        <Link to="/privace">Privace</Link>
                    </li>
                </ul>
            </section>

            <section>
                <h2>Contact me on:</h2>
                <ul className="footer__menu">
                    <li className="footer__menu-item">
                        Telegram: <Link to="https://t.me/jester4q">@jester4q</Link>
                    </li>
                    <li className="footer__menu-item">
                        Email: <Link to="mailto:jester4q@gmail.com">jester4q@gmail.com</Link>
                    </li>

                    <li className="footer__menu-stealth-item">
                        <Link to="/privacy" stealth={true}>
                            Privacy
                        </Link>
                    </li>
                </ul>
            </section>
        </footer>
    );
}
