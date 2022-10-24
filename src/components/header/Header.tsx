import './style.scss';

export function Header() {
    return (
        <header className="header">
            <h1>
                <img height={19} src="/img/logo.svg"></img>
            </h1>
            <menu>
                <ul>
                    <li className="uderline">Info</li>
                    <li className="uderline">Contact</li>
                </ul>
            </menu>
        </header>
    );
}
