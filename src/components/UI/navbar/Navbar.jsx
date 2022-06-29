import React from "react";
import { Link } from "react-router-dom";
import classes from './Navbar.module.css';
import { navElements } from "../../../router/routes";

const Navbar = (props) => {
    if (props.position === 'header') {
        return (
            <nav>
                {navElements.map((el, index) => 
                    <Link to={el.linkTo} key={index} className={classes.HeaderLink}>{el.title}</Link>
                )}
            </nav>
        )
    } else {
        return (
            <nav>
                {navElements.map((el, index) => 
                    <Link to={el.linkTo} key={index} className={classes.FooterLink}>{el.title}</Link>
                )}
            </nav>
        )
    }
}

export default Navbar;