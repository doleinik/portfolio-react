import React from "react";

const backend = [
    {
        name: 'WordPress',
        level: 'Advanced'
    },
    {
        name: 'PHP',
        level: 'Advanced'
    },
    {
        name: 'Node Js',
        level: 'Advanced'
    },
    {
        name: 'MySQL',
        level: 'Base'
    }

]

const Backend = () => {
    return (
        <div className='skills__content'>
            <h3 className='skills__title'>Backend developer</h3>

            <div className="skills__box">
                {backend.map((item, index) => (
                    <div className="skills__data" key={index}>
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">
                                {item.name}
                            </h3>
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

export default Backend;
