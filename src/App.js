import React from 'react'
import Cards from './components/Cards';
import Categories from './components/Categories';
import Food from './components/Food';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Cards/>
     <Food/>
     <Categories/>

    </div>
  );
}

export default App;
