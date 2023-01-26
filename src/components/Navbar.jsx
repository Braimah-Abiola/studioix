import { useState } from "react"

import {close, logo, menu, banner, bannerlines} from '../assets';
import {navLinks} from '../constants';
import GetStarted from "./GetStarted";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="studioix" className="w-[160px] h-[45px]"/>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-[1]">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[18px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-nav mr-10`}>
              <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <div className="z-[1]">
            <GetStarted/>
        </div>
      </ul>
        
      <div className="sm:hidden flex flex-1 justify-end items-center z-[5]">
          <img src={toggle ? close : menu} alt="menu" className="w-[20px] h-[20px] object-contain z-[5]" onClick={() => setToggle((prev) => !prev)}/>

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 menu-blue-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className="list-none flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[18px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
      </div>
      
    </nav>
  )
}

export default Navbar