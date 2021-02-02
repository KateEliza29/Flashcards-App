import React, { useState, useEffect } from 'react';
import styles from './FlashCard.module.css';
import IconButton from './IconButton';
import qNumber from '../actions/qNumber';
import face from '../actions/face';
import { useSelector, useDispatch } from 'react-redux';


let FlashCard = function(props) {
    const faceShowing = useSelector(state => state.face)
    const qCount = useSelector(state => state.qNumber);
    const [front, setFront] = useState(props.data.questions[qCount].front);
    const [back, setBack] = useState(props.data.questions[qCount].back);
    const dispatch = useDispatch();

    let questionLength = props.data.questions.length;

    let handleFlashCardClick = (e) => {
        if (faceShowing === 'FRONT') {
            dispatch(face('BACK')); 
        }
        else {
            dispatch(face('FRONT'));
        }
    }

    let displayFront = () => {
        let frontText = front.split("\n");
        return frontText.map(text => <p>{text}</p>);
    }

    let displayBack = () => {
        let backText = back.split("\n");
        return backText.map(text => <p>{text}</p>);
    }

    let handleLeftArrowClick = (e) => {
        if (qCount >0) {
            dispatch(qNumber('DECREASE'));
        }
        dispatch(face('FRONT'));
        //Add animation to zoom to left and back in on the right.
    }

    let handleRightArrowClick = (e) => {
        if (qCount < questionLength-1) {
            dispatch(qNumber('INCREASE'));
        }
        dispatch(face('FRONT'));
        //Add animation to zoom to right and back in on left. 
    }

    let determineFlipStatus = () => {
        if (faceShowing === 'FRONT') {
            return `${styles.card}`;
        }
        else {
            return `${styles.card} ${styles.isFlipped}`;
        }
    }

    useEffect(() => {
        setFront(props.data.questions[qCount].front);
        setBack(props.data.questions[qCount].back);
        displayFront();
        displayBack();
    }, [qCount]);

    return (
        <div>
            <div className={styles.scene}>
                <div className={determineFlipStatus()}>
                    <div className={styles.cardFront}>
                        <div className={styles.cardHeader}>
                            <IconButton icon={props.data.icon} color={props.data.color}/>
                            <div className={styles.cardHeaderText}>{props.data.setName}</div>
                        </div>
                        <div className={styles.cardBody} onClick={handleFlashCardClick}>
                            {displayFront()}
                        </div>
                        <div className={styles.cardFooter}>
                            <IconButton icon={"fas fa-plus-circle"} color={props.data.color}/>
                            <IconButton icon={"fas fa-question-circle"} color={props.data.color}/>
                        </div>
                    </div>
                    <div className={styles.cardBack}>
                        <div className={styles.cardHeader}>
                        <IconButton icon={props.data.icon} color={props.data.color}/>
                            <div className={styles.cardHeaderText}>{props.data.setName}</div>
                        </div>
                        <div className={styles.cardBody} onClick={handleFlashCardClick}>
                            {displayBack()}
                        </div>
                        <div className={styles.cardFooter}>
                            <IconButton icon={"fas fa-plus-circle"} color={props.data.color}/>
                            <IconButton icon={"fas fa-question-circle"} color={props.data.color}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.arrows}>
                <i className={`${styles.arrowIcons} fas fa-chevron-left`} onClick={handleLeftArrowClick}></i><i className={`${styles.arrowIcons} fas fa-chevron-right`} onClick={handleRightArrowClick}></i> {/* Add onclick to advance/decrease q number. */}
            </div>
        </div>
    )
}

export default FlashCard;