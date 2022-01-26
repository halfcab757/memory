import React, { useState, Suspense } from 'react';

import Start from './pages/Start/Start';
import Navigation from './components/Layout/Navigation/Navigation';

import { rockCards, metalCards, popCards } from './data/Cards';

import './App.css';

const Memory = React.lazy(() => import('./pages/Memory/Memory'));
const Final = React.lazy(() => import('./pages/Final/Final'));
const About = React.lazy(() => import('./pages/About/About'));

function App() {
  const [started, setStarted] = useState();
  const [isOver, setIsOver] = useState();
  const [counter, setCounter] = useState(3);
  const [mode, setMode] = useState();
  const [showAbout, setShowAbout] = useState(false);
  const [memoryCards, setMemoryCards] = useState();
  const [showWelcome, setShowWelcome] = useState(true);

  function closeWelcomeHandler() {
    setShowWelcome(false);
}

  function shuffle(array) {
    let n = array.length - 1;
    for (let i = n; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function reset() {
    setStarted(false);
    setIsOver(false);
    setCounter(0);
    setMode();
    setMemoryCards(null);
  }

  function startGameHandler(style) {
    let cards;
    if (style === 'ROCK') {
      cards = rockCards.map((card) => {
        return {
          ...card,
          revealed: false,
        };
      });
    }
    if (style === 'METAL') {
      cards = metalCards.map((card) => {
        return {
          ...card,
          revealed: false,
        };
      });
    }
    if (style === 'POP') {
      cards = popCards.map((card) => {
        return {
          ...card,
          revealed: false,
        };
      });
    }
    setMemoryCards(shuffle(cards));
    setIsOver(false);
    setStarted(true);
  }

  function finishGame() {
    setIsOver(true);
  }

  function increaseCounter() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function selectModeHandler(mode) {
    setMode(mode);
  }

  function toggleShowAboutHandler() {
    setShowAbout(prevState => !prevState);
  }

  function closeAboutAndResetHandler() {
    setShowAbout(false);
    reset();
  }

  return (
    <React.Fragment>
      <Navigation
        count={counter}
        activeMode={mode}
        onSelectMode={selectModeHandler}
        onShowAbout={toggleShowAboutHandler}
        onShowStart={closeAboutAndResetHandler}
      />
      <Suspense fallback={<p style={{textAlign: 'center'}}>Loading</p>}>
      <div className="App">
        {!started && !showAbout && <Start onStart={startGameHandler} showWelcome={showWelcome} closeWelcome={closeWelcomeHandler}/>}
        {started && !isOver && (
          <Memory
            show={!showAbout}
            cards={memoryCards}
            increaseCount={increaseCounter}
            onFinish={finishGame}
            isOver={isOver}
            count={counter}
          />
        )}
        <Final
          show={isOver && !showAbout}
          onStart={startGameHandler}
          counter={counter}
        />
      </div>
      {showAbout && (
        <About
          gameIsRunning={started}
          onCloseAbout={toggleShowAboutHandler}
          onCloseAboutAndReset={closeAboutAndResetHandler}
        />
      )}
      </Suspense>
    </React.Fragment>
  );
}

export default App;
