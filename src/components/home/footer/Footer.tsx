import './footer.scss';
import Link from '../../link/Link';

export default function Footer() {
    return (
        <footer className="footer content">
            <section>
                <ul>
                    <li>
                        <Link>Info</Link>
                    </li>
                    <li>
                        <Link>Privace</Link>
                    </li>
                </ul>
            </section>

            <section>
                <h2>Contact me on:</h2>
                <ul>
                    <li>
                        Telegram: <Link>@jester4q</Link>
                    </li>
                    <li>
                        Email: <Link>jester4q@gmail.com</Link>
                    </li>
                </ul>
            </section>
        </footer>
    );
}
