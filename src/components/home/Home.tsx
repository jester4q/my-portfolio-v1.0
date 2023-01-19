import './home.scss';

import About from './about/About';
import Hello from './hello/Hello';
import Portfolio from './portfolio/Portfolio';

export default function Home() {
    return (
        <>
            <article className="home-page">
                <Hello />
                <About />
                <Portfolio />
            </article>
        </>
    );
}
