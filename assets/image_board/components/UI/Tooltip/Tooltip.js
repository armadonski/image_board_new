import React from 'react';
import classes from './Tooltip.css';

const tooltip = props => {
    return (
        <div className={classes.Tooltip} onBlur={props.blur}>
            {props.children}
            <div
                className={[classes.TooltipContent, props.show ? classes.TooltipShow : null].join(' ')}>
                {props.tooltipContent}
            </div>
        </div>
    );
}

export default tooltip;