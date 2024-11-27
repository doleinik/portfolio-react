import React, {useState} from "react";

import './portfolio.css';
import brightech from '../../assets/brightech.jpg';
import hedgehog from '../../assets/hedgehog.jpg';
import tilladelse from '../../assets/tilladelse.jpg';
import truit from '../../assets/truit.jpg';
import dentino from '../../assets/dentino.png';
import sushijo from '../../assets/sushijo.png';
// import brainwave from '../../assets/brainwave.png';
import regional from '../../assets/regional.jpg';
import grade from '../../assets/grade.png';
import getcracking from '../../assets/getcracking.png'; 


const Portfolio = () => {
    const portfolioList = [
        {
            title: 'Regional Homes',
            image: regional,
            categories: [
                'WordPress', 'HTML/CSS', 'Scss/Sass', 'JavaScript', 'PHP', 'Gsap'
            ],
            description: 'Regional Homes is a leader in the South Carolina market and has been delighting its customers with incredible homes and gated communities for decades.',
            link: 'https://regional-homes.com/'
        },
        {
            title: 'Grade Agency',
            image: grade,
            categories: [
                'React', 'Next.js', 'Prisma', 'PostgreSQL', 'TypeScript', 'Gsap'
            ],
            description: 'The Grade team specializes in developing functional, aesthetic, and intuitive web solutions for your business. For over 2 years, we have been a reliable partner for our clients in the digital space.',
            link: 'https://grade.agency'
        },
        {
            title: 'Get Cracking',
            image: getcracking,
            categories: [
                'WordPress', 'HTML/CSS', 'Tailwind', 'JavaScript', 'PHP'
            ],
            description: 'Egg Farmers of Ontario offers you recipes, cooking techniques and tips to simplify meal preparation.',
            link: 'https://www.getcracking.ca'
        }, 
        {
            title: 'Brightech',
            image: brightech,
            categories: [
                'WordPress', 'HTML/CSS', 'Scss/Sass', 'JavaScript', 'PHP', 'Three.js', 'Gsap'
            ],
            description: 'A site for an IT studio, during the development of which many technologies were used for animations. It turned out to be a very interesting and animated site.',
            link: 'https://brightech.it'
        },
        {
            title: 'Dentino',
            image: dentino,
            categories: [
                'WordPress', 'HTML/CSS', 'Scss/Sass', 'JavaScript', 'PHP', 'Gsap'
            ],
            description: 'Dentistry website from Ukraine.',
            link: 'https://dentino.com.ua/'
        },
        {
            title: 'SushiJo',
            link: 'https://sushijo.com/',
            image: sushijo,
            categories: [
                 'JavaScript', 'PHP', 'WordPress','WooComerce', 'HTML/CSS', 'Tailwind'
            ],
            description: 'Sushi delivery Sushi Jo: Order sushi delivery in Prague.'
        },
        {
            title: 'HedgeHog',
            image: hedgehog,
            categories: [
                'WordPress', 'HTML/CSS', 'Scss/Sass', 'JavaScript', 'PHP'
            ],
            description: 'A site for a recruiting company. A very large and practical project with interesting ideas.',
            link: 'https://hedgehog-agency.com/'
        },
        {
            title: 'TillaDelse',
            image: tilladelse,
            categories: [
                'WordPress', 'HTML/CSS', 'Scss/Sass', 'JavaScript', 'PHP', 'MagicScroll', 'Gsap'
            ],
            description: 'A site for an IT company, very interesting work and great practice with animation work that has its own story and captivates the user',
            link: 'https://tilladelsemarketingagency.com/'
        },
        {
            title: 'Truit',
            image: truit,
            categories: [
                'WordPress', 'HTML/CSS', 'Scss/Sass', 'JavaScript'
            ],
            description: 'A site for IT business management. The site has a light interactive design',
            link: 'https://truit.io/'
        },
    ]

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }


    return (
        <section className="portfolio section" id="portfolio">
            <h2 className='section__title'>Portfolio</h2>
            <span className="section__subtitle">Most recent work</span>
            <div className="grid container portfolio__container">
                <ul className="portfolio__category">
                    {/*{categoriesList.map((item, index) => (*/}
                    {/*    <li className="portfolio__category--active portfolio__category-item" key={index}>*/}
                    {/*        {item}*/}
                    {/*    </li>*/}
                    {/*))}*/}
                </ul>

                <ul className="portfolio__list">    
                    {portfolioList.map((item, key ) => (
                        <li className='portfolio__item' key={key + 1}>
                            <img src={item.image} alt=""/>
                            <div className='portfolio__item-info'>
                                <h3 className="portfolio__title">{item.title}</h3>
                                <span className="portfolio__button" onClick={() => toggleTab(key + 1)}>
                                View More
                                <i className="uil-arrow-right portfolio__button-icon uil"></i>
                            </span>
                            </div>
                            <div
                                className={toggleState === key + 1 ? 'portfolio__modal active-modal' : 'portfolio__modal'}>
                                <div className='portfolio__modal-content'>
                                    <i className="portfolio__modal-close uil uil-times"
                                       onClick={() => toggleTab(0)}></i>
                                    <h3 className="portfolio__modal-title">{item.title}</h3>
                                    <p className='portfolio__modal-description'>
                                        {item.description}
                                    </p> 

                                    <h3 className='portfolio__modal-preview'>Preview:
                                        <a href={item.link} target='_blank' rel="noreferrer">{item.title}</a>
                                    </h3>

                                    <h3 className='portfolio__modal-technologies'>List of technologies:</h3>

                                    <ul className='portfolio__modal-list'>
                                        {item.categories.map((category, index) => (
                                            <li className="portfolio__modal-item" key={index}>
                                                <i className="portfolio__modal-icon uil uil-check-circle"></i>
                                                <p className="portfolio__modal-info">
                                                    {category}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;