import { useState } from 'react';

import classes from './MemoryCard.module.css';

const MemoryCard = (props) => {
    const [ showQuestionMark, setShowQuestionMark ] = useState();

    function hoverHandler() {
        if(!props.disabled) {
            setShowQuestionMark(true);
            setTimeout(() => {
                blurHandler();
            }, 800);
        }
    }

    function blurHandler() {
        setShowQuestionMark(false);
    }

    return (
        <div 
            className={classes.memorycard}
            onMouseEnter={hoverHandler}
            onMouseLeave={blurHandler}
            onClick={() => props.clickHandler(props.card.id)}
            >
            {!props.card.revealed && showQuestionMark && <p className={classes.memorycard__questionmark}>?</p>}
            {props.card.revealed && <p>{props.card.title}</p>}
        </div>
    );
}

export default MemoryCard;