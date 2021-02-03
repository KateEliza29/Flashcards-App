import React from 'react';
import styles from './CardSet.module.css';
import FlashCard from './FlashCard';
import Article from './Article';
import { useSelector } from 'react-redux';

let CardSet = function(props) {
    const qCount = useSelector(state => state.qNumber);
    return (
        <div className={styles.cardSet}>
        
            <FlashCard data={props.data}/>
            <Article title={props.data.questions[qCount].article1Name} url={props.data.questions[qCount].article1URL}/>
            <Article title={props.data.questions[qCount].article2Name} url={props.data.questions[qCount].article2URL}/>
        </div>
    )
}

export default CardSet;