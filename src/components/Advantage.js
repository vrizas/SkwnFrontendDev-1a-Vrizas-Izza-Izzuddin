import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsBriefcase } from 'react-icons/bs';

function Advantage() {
  return (
    <div className="flex flex-col gap-6 text-caramel bg-primary px-3 py-6 lg:px-14 lg:py-10 lg:gap-10" id="about-us">
        <h3 className="text-center text-sm lg:text-left">WHY CHOOSE US?</h3>
        <p className="text-center font-bold text-2xl lg:text-left lg:text-5xl">We care about details and the quality of our products</p>
        <ul className="text-sm font-bold flex flex-col gap-5 lg:flex-row lg:gap-10">
          <li className="flex items-center gap-3"><span className="w-[40px] h-[40px] flex items-center justify-center bg-[#E5F0B680] rounded-lg"><BiSearchAlt2 size="23" /></span> MANUFACTURED WITH QUALITY MATERIALS</li>
          <li className="flex items-center gap-3"><span className="w-[40px] h-[40px] flex items-center justify-center bg-[#E5F0B680] rounded-lg text-2xl">5</span> 5 YEARS OF WARRANTY FOR EACH PROFUCT</li>
          <li className="flex items-center gap-3"><span className="w-[40px] h-[40px] flex items-center justify-center bg-[#E5F0B680] rounded-lg"><BsBriefcase size="20" /></span> 20 YEARS OF EXPERTISE</li>
        </ul>
    </div>
  );
}
 
export default Advantage;