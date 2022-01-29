import Transition from 'react-transition-group/Transition';
import Button from '../UI/Button/Button';

import classes from './OpenCard.module.css';

export default function OpenCard(props) {

    let buttonText = props.allPairsFound ? 'CHECK EVALUATION' : 'GO ON';

  return (
    <Transition in={props.show} timeout={400} mountOnEnter unmountOnExit>
      {(state) => {
        const cardCssClasses = [
          classes.opencard,
          state === 'entering'
            ? classes.open
            : state === 'exiting'
            ? classes.closed
            : null,
        ];

        const quoteCssClasses = [
          classes.quote__lineleft,
          state === 'entered' ? classes.shown : null,
          state === 'exiting' ? classes['static-visible'] : null,
        ];

        const quoteClassesTwo = [
          classes.quote__lineright,
          state === 'entered' ? classes['shown-two'] : null,
          state === 'exiting' ? classes['static-visible'] : null,
        ];

        const artistClasses = [
          classes.quote__artist,
          state === 'entered' ? classes['shown-three'] : null,
          state === 'exiting' ? classes['static-visible'] : null,
        ];

        const funFactClasses = [
          classes.funfact,
          state === 'entered' ? classes.visible : null,
        ];

        const buttonClasses = [
          classes['button-container'],
          state === 'entered' ? classes.visible : null,
          state === 'entered' ? classes.wiggle : null,
        ];

        const quoteDivClasses = [
          classes.quote,
          state === 'entered' ? classes['border-visible'] : null,
        ];

        const renderedCard = (
          <div className={cardCssClasses.join(' ')}>
            <h2>It's a match : )</h2>
            <div className={quoteDivClasses.join(' ')}>
              <p className={quoteCssClasses.join(' ')}>
                <span>"</span>
                {props.card.fullQuote[0]}
              </p>
              <p className={quoteClassesTwo.join(' ')}>
                {props.card.fullQuote[1]}
                <span>"</span>
              </p>
              <p className={artistClasses.join(' ')}>{props.card.artist}</p>
            </div>
            <div className={funFactClasses.join(' ')}>
              <h3>Did you know?</h3>
              {props.card.fact && <p>{props.card.fact}</p>}
            </div>
            <div className={buttonClasses.join(' ')}>
              <Button clickHandler={props.onClose} type="button" look="RED">
                {buttonText}
              </Button>
            </div>
          </div>
        );

        return renderedCard;
      }}
    </Transition>
  );
}
