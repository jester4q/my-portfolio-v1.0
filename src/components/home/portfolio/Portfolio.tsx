import './portfolio.scss';

import PORTFOLIO from '../../../data/projects.data.json';

export default function Portfolio() {
    return (
        <section className="portfolio container">
            <h1>
                <sup>My develop tell best about me</sup>Portfolio&nbsp;<span>08/22</span>
            </h1>
            <div className="portfolio__gallery">
                {PORTFOLIO.map((item, i) => (
                    <div key={i} className="portfolio__item">
                        <div className="portfolio_image">
                            <img src={item.image} alt={item.title}></img>
                        </div>
                        <div className="portfolio_desc">
                            <h3>{item.desc}</h3>
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
