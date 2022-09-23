import React from 'react';
import { FiMail } from 'react-icons/fi';

function Newsletter() {
  return (
    <div className="bg-lightGray text-primary text-center px-3 py-6 lg:px-14 lg:py-10 lg:text-left">
        <h3 className="text-sm lg:text-xl">LIMITED DEALS</h3>
        <p className="text-primary font-bold mt-1 lg:text-5xl lg:mt-4">Become a member and get 10% off of your first purchase</p>
        <div className="flex justify-center mt-4 lg:mt-6 lg:justify-start">
            <input type="email" placeholder="Enter your email here" className="font-inter text-sm text-secondary py-3 px-4 rounded-l-lg" />
            <button className="bg-caramel py-3 px-4 rounded-r-lg"><FiMail /></button>
        </div>
    </div>
  );
}
 
export default Newsletter;