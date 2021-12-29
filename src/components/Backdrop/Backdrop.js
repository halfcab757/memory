import Transition from 'react-transition-group/Transition';

import classes from './Backdrop.module.css';

export default function Backdrop(props) {

    return (
        <Transition
        in={props.show}
        timeout={400}
        mountOnEnter
        unmountOnExit>
            {state => {
                const cssClasses = [
                    classes.backdrop,
                    state === 'entering' 
                        ? classes.show
                        : state === 'exiting'
                        ? classes.hide : null
                ];
                return (
                    <div
                        className={cssClasses.join(' ')}>
                        {props.children}
                    </div>
                );
            }
            }
        </Transition>
    );
}
