import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.Header}>
            <Logo style={{marginBottom: 20}} />
            
            <nav className={classes.HeaderBottom}>
                <Link to="/home" className={classes.HeaderLink}>Главная</Link>
                <Link to="/projects" className={classes.HeaderLink}>Проекты</Link>
                <Link to="/about" className={classes.HeaderLink}>О проекте</Link>
            </nav>
        </div>
    )
}

export default Header;