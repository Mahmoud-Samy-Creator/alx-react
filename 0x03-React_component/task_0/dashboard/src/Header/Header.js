import logo from '../assets/holberton-logo.jpg';
import './Header.css';
import React from 'react';

export default function Header() {
    return(
        <div className='App-header'>
          <img src={logo} alt='Holberton' />
          <h1>School dashboard</h1>
        </div>
    )
}