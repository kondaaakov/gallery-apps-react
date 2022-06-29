import React from "react";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.Header}>
            <Logo style={{marginBottom: 20}} />
            
            <Navbar position = 'header' />
        </div>
    )
}

export default Header;