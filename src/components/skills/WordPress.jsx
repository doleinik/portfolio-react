import React from "react";

const wordpress = [
    {
        name: 'ACF Pro',
        level: 'Advanced'
    },
    {
        name: 'Gutenberg',
        level: 'Advanced'
    },
    {
        name: 'CF7',
        level: 'Advanced'
    },
    {
        name: 'Gravity forms',
        level: 'Advanced'
    },
    {
        name: 'Polylang',
        level: 'Advanced'
    },
    {
        name: 'WPML',
        level: 'Advanced'
    },
    {
        name: 'Elementor',
        level: 'Intermediate'
    },
    {
        name: 'Woocommerce',
        level: 'Intermediate'
    }
]

const WordPress = () => {
    return (
        <div className='skills__content'>
            <h3 className='skills__title'>Wordpress plugin</h3>

            <div className="skills__box">
                {wordpress.map((item, index) => (
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

export default WordPress;
