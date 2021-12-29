import { Fragment } from 'react';

import Button from '../../components/UI/Button/Button';
import Welcome from '../../components/Welcome/Welcome';

import classes from './Start.module.css';

function Start(props) {
  return (
    <Fragment>
      {props.showWelcome && <Welcome onClose={props.closeWelcome} />}
      <div className={classes.start}>
        <div className={classes.start__introduction}>
          <p>
            This game of memory is all about great music and you might stumble
            about a fun fact you do not know yet.
          </p>
          <h1>Are you ready?</h1>
          <h1>Play now!</h1>
        </div>
        <div className={classes.start__buttoncontainer}>
          <Button
            clickHandler={() => props.onStart('ROCK')}
            type="button"
            look="music"
          >
            ROCK EDITION
          </Button>
          <Button
            clickHandler={props.onStart.bind(null, 'METAL')}
            type="button"
            look="literature"
          >
            METAL EDITION
          </Button>
          <Button
            clickHandler={props.onStart.bind(null, 'POP')}
            type="button"
            look="politics"
          >
            POP EDITION
          </Button>
        </div>
      </div>
    </Fragment>
  );
}

export default Start;
