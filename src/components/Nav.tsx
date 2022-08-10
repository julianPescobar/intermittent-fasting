import React from 'react';
import logo from './logo.svg';
import './Nav.css';

function Nav() {
    return(
        <div>
            <ul>
                <li className='title'>Fasting</li>
  <li><a href="/">Home</a></li>
  <li><a href="about">About</a></li>
</ul>
        </div>
    )
}
export default Nav;