/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import {Link} from 'react-router-dom';


const Header = () => {

  return(
    <> 
    
      <h1> GameS DB !</h1>
      <ul>

        <li>
          <Link to="/"> HOME </Link>
        </li>

        <li>
          <Link to='/cart'>MY CART</Link>
        </li>
      
      </ul>
    </>
  );
};


export default Header ;