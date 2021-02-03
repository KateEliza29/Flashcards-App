import React from 'react';
import styles from './Footer.module.css';
import IconButton from './IconButton';
import page from '../actions/page';
import {useDispatch } from 'react-redux';

function Footer() {
    {/*const icons = useSelector(state => state.icons);*/}
    const dispatch = useDispatch();

    return (
        <div className={styles.footer}>
            <div>
                <IconButton icon={"fas fa-home"} color={"rgb(243,73,66)"} onClick={() => {dispatch(page('HOME'))}}/>
                <IconButton icon={"fas fa-user-circle"} color={"rgb(243,73,66)"} />
                <IconButton icon={"fas fa-chart-pie"} color={"rgb(243,73,66)"} />
                <IconButton icon={"fas fa-cog"} color={"rgb(243,73,66)"} />
                {/*icons.map(icon => <IconButton icon={icon} color={"rgb(243,73,66)"}/>)*/}
            </div>
        </div>
    )
}

export default Footer;