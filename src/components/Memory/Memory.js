import React, { useState, useEffect, useCallback } from 'react';

import MemoryCard from '../MemoryCard/MemoryCard';
import Backdrop from '../Backdrop/Backdrop';
import OpenCard from '../OpenCard/OpenCard';

import classes from './Memory.module.css';

const Memory = (props) => {
  const [cards, setCards] = useState(props.cards);
  const [revealedCards, setRevealedCards] = useState(0);
  const [isMatch, setIsMatch] = useState(false);
  const [focusedCard, setFocusedCard] = useState();
  const [showBackdrop, setShowBackdrop] = useState();

  const { isOver, finish } = props;

  useEffect(() => {}, [cards]);

  const cardCover = useCallback(() => {
    setRevealedCards(0);
    const updatedCards = cards.map((card) => {
      return {
        ...card,
        revealed: card.pairFound,
      };
    });
    setCards(updatedCards);
  }, [cards, setCards, setRevealedCards]);

  useEffect(() => {
    return cardCover();
  }, [cardCover]);

  const blurCard = useCallback(() => {
    setIsMatch(false);

    setTimeout(() => {
      setShowBackdrop(false);
      setFocusedCard(null);
    }, 500);

    if (revealedCards > 1) {  
      setTimeout(() => {
        cardCover();
      }, 2500);
    }
    // checking if all pairs are found
    if (cards.filter((card) => !card.pairFound).length === 0) {
      return props.onFinish();
    }
  }, [
    revealedCards,
    cards,
    isOver,
    finish,
    setIsMatch,
    setShowBackdrop,
    setFocusedCard,
    cardCover,
  ]);

  useEffect(() => {
    if (!props.isOver && revealedCards === 2) {
      blurCard();
    }
  }, [revealedCards, props.isOver, blurCard]);

  const cardClickHandler = (cardId) => {
    if (focusedCard && focusedCard.id === cardId) {
      return;
    }
    if (revealedCards >= 2) {
      return;
    }
    setRevealedCards((prevRevealedCards) => prevRevealedCards + 1);
    props.increaseCount();

    setFocusedCard(cards.find((card) => card.id === cardId));
    const updatedCards = [...cards];
    const selectedCardIndex = updatedCards.findIndex(
      (card) => card.id === cardId
    );
    const selectedCard = updatedCards[selectedCardIndex];
    selectedCard.revealed = true;
    updatedCards[selectedCardIndex] = selectedCard;

    setCards(updatedCards);

    // checking if revealed cards are a matching pair
    console.log('checking if it is a pair');
    if (revealedCards === 1) {
      const visibleCards = updatedCards.filter(
        (card) => card.revealed && !card.pairFound
      );
      if (visibleCards[0].pairId === visibleCards[1].pairId) {
        for (const card of visibleCards) {
          card.pairFound = true;
        }
        setTimeout(() => {
            console.log('pair found');
          setRevealedCards(0);
          setShowBackdrop(true);
          return setIsMatch(true);
        }, 400);
      }
    }
  };

  const renderedCards = cards.map((card) => {
    return (
      <MemoryCard
        card={card}
        key={card.id}
        clickHandler={cardClickHandler}
        disabled={revealedCards >= 2}
        cards={cards}
      />
    );
  });

  if (!props.show) {
    return null;
  }

  return (
    <div className={classes.memory}>
      {!props.isOver && renderedCards}
      <Backdrop show={showBackdrop} />
      <OpenCard
        show={isMatch}
        card={focusedCard}
        cardsMatch={isMatch}
        onClose={blurCard}
      />
    </div>
  );
};

export default Memory;
