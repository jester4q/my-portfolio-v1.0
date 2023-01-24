import Link from '../link/Link';
import './info.scss';

export default function Info() {
    return (
        <article className="info-page container">
            <aside className="info-page__aside">
                <img src="/img/myphoto.jpg"></img>
            </aside>
            <section className="info-page__text">
                <h1>I aspire to become a cool specialist and realize myself in the field of web develop</h1>

                <h3>About</h3>

                <p>
                    My name is Max and I have a huge experience working as a full-stack web developer. I want to grow every day in this field. I am writing
                    clean, testable, and secure codes based on web development best practices and build effective solutions that focused on your needs and which
                    are ease in future support.
                </p>

                <table>
                    <thead>
                        <tr>
                            <th>My Skills</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Programming Languages: </td>
                            <td>PHP, TS, Java, Python</td>
                        </tr>
                        <tr>
                            <td>Frameworks, CMS and libraries: </td>
                            <td>Yii2, WP, Angular, ReactJs, NodeJs, NextJS, NestJs, Webpack, OpenApi(Swagger), MUI, Tailwind, Bootstrap</td>
                        </tr>
                        <tr>
                            <td>Web technologies: </td>
                            <td>HTML, JS(jQuery), CSS(LESS, SASS), SVG, WebGL, SOAP, REST, JSON, CSV</td>
                        </tr>
                        <tr>
                            <td>Databases: </td>
                            <td>MySQL, PostgresSQL</td>
                        </tr>
                        <tr>
                            <td>API integrations: </td>
                            <td>Mailjet, GoogleMaps, Mangopay, Social login</td>
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
