import React from 'react';
import styles from './Article.module.css';


let Article = function(props) {

    return (
        <div className={styles.article}>
            <a href={props.url} target="_blank" rel="noreferrer"><p><i className="fas fa-external-link-alt"></i>{props.title}</p></a>
        </div>
    )
}

export default Article;