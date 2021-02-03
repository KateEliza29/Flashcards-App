import React, { useState } from 'react';
import styles from './Main.module.css';
import SetCard from './SetCard';
import CardSet from './CardSet';
import { useSelector } from 'react-redux';


let Main = function(props) {
    const pageState = useSelector(state => state.page);
    const setNum = useSelector(state => state.setNum);
    const tech = useSelector(state => state.tech);
    let techResults = [];
    const getTechSet = () => {
      for (let i=0; i<props.data.length; i++) {
        console.log(props.data[i]);
        if (props.data[i].tech === tech) {
          techResults.push(props.data[i]);
        }
      }
      return techResults;
    }

    console.log(props.data[0].tech);
    
    let decidePage = () => {
        //Checks page state. If home, generates home page, if cardSet, generates card set page. 
        if (pageState === 'HOME') {
          return props.data.map(data => <SetCard data={data} key={data.setNumber}/>);
        }
        else if (pageState === 'TECHSET') {
          return getTechSet()
          .map(data => <SetCard data={data} key={data.setNumber}/>);
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

