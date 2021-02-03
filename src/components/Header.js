import React from 'react';
import logo from '../images/ghost.svg';
import styles from './Header.module.css';
import page from '../actions/page';
import {useDispatch } from 'react-redux';

let Header = function() {
    const dispatch = useDispatch();


    return (
        <div className={styles.header}>
            <div><img src={logo} alt="A cartoon ghost logo." onClick={() => {dispatch(page('HOME'))}}></img></div>
            <div><h1>Ghost Cards</h1></div>
        </div>
    )
}

export default Header;