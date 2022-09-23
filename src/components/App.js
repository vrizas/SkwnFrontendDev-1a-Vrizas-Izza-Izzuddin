import React from 'react';
import Navigation from './Navigation';

function App() {
  return (
    <div className="app">
      <header className="flex items-center justify-between py-3 px-4 shadow sticky top-0 z-50 lg:py-6 lg:px-14">
        <img src="logo.svg" alt="Dekoor Logo" width="100" />
        <Navigation />
      </header>
    </div>
  );
}

export default App;
