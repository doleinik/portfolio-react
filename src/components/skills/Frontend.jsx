import React from "react";

const frontend = [
    {
        name: 'HTML/CSS',
        level: 'Advanced'
    },
    {
        name: 'Scss/Sass',
        level: 'Advanced'
    },
    {
        name: 'JavaScript',
        level: 'Advanced'
    },
    {
        name: 'Git',
        level: 'Advanced'
    },
    {
        name: 'React',
        level: 'Intermediate'
    }
]

const Frontend = () => {
    return (
        <div className='skills__content'>
            <h3 className='skills__title'>Frontend developer</h3>

            <div className="skills__box">
                {frontend.map((item, index) => (
                    <div className="skills__data" key={index}>
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{item.name}</h3>
                            <span className="skills__level">
                                {item.level}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Frontend;
