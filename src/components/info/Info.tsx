import Link from '../link/Link';
import './info.scss';

export default function Info() {
    return (
        <article className="info-page container">
            <aside className="info-page__aside">
                <img></img>
            </aside>
            <section className="info-page__text">
                <h1>I aspire to become a cool specialist and realize myself in the field of interface design</h1>

                <h3>About</h3>

                <p>
                    My name is Max and I want to grow every day in a field that I love - design. At the head of it I put minimalistic solutions that put the
                    content at the forefront and solve the business problem as effectively as possible.
                </p>

                <p>
                    Now I'm looking for a place where I can gain experience under the guidance of a master. I am always open to new acquaintances and
                    collaborations.
                </p>

                <table>
                    <thead>
                        <tr>
                            <th>Skills</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ReactJs</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>AngularJs</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

                <div className="info-page__contact-me">
                    If you would like to connect with me, email <Link to="mailto:beztalanta.design@gmail.com">jester4q@gmail.com</Link> or add me on{' '}
                    <Link to="https://t.me/jester4q">telegram</Link>
                </div>
            </section>
        </article>
    );
}
