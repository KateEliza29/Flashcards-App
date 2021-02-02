import React, { useState } from 'react';
import styles from './Main.module.css';
import SetCard from './SetCard';
import CardSet from './CardSet';
import { useSelector } from 'react-redux';


let Main = function(props) {
    const pageState = useSelector(state => state.page);
    const setNum = useSelector(state => state.setNum);
    
    let decidePage = () => {
        //Checks page state. If home, generates home page, if cardSet, generates card set page. 
        if (pageState === 'HOME') {
          return props.data.map(data => <SetCard data={data} key={data.setNumber}/>);
        }
        else {
          return  <CardSet data={props.data[setNum-1]}/>;
        }
      }
    
    return (
        <div className={styles.main}>
            {decidePage()}
        </div>
    )
}

export default Main;

