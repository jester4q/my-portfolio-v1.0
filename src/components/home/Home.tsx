import './home.scss';

import About from './about/About';
import Hello from './hello/Hello';
import LetsTalk from './letstalk/LetsTalk';
import Portfolio from './portfolio/Portfolio';
import Footer from './footer/Footer';

export default function Home() {
    return (
        <>
            <article className="home-page">
                <Hello />
                <About />
                <Portfolio />
                <LetsTalk />
            </article>
            <Footer />
        </>
    );
}
