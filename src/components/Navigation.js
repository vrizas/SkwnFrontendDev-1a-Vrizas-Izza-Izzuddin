/* eslint-disable */
import React, {useState} from 'react';
import menuIcon from '../assets/icons/hamburger-menu.svg';
import { FiChevronDown } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';

function Navigation() {
  const [isNavigationShowed, setIsNavigationShowed] = useState(false);

  const showNavigationHandler = () => {
    setIsNavigationShowed(previousVal => !previousVal);
  }

  return (
    <nav className="relative flex">
      <button onClick={showNavigationHandler} className="lg:hidden">
        <img src={menuIcon} alt="" width="24" />
      </button>
      <section className={`font-medium absolute top-[30px] right-0 bg-white shadow w-[200px] lg:flex lg:flex-row lg:gap-20 lg:relative lg:top-0 lg:shadow-none lg:w-fit xl:gap-32 ${isNavigationShowed ? "flex flex-col" : "hidden"}`}>
        <div className="flex flex-col lg:flex lg:flex-row lg:gap-5">
          <a href="#about-us" className="px-4 py-3">About us</a>
          <a href="#furniture" className="px-4 py-3 flex items-center gap-1">Furniture <FiChevronDown /></a>
          <a href="#partnerships" className="px-4 py-3">Partnerships</a>
          <a href="#contact" className="px-4 py-3">Contact</a>
        </div>
        <div className="flex gap-3 px-4 py-4 lg:p-0">
            <button className="bg-caramel text-primary h-[40px] px-3 rounded-md lg:px-6">Sign Up</button>
            <button className="bg-secondary w-[40px] h-[40px] flex items-center justify-center rounded-md"><HiOutlineShoppingBag color="white" size="20" /></button>
        </div>
      </section>
    </nav>
  );
}
 
export default Navigation;