import logo from '../assets/holberton-logo.jpg';
// import './Header.css';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create ({
  appHeader: {
    fontSize: 'var(--heading-font-size)',
    color: 'red',
    display: 'flex',
    alignItems: 'center',
    padding: 'var(--padding)',
    borderBottom: 'var(--border-bottom)',
    position: 'relative'
  },
  image: {
    width: '250px',
    height: '250px'
  },
  h1Styling: {
    position: 'absolute',
    bottom: '0',
    left: '35%'
  }
})

export default function Header() {
    return(
        <div className={css(styles.appHeader)}>
          <img className = {css(styles.image)} src={logo} alt='Holberton' />
          <h1 className={css(styles.h1Styling)}>School dashboard</h1>
        </div>
    )
}
