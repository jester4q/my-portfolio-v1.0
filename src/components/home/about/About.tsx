import Link from '../../link/Link';
import './about.scss';

export default function About() {
    return (
        <section className="about container">
            <p className="about__text1">
                Hi, my name is Max. I implements modern websites to make you business even better, improve sales and keep you customers happy.
            </p>
            <p className="about__text2">
                I would be happy to work with cool people, help them in business or learn something new. It would help me grow as specialist and be a good team
                player.
                <span className="about__link">
                    <Link to="/info">About me</Link>
                </span>
            </p>
        </section>
    );
}
