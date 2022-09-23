import React from 'react';
import gustoLogo from '../assets/images/gusto-logo.svg';
import stripeLogo from '../assets/images/stripe-logo.svg';
import treehouseLogo from '../assets/images/treehouse-logo.svg';
import upworkLogo from '../assets/images/upwork-logo.svg';

function Partner() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-lightGray px-3 py-6 lg:px-14 lg:py-16 lg:flex-row lg:justify-between" id="partnerships">
        <div className="text-primary text-center lg:text-left">
            <p className="font-bold text-2xl lg:text-5xl">25+</p>
            <h3 className="text-sm lg:text-base mt-1">PARTNERED BRANDS</h3>
        </div>
        <div className="flex gap-5 lg:gap-16">
            <img src={gustoLogo} alt="gusto logo" className="w-[49px] lg:w-[80px]" />
            <img src={stripeLogo} alt="stripe logo" className="w-[49px] lg:w-[80px]" />
            <img src={treehouseLogo} alt="treehouse logo" className="w-[49px] lg:w-[150px]" />
            <img src={upworkLogo} alt="upwork logo" className="w-[49px] lg:w-[100px]" />
        </div>
    </div>
  );
}
 
export default Partner;