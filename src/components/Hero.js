/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsPlayCircle } from 'react-icons/bs';
import { FiChevronRight } from 'react-icons/fi';

function Hero() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/categories/3/products?offset=0&limit=1")
            .then(res => res.json())
            .then(
            (result) => {
                setIsLoaded(true);
                setProduct(result[0]);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )
        }, [])
    
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="grid lg:grid-cols-hero lg:h-[calc(100vh_-_96px)]">
                <section className="px-3 py-6 lg:px-14 h-full flex flex-col justify-center">
                    <h2 className="font-extrabold text-3xl text-center text-primary leading-[48px_!important] lg:leading-[87px_!important] lg:text-7xl lg:text-left">The kind of <span className="text-softBrown">furniture</span> you have been looking for</h2>
                    <div className="flex flex-col justify-center items-center gap-3 mt-5 text-sm lg:flex-row lg:justify-start">
                        <button className="flex justify-center items-center gap-3 bg-caramel text-secondary py-4 w-[250px] rounded-xl"><BiSearchAlt2 size="18" /> SEARCH CATALOG</button>
                        <a href="https://www.youtube.com/watch?v=f0nPPc2-jpE" target="_blank" className="flex justify-center items-center gap-3 border border-secondary text-secondary py-4 w-[250px] rounded-xl hover:bg-primary hover:text-white"><BsPlayCircle size="18" /> WATCH VIDEOS</a>
                    </div>
                </section>
                <section className="px-3 py-4 h-[250px] bg-no-repeat bg-center bg-cover flex flex-col justify-between lg:h-full lg:px-8 lg:py-10" style={{backgroundImage: `url(${product.images[0]})`}}>
                    <h3 className="text-white text-sm lg:invisible">HIGHLIGHTED PRODUCT</h3>
                    <div className="flex flex-col gap-2 lg:gap-4">
                        <p className="bg-[#FFFFFF80] text-primary py-2 px-4 rounded-lg w-fit">${product.price}</p>
                        <h4 className="text-white text-2xl lg:text-4xl">{product.title}</h4>
                        <a href="#" className="flex items-center gap-2 bg-primary text-white text-xs py-3 px-4 rounded-lg w-fit">VIEW DETAILS <FiChevronRight /></a>
                    </div>
                </section>
            </div>
        );
    }
}
 
export default Hero;