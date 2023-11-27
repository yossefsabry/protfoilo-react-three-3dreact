/* eslint-disable react/jsx-pascal-case */

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Inputs from './elements/Inputs/Inputs';
import { MdMarkEmailRead } from "react-icons/md";
import Map from './Map'; // Make sure to import the Map component

const Contact = () => {
    const form = useRef();
    const [checkSend, setCheckSend] = useState(null);

    const handleEventSubmit = (e) => {
        e.preventDefault();
        e.target.disabled = true;


        emailjs
            .sendForm('service_a54iedi', 'template_l8uq9dr', form.current, 'XFpxFVzNR06ijnTtl')
            .then(
                (result) => {
                    // console.log(result.text);
                    setCheckSend(true);
                },
                (error) => {
                    console.log(error.text);
                    setCheckSend(false);
                }
            );
    };

    return (

        <section id="Contact">
            <div className="contact-container flex items-center md:flex-row flex-col justify-between gap-4 w-full">
                {/* Assuming Map is a component you have created */}
                <Map />
                <form action="" ref={form} className="flex gap-8 flex-col items-center justify-evenly p-1 md:w-1/2 w-full">
                    <h2 className='text-3xl font-bold flex items-center justify-center gap-2'>Contact <MdMarkEmailRead className=' text-purple-800' /> </h2>
                    <Inputs type="text" name="name" />
                    <Inputs type="email" name="email" />
                    <textarea name="message" placeholder="Message..."></textarea>
                    {/* Fix the typo here: it should be "submit" instead of "sumbit" */}
                    <input type="submit" value="submit" onClick={handleEventSubmit} className='input-form' />
                    {checkSend === true ? "Message sent successfully...." : checkSend === false ? "error happend...." : null}
                </form>
            </div>
        </section>
    );
};

export default Contact;
