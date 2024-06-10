import React, {useState} from "react";

import './qualification.css'

const Qualification = () => {

    const experience = [
        {
            id: 1,
            company: 'Freelance',
            position: 'Web developer',
            location: 'Ukraine, Remote',
            dataStart: '11.2020',
            dataEnd: 'Present',
        },
        {
            id: 2,
            company: 'NextG',
            position: 'Wordpress developer',
            location: 'Ukraine, Remote',
            dataStart: '08.2021',
            dataEnd: '11.2021',
        },
        {
            id: 3,
            company: 'Brightech',
            position: 'Wordpress developer',
            location: 'Ukraine, Nikolaev',
            dataStart: '11.2021',
            dataEnd: '07.2022',
        },
        {
            id: 4,
            company: 'Brightech',
            position: 'Team Lead/Tech Lead Wordpress developer',
            location: 'Ukraine, Nikolaev',
            dataStart: '07.2022',
            dataEnd: '03.2023',
        },
        {
            id: 5,
            company: 'Bambook',
            position: 'Middle Wordpress developer',
            location: 'Ukraine, Lviv',
            dataStart: '03.2023',
            dataEnd: '07.2023',
        },
        {
            id: 6,
            company: 'Ninesquares',
            position: 'Middle Wordpress developer',
            location: 'Ukraine, Remote',
            dataStart: '03.2023',
            dataEnd: '12.2023',
        },
        {
            id: 6,
            company: '7Devs',
            position: 'Middle Wordpress developer',
            location: 'Ukraine, Remote',
            dataStart: '11.2023',
            dataEnd: 'Present',
        }
    ];
    const education = [
        {
            id: 1,
            place: 'MNU Sukhomlynsky',
            name: 'Bachelor`s degree, Computer Science',
            location: 'Ukraine, Nikolaev',
            dataStart: '09.2016',
            dataEnd: '06.2020',
        },
        {
            id: 2,
            place: 'BeetRoot Academy',
            name: 'Frontend Developer',
            location: 'Ukraine, Nikolaev',
            dataStart: '04.2020',
            dataEnd: '08.2020',
        },
        {
            id: 3,
            place: 'MNU Sukhomlynsky',
            name: 'Master`s Degree, English Language and Literature',
            location: 'Ukraine, Nikolaev',
            dataStart: '08.2022',
            dataEnd: 'Present',
        },
    ];

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section__title">
                Qualification
            </h2>

            <span className="section__subtitle">
                My personal journey
            </span>
            <div className="container qualification__container">
                <div className="qualification__tabs">
                    <div className={
                        toggleState === 1
                            ? 'qualification__button qualification__active button--flex'
                            : 'qualification__button button--flex'
                    }
                         onClick={() => toggleTab(1)}>
                        <i className="qualification__icon uil uil-briefcase-alt"></i>
                        {' '}
                        Experience
                    </div>
                    <div className={
                        toggleState === 2
                            ? 'qualification__button qualification__active button--flex'
                            : 'qualification__button button--flex'
                    }
                         onClick={() => toggleTab(2)}
                    >
                        <i className="qualification__icon uil uil-graduation-cap"></i>
                        {' '}
                        Education
                    </div>
                </div>

                <div className="qualification__sections">

                    <div className={toggleState === 1
                        ? 'qualification__content qualification__content-active'
                        : 'qualification__content'
                    }>
                        {experience.map(item => (
                            <div className="qualification__data" key={item.id}>
                                <div  className='qualification__data-info'>
                                    <h3 className="qualification__title">
                                        {item.position}
                                    </h3>

                                    <div className="qualification__company">
                                        {item.company}
                                    </div>

                                    <span className="qualification__subtitle">
                                        {item.location}
                                    </span>

                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        {item.dataStart} - {item.dataEnd}
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder">

                                    </span>
                                    <span className="qualification__line">

                                    </span>
                                </div>

                                <div className='qualification__data-space'></div>
                            </div>
                        ))}

                    </div>

                    <div className={toggleState === 2
                        ? 'qualification__content qualification__content-active'
                        : 'qualification__content'
                    }>
                        {education.map(item => (
                            <div className="qualification__data" key={item.id}>
                                <div className='qualification__data-info'>
                                    <h3 className="qualification__title">
                                        {item.name}
                                    </h3>
                                    <div className="qualification__place">
                                        {item.place}
                                    </div>

                                    <span className="qualification__subtitle">
                                            {item.location}
                                        </span>

                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        {item.dataStart} - {item.dataEnd}
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder">

                                    </span>
                                    <span className="qualification__line">

                                    </span>
                                </div>

                                <div className='qualification__data-space'></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;