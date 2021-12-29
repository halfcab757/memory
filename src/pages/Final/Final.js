import React from 'react';
import Transition from 'react-transition-group/Transition';
import classes from './Final.module.css';

import Button from '../../components/UI/Button/Button';

export default function Final(props) {

    return (
        <div className={classes.final}>
            <Transition
                in={props.show}
                timeout={100}
                mountOnEnter
                unmountOnExit>
                {state => {
                    const summaryClasses = [
                        classes.final__summary,
                        state === 'entered'
                        ? classes.visible
                        : null
                    ];

                    const sharingClasses = [
                        classes.final__sharing,
                        state === 'entered'
                        ? classes.visible
                        : null
                    ];

                    const repeatClasses = [
                        classes.final__repeat,
                        state === 'entered'
                        ? classes.visible
                        : null
                    ];

                    return (
                    <div>
                    <div
                        className={summaryClasses.join(' ')}>
                        <h1>Congratulations</h1>
                        <p>You found all pairs with just {props.counter} tries.</p>
                        <p>Thank you for using one of my first web apps!</p>
                    </div>
                    <div
                        className={sharingClasses.join(' ')}>
                        <h3>Sharing is caring</h3>
                        <p>If you enjoyed this game, please share it with your friends. I appreciate it!</p>
                    </div>
                    
                <h3
                    className={repeatClasses.join(' ')}>Check out another edition!</h3>
                <div
                    className={classes.buttonone}>
                    <Button
                        clickHandler={props.onStart.bind(null, 'ROCK')}
                        ype='button'
                        look='music'>
                        ROCK EDITION
                    </Button>
                </div>
                <div
                    className={classes.buttontwo}>
                    <Button
                        clickHandler={props.onStart.bind(null, 'METAL')}
                        type='button'
                        look='literature'>
                        METAL EDITION
                </Button>
                </div>
                <div
                    className={classes.buttonthree}>
                    <Button
                        clickHandler={props.onStart.bind(null, 'POP')}
                        type='button'
                        look='politics'>
                        POP EDITION
                    </Button>
                    </div>
                </div>
                );
            }}
            </Transition>
        </div>
    )
};
