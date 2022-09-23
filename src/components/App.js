/* eslint-disable */
import React from 'react';
import Advantage from './Advantage';
import Hero from './Hero';
import Navigation from './Navigation';
import Newsletter from './Newsletter';
import Partner from './Partner';
import Product from './Product';
import Recommendation from './Recommendation';

function App() {
  return (
    <div className="app">
      <header className="flex items-center justify-between py-3 px-4 bg-white shadow sticky top-0 z-50 lg:py-6 lg:px-14">
        <img src="logo.svg" alt="Dekoor Logo" width="100" />
        <Navigation />
      </header>
      <main>
        <Hero />
        <Advantage />
        <Partner />
        <Recommendation />
        <Product />
        <Newsletter />
      </main>
      <footer className="grid gap-10 py-6 px-4 lg:p-14 text-center lg:text-left lg:grid-cols-2">
        <section className="flex flex-col items-center gap-6 lg:items-start">
          <img src="logo.svg" alt="Dekoor Logo" width="85" />
          <p className="text-lightBlue text-sm">Dekoor is a furniture company created to fulfill the needs of family with aesthetic feeling in their furniture. Always pay attention to details and give clear communication for the customers. Priority of our design is comfortability.</p>
          <p className="text-lightBlue text-sm hidden lg:block">©Copyright 2022 Dekoor</p>
        </section>
        <section className="grid grid-cols-2 gap-y-8 lg:grid-cols-3">
          <div>
            <h4 className="font-medium text-darkBlue mb-5">Support</h4>
            <ul className="text-sm text-lightBlue flex flex-col gap-4">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Care guide</a></li>
              <li><a href="#">Redeem warranty</a></li>
            </ul>
          </div>
          <div id="contact">
            <h4 className="font-medium text-darkBlue mb-5">Social Media</h4>
            <ul className="text-sm text-lightBlue flex flex-col gap-4">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">TikTok</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-darkBlue mb-5">About Us</h4>
            <ul className="text-sm text-lightBlue flex flex-col gap-4">
              <li><a href="#">Our story</a></li>
              <li><a href="#">Designer</a></li>
              <li><a href="#">Craftmanship</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
