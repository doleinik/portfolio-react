import React, {useState} from "react";

import './portfolio.css';
import brightech from '../../assets/brightech.jpg';
import hedgehog from '../../assets/hedgehog.jpg';
import tilladelse from '../../assets/tilladelse.jpg';
import truit from '../../assets/truit.jpg';
import dentino from '../../assets/dentino.png';
import brainwave from '../../assets/brainwave.png';


const Portfolio = () => {
    const portfolioList = [
        {
            id: 1,
            title: 'Dentino',
            image: dentino,
            categories: [
                'WordPress', 'HTML/CSS', 'Scss/Sass', 'JavaScript', 'PHP', 'Gsap'
            ],
            description: 'Dentistry website from Ukraine.',
            link: 'https://dentino.com.ua/'
        },
        // {
        //     id: 2,
        //     title: 'BrainWave',
        //     image: brainwave,
        //     categories: [
        //         'WordPress', 'HTML/CSS', 'Scss/Sass', 'JavaScript', 'PHP', 'Gsap'
        //     ],
        //     description: 'A site for an IT studio.',
        //     link: 'https://braniw.000webhostapp.com/'
        // },
        {
            id: 3,
            title: 'Brightech',
            image: brightech,
            categories: [
                'WordPress', 'HTML/CSS', 'Scss/Sass', 'JavaScript', 'PHP', 'Three.js', 'Gsap'
            ],
            description: 'A site for an IT studio, during the development of which many technologies were used for animations. It turned out to be a very interesting and animated site.',
            link: 'https://brightech.it'
        },
        {
            id: 4,
            title: 'HedgeHog',
            image: hedgehog,
            categories: [
                'WordPress', 'HTML/CSS', 'Scss/Sass', 'JavaScript', 'PHP'
            ],
            description: 'A site for a recruiting company. A very large and practical project with interesting ideas.',
            link: 'https://hedgehog-agency.com/'
        },
        {
            id: 5,
            title: 'TillaDelse',
            image: tilladelse,
            categories: [
                'WordPress', 'HTML/CSS', 'Scss/Sass', 'JavaScript', 'PHP', 'MagicScroll', 'Gsap'
            ],
            description: 'A site for an IT company, very interesting work and great practice with animation work that has its own story and captivates the user',
            link: 'https://tilladelsemarketingagency.com/'
        },
        {
            id: 6,
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
                    {portfolioList.map(item => (
                        <li className='portfolio__item' key={item.id}>
                            <img src={item.image} alt=""/>
                            <div className='portfolio__item-info'>
                                <h3 className="portfolio__title">{item.title}</h3>
                                <span className="portfolio__button" onClick={() => toggleTab(item.id)}>
                                View More
                                <i className="uil-arrow-right portfolio__button-icon uil"></i>
                            </span>
                            </div>
                            <div
                                className={toggleState === item.id ? 'portfolio__modal active-modal' : 'portfolio__modal'}>
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