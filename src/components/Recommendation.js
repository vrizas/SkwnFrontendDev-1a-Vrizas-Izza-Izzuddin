import React, { Fragment, useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import heroImage from '../assets/images/hero.jpg';

function Recommendation() {
    const [open, setOpen] = useState(2);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div className="grid lg:grid-cols-hero gap-5">
            <section className="px-3 py-6 lg:px-14 lg:py-10 lg:order-last">
                <div className="text-center mb-4 lg:text-left lg:mb-10">
                    <p className="text-sm lg:text-xl">Categories</p>
                    <h3 className="text-primary font-bold mt-2 lg:text-4xl lg:mt-6">Furniture Sets Recommendations</h3>
                </div>
                <Fragment>
                    <Accordion className={`py-3 px-4 ${open === 1 ? "bg-caramel" : "bg-lightGray"}`} open={open === 1} icon="" >
                        <AccordionHeader className="border-none font-inter text-black text-base p-0" onClick={() => handleOpen(1)}>Bedroom</AccordionHeader>
                        <AccordionBody className="font-inter text-black text-sm py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repellat commodi perspiciatis nam atque!</AccordionBody>
                    </Accordion>
                    <Accordion className={`py-3 px-4 ${open === 2 ? "bg-caramel" : "bg-lightGray"}`} open={open === 2} icon="">
                        <AccordionHeader className="border-none font-inter text-black text-base p-0" onClick={() => handleOpen(2)}>Living Room</AccordionHeader>
                        <AccordionBody className="font-inter text-black text-sm py-3">Enjoy a great living room aesthetics with your family  Designs created for increased comfortability</AccordionBody>
                    </Accordion>
                    <Accordion className={`py-3 px-4 ${open === 3 ? "bg-caramel" : "bg-lightGray"}`} open={open === 3} icon="">
                        <AccordionHeader className="border-none font-inter text-black text-base p-0" onClick={() => handleOpen(3)}>Home Office</AccordionHeader>
                        <AccordionBody className="font-inter text-black text-sm py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repellat commodi perspiciatis nam atque!</AccordionBody>
                    </Accordion>
                    <Accordion className={`py-3 px-4 ${open === 4 ? "bg-caramel" : "bg-lightGray"}`} open={open === 4} icon="">
                        <AccordionHeader className="border-none font-inter text-black text-base p-0" onClick={() => handleOpen(4)}>Gaming Room</AccordionHeader>
                        <AccordionBody className="font-inter text-black text-sm py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repellat commodi perspiciatis nam atque!</AccordionBody>
                    </Accordion>
                    </Fragment>
            </section>
            <section className="grid grid-cols-3 gap-2 px-3 py-6 lg:px-0 lg:py-10 lg:grid-cols-recImage lg:gap-5">
                <div className="h-[132px] lg:h-[500px]"><img src={heroImage} alt="" className="h-full object-cover rounded-xl" /></div>
                <div className="h-[132px] lg:h-[500px]"><img src={heroImage} alt="" className="h-full object-cover rounded-xl" /></div>
                <div className="h-[132px] lg:h-[500px]"><img src={heroImage} alt="" className="h-full object-cover rounded-xl" /></div>
            </section>
        </div>
    );
}
 
export default Recommendation;