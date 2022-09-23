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
    </div>
  );
}

export default App;
