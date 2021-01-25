import React from 'react';
import classes from '../Navbar/Navbar.module.css';

const Navbar = () => {
    return (<nav className={classes.nav}>
        <div className = {`${classes.item} ${classes.active}`}>
            <a>Profile of Gods</a>
        </div>
        <div className = {classes.item}>
            <a>Message from people</a>
        </div>
        <div className = {classes.item}>
            <a>News from Midgard</a>
        </div>
        <div className = {classes.item}>
            <a>Song of Valkyrie's</a>
        </div>
        <div className = {classes.item}>
            <a>Settings</a>
        </div>
    </nav>);
}

export default Navbar;