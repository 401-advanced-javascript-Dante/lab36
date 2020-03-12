/* eslint-disable no-unused-vars */
// dependencies 
import React from 'react';

// components 
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Categories from './components/main/categories.js';
import Products from './components/main/products.js';
//style
import './app.scss';



const App = ()=>{


  return(
    <>

      <Header />
      <Categories />
      <Products />
      <Footer />
          
    </>
  );
};

export default App ;
