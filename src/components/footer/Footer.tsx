import './footer.scss';
import Link from '../link/Link';
import LetsTalk from './letstalk/LetsTalk';

export default function Footer() {
    return (
        <footer className="footer">
            <LetsTalk />
            <section className="footer__menu container">
                <div>
                    <ul className="">
                        <li className="footer__menu-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="footer__menu-item">
                            <Link to="/info">Info</Link>
                        </li>
                        <li className="footer__menu-item">
                            <Link to="/snake-game">Snake game</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2>Contact me on:</h2>
                    <ul className="">
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
                </div>
            </section>
        </footer>
    );
}
