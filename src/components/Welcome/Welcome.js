import { Fragment } from 'react';

import Backdrop from '../Backdrop/Backdrop';
import Button from '../UI/Button/Button';

import classes from './Welcome.module.css';

export default function Welcome(props) {
  return (
    <Fragment>
      <Backdrop show={true} />
      <div className={classes.welcome}>
        <h2>Hello!</h2>
        <p>
          Thank you very much for taking a look at my musical memory web app. I
          built it in April/May 2021 to put my React.js knowledge to practice.
          <br />
          <br />
          Enjoy playing it and feel free to learn more about me and the building
          process in the "About" section.
        </p>
        <Button clickHandler={props.onClose} type="button" look="RED">
          Play Memory
        </Button>
      </div>
    </Fragment>
  );
}
