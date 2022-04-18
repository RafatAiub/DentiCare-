import React from 'react';
import './Footer.css';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer shadow-lg fw-bold'>
            <p className='fs-4'>www.denticare.com</p>
            <p><small>copyright @ <span className='text-danger'>{year} </span></small></p>
        </footer>

    );
};

export default Footer;