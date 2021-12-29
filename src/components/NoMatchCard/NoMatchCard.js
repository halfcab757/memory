import Button from '../UI/Button/Button';

import classes from './NoMatchCard.module.css';

export default function NoMatchCard(props) {
  return (
    <div className={classes.card}>
        <h2>Sorry, it's not a match</h2>
      <Button clickHandler={props.onClose} type="button" look="RED">
        GO ON
      </Button>
    </div>
  );
}
