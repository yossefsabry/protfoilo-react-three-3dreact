import Btn from './elements/Btn/Btn'
import image1 from "../assets/logo.png"
import { BsTextWrap } from "react-icons/bs";
import { useState } from 'react';

const Navbar = () => {
    const [showBars, setShowBars] = useState(false)
    const handleClickShowBars = () => {
        setShowBars(!showBars)
    }
    const handleClickEvent = () => {
        setShowBars(false)
    }
    return (
        <header className=' md:fixed relative top-0 flex items-center  gap-5 justify-between'>
            <div className="logo">
                <img src={image1} alt="iamge logo" />
            </div>
            <nav className={`${showBars ? "block" : "hidden"}`}>
                <ul className={`flex items-center justify-center gap-8`}>
                    <li onClick={() => handleClickEvent()}><a href="#Home" className='pointer  opacity-60 hover:opacity-100 transition-all '>Home</a></li>
                    <li onClick={() => handleClickEvent()}><a href="#About" className='pointer  opacity-60  hover:opacity-100 transition-all'>About</a></li>
                    <li onClick={() => handleClickEvent()}><a href="#Works" className='pointer  opacity-60 hover:opacity-100 transition-all '>Works</a></li>
                    <li onClick={() => handleClickEvent()}><a href="#Contact" className='pointer  opacity-60 hover:opacity-100 transition-all '>Contact</a></li>
                </ul>
            </nav>
            <Btn name="Hire Me" />
            <BsTextWrap className={`bars-menu ${showBars ? " text-red-500" : "text-white"}`} onClick={handleClickShowBars} />
        </header>
    )
}

export default Navbar
