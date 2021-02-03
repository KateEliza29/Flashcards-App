import React from 'react';
import styles from './Article.module.css';


let Article = function(props) {

    return (
        <div className={styles.article}>
           <i className="fas fa-external-link-alt"></i> <a href={props.url} target="_blank" rel="noreferrer"><p>{props.title}</p></a>
        </div>
    )
}

export default Article;