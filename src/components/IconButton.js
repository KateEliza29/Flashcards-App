import React from 'react';
import styles from './IconButton.module.css';

let IconButton = function(props) {
    return (
        <button className={styles.iconButton} style={{backgroundColor: props.color}}>
            <i className={props.icon} onClick={props.onClick}></i> {/*Props.icon is fed down from App.js. The array of FA codes is mapped over in Footer, then each is passed down to here.*/}
        </button>
    )
}

export default IconButton;