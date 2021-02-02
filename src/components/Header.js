import React from 'react';
import logo from '../images/ghost.svg';
import styles from './Header.module.css';


let Header = function() {
    return (
        <div className={styles.header}>
            <div><img src={logo} alt="A cartoon ghost logo."></img></div>
            <div><h1>Ghost Cards</h1></div>
        </div>
    )
}

export default Header;