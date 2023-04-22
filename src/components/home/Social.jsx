import React from "react";

const Social = () => {
    return (
        <div className='home__social opacity'>
            <a href="https://www.instagram.com/__doleinik/" target='_blank' className='home__social-icon'>
                <i className='uil uil-instagram'></i>
            </a>
            <a href="https://t.me/doleinik" target='_blank' className='home__social-icon'>
                <i className='uil uil-telegram'></i>
            </a>
            <a href="https://github.com/doleinik" target='_blank' className='home__social-icon'>
                <i className='uil uil-github-alt'></i>
            </a>
        </div>
    )
}

export default Social;