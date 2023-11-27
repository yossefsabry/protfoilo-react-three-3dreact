import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className=" text-white text-center py-4 w-full">
            <div className="flex flex-col items-center">
                <p>&copy; {currentYear} All rights reserved.</p>
                <p>Find me on <a href="https://github.com/yossefsabry" target="_blank" rel="noopener noreferrer" className='underline text-blue-900' >yossefsabry</a></p>
                <div className="flex space-x-4 mt-2">
                    <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    {/* Add more social media icons as needed */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
