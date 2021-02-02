import React from 'react';
import styles from './SetCard.module.css';
import IconButton from './IconButton';
import { useSelector, useDispatch } from 'react-redux';
import page from '../actions/page';
import setNum from '../actions/setNum';

function SetCard(props) {
    const dispatch = useDispatch();
    const handleSetCardClick = () => {
        dispatch(page('SET'));
        dispatch(setNum(props.data.setNumber));
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <IconButton icon={props.data.icon} color={props.data.color}/>
            </div>
            <div className={styles.cardBody} id={props.data.setNumber} onClick={handleSetCardClick}>
                {props.data.setName}
            </div>
            <div className={styles.cardFooter}>
                <IconButton icon={"fas fa-plus-circle"} color={props.data.color}/>
                <IconButton icon={21} color={props.data.color}/>
            </div>
        </div>
    )
}

export default SetCard;