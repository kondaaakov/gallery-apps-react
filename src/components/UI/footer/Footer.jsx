import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <nav className={classes.FooterTop}>
                <Link to="/home" className={classes.FooterLink}>Главная</Link>
                <Link to="/projects" className={classes.FooterLink}>Проекты</Link>
                <Link to="/about" className={classes.FooterLink}>О проекте</Link>
            </nav>

            <Logo style={{marginTop: 20}} />
        </div>
    )
}

export default Footer;