import React from "react";
import classes from './AttentionMessage.module.css'

const AttentionMessage = ({children, ...props}) => {
    return (
        <div {...props} className={classes.AttentionMessage}>
            {children}
        </div>
    )
}

export default AttentionMessage;