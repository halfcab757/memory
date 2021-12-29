import Transition from 'react-transition-group/Transition';

import classes from './OpenCardQuote.module.css';

export default function OpenCardQuote(props) {
    return (
        <Transition
            in={props.quote}
            timeout={2500}
            mountOnEnter
            unmountOnExit
            >
            {state => {
                const classesLineOne = [
                    classes.quote__lineLeft,
                    state === 'entering'
                    ? classes.shown
                    : null
                ];

                return (
                    <div className={classes.quote}>
                        <p>{state}</p>
                        <p className={classesLineOne.join(' ')}>"{props.quote[0]}</p>
                        <p className={classes.quote__lineRight}>{props.quote[1]}"</p>
                        <p className={classes.quote__artist}>{props.artist}</p>
                    </div>
                );
            }}
        </Transition>
    );
}
