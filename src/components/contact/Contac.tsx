import Link from '../link/Link';

import './contact.scss';

export default function Contact() {
    return (
        <article className="contact-page container">
            <h3>Symbiosis</h3>
            <p>
                Interested in working together!
                <br />
                <Link to="popup:form">Get started!</Link>
            </p>
            <h3>My email</h3>
            <p>
                <Link to="mailto:jester4q@gmail.com">jester4q@gmail.com</Link>
            </p>
            <h3>My telegram</h3>
            <p>
                <Link to="https://t.me/jester4qm">@jester4q</Link>
            </p>
        </article>
    );
}
