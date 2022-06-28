import React from "react";
import { Link } from "react-router-dom";
import classes from './Logo.module.css'

const Logo = (props) => {
    return (
        <div {...props} className={classes.Logo}>
            <Link to='/home' className={classes.LogoLink}>gallery-apps-react</Link>
            <p className={classes.LogoText}>by Andrew Kondakov</p>
        </div>
    )
}

export default Logo;