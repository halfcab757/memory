import React, { useState, useEffect, useCallback } from 'react';

import MemoryCard from '../../components/MemoryCard/MemoryCard';
import Backdrop from '../../components/Backdrop/Backdrop';
import OpenCard from '../../components/OpenCard/OpenCard';
import NoMatchCard from '../../components/NoMatchCard/NoMatchCard';

import classes from './Memory.module.css';

const Memory = (props) => {
  const [cards, setCards] = useState(props.cards);
  const [revealedCards, setRevealedCards] = useState(0);
  const [isMatch, setIsMatch] = useState();
  const [focusedCard, setFocusedCard] = useState();
  const [showBackdrop, setShowBackdrop] = useState();
  const [isNoMatch, setIsNoMatch] = useState();

  const { isOver, finish } = props;

  let allPairsFound = cards.filter((card) => !card.pairFound).length === 0;

  //   Häh?
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
  }, []);

  const blurCard = useCallback(() => {
    console.log('blurCard');
    setIsMatch(false);
    setIsNoMatch(false);
    setTimeout(() => {
      setShowBackdrop(false);
      setFocusedCard(null);
    }, 500);

    setTimeout(() => {
      cardCover();
    }, 400);
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

  const cardClickHandler = (cardId) => {
    if (focusedCard && focusedCard.id === cardId) {
      // same card got clicked twice
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

    // checking both revealed cards for pairing

    if (revealedCards === 1) {
      const visibleCards = updatedCards.filter(
        (card) => card.revealed && !card.pairFound
      );
      if (visibleCards[0].pairId === visibleCards[1].pairId) {
        for (const card of visibleCards) {
          card.pairFound = true;
        }
        setTimeout(() => {
          setRevealedCards(0);
          setShowBackdrop(true);
          return setIsMatch(true);
        }, 1000);
      } else {
        setTimeout(() => {
          setIsNoMatch(true);
          setShowBackdrop(true);
        }, 1400);
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
    <div className={classes.memorycards}>
      {!props.isOver && renderedCards}
      <Backdrop show={showBackdrop} />
      <OpenCard
        show={isMatch}
        card={focusedCard}
        cardsMatch={isMatch}
        onClose={blurCard}
        allPairsFound={allPairsFound}
      />
      {isNoMatch && <NoMatchCard onClose={blurCard} />}
    </div>
  );
};

export default Memory;
