import './portfolio.scss';

const PORTFOLIO = [
    {
        title: 'Website for weight loss «Bormental.ru»',
        desc: 'Website develop / 2009',
        url: 'https://www.bormental.ru',
        image: 'img/portfolio/bormental.ru.png',
    },
    {
        title: 'Website for weight loss «Bormental.ru»',
        desc: 'Website develop / 2009',
        url: 'https://www.bormental.ru',
        image: 'img/portfolio/bormental.ru.png',
    },
    {
        title: 'Website for weight loss «Bormental.ru»',
        desc: 'Website develop / 2009',
        url: 'https://www.bormental.ru',
        image: 'img/portfolio/bormental.ru.png',
    },
];

export default function Portfolio() {
    return (
        <section className="portfolio content">
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
