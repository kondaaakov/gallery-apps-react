import React from "react";
import classes from './Loader.module.css'
// 🌀
const Loader = () => {
    return (
        <div className={classes.LoaderBlock}>
            <div className={classes.Loader}>🌀</div>
        </div>
    )
}

export default Loader;