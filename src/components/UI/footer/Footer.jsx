import React from "react";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <Navbar position='footer' />

            <Logo style={{marginTop: 20}} />
        </div>
    )
}

export default Footer;