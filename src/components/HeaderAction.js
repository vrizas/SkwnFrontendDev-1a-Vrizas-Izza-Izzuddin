/* eslint-disable */
import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';

function HeaderAction() {
  return (
    <div className="hidden lg:flex lg:gap-3">
        <button className="bg-caramel text-primary font-medium py-2 px-6 rounded-md">Sign Up</button>
        <button className="bg-secondary w-[40px] h-[40px] flex items-center justify-center rounded-md"><HiOutlineShoppingBag color="white" size="20" /></button>
    </div>
  );
}
 
export default HeaderAction;