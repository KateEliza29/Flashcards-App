import React from 'react';
import styles from './CardSet.module.css';
import FlashCard from './FlashCard';

let CardSet = function(props) {
    console.log("cardset = " + props.data);
    return (
        <div className={styles.cardSet}>
            <FlashCard data={props.data}/>
        </div>
    )
}

export default CardSet;