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

  const { onFinish } = props;

  let allPairsFound = cards.filter((card) => !card.pairFound).length === 0;

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
    setIsMatch(false);
    setIsNoMatch(false);

    setTimeout(() => {
      setShowBackdrop(false);
      setFocusedCard(null);
    }, 500);

    setTimeout(() => {
      cardCover();
    }, 400);

    const allPairsFound = (cards.filter(card => !card.pairFound)).length === 0;

    if (allPairsFound) {
      return onFinish();
    }
  }, [
    setIsMatch,
    setShowBackdrop,
    setFocusedCard,
    cardCover,
    onFinish,
    cards
  ]);

  const validateCardClick = (cardId) => {
    if (focusedCard && focusedCard.id === cardId) {
      return false;
    }

    if (revealedCards >= 2) {
      return false;
    }

    return true;
  };

  const showFeedback = (cardsMatch) => {
    if (cardsMatch) {
      setTimeout(() => {
        setRevealedCards(0);
        setShowBackdrop(true);
        return setIsMatch(true);
      }, 1000);
    }

    if (!cardsMatch) {
      setTimeout(() => {
        setIsNoMatch(true);
        setShowBackdrop(true);
      }, 1400);
    }
  };

  const checkForMatch = (cards) => {
    if (revealedCards === 0) {
      return;
    }

    if (revealedCards === 1) {
      const visibleCards = cards.filter(
        (card) => card.revealed && !card.pairFound
      );

      const cardsMatch = visibleCards[0].pairId === visibleCards[1].pairId;

      if (cardsMatch) {
        for (const card of visibleCards) {
          card.pairFound = true;
        }
      }

      showFeedback(cardsMatch);
    }
  };

  const updateCards = (clickedCardId) => {
    const updatedCards = [...cards];
    const selectedCardIndex = updatedCards.findIndex(
      (card) => card.id === clickedCardId
    );
    const selectedCard = updatedCards[selectedCardIndex];

    selectedCard.revealed = true;
    updatedCards[selectedCardIndex] = selectedCard;

    return updatedCards;
  };

  const cardClickHandler = (cardId) => {
    const isValidCardClick = validateCardClick(cardId);
    if (!isValidCardClick) {
      return;
    }

    setRevealedCards((prevRevealedCards) => prevRevealedCards + 1);
    props.increaseCount();
    setFocusedCard(cards.find((card) => card.id === cardId));

    const updatedCards = updateCards(cardId);
    setCards(updatedCards);

    checkForMatch(updatedCards);
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
