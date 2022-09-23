/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Product() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/categories/3/products")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              const filteredResult = [];
              for (let i = 0; i < 12; i++) {
                filteredResult.push(result[i]);
              }
              setProducts(filteredResult);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])

      const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="bg-primary">
                <section className="flex items-center justify-between px-3 py-6 lg:px-14 lg:py-10">
                    <div className="text-caramel">
                        <p className="text-sm lg:text-xl">Categories</p>
                        <h3 className="font-bold mt-1 lg:text-4xl lg:mt-3">This month’s best seller</h3>
                    </div> 
                    <a href="#" className="bg-caramel text-primary text-xs py-2 px-3 rounded-lg lg:text-sm">SEE MORE</a>       
                </section>
                <Carousel responsive={responsive} className="px-4 lg:px-10">
                    {products.map(product => (
                        <div key={product.id} className="relative px-3 py-4 h-[256px] bg-no-repeat bg-center bg-cover flex flex-col justify-end rounded-xl overflow-hidden" style={{backgroundImage: `url(${product.images[0]})`}}>
                            <div className="w-full h-full absolute top-0 left-0 bg-[#0000004d]"></div>
                            <div className="relative flex flex-col gap-2 lg:gap-4">
                                <p className="bg-[#FFFFFF80] text-primary py-1 px-3 rounded-lg w-fit">${product.price}</p>
                                <h4 className="text-white text-xl">{product.title}</h4>
                            </div>
                        </div>
                    ))}
                </Carousel>;
            </div>
        );
    }
}
 
export default Product;