import React, { useState } from "react";
import "./App.css";
import { Board } from "./Board/Board";
import { RestartGame } from "./RestartGame/RestartGame";
import { StartGame } from "./StartGame/StartGame";
import { CSSTransition, SwitchTransition } from "react-transition-group";

export type Winner = "x" | "o" | "draw" | null;

export type GameStatus = "start" | "game" | "restart";

function App() {
  const [winner, setWinner] = useState<Winner>(null);
  const [gameStatus, setGameStatus] = useState<GameStatus>("start");

  const gameOverFunc = (winner: Winner) => {
    setWinner(winner);
    setGameStatus("restart");
  };
  const gameStartFunc = () => {
    setWinner(null);
    setGameStatus("game");
  };

  return (
    <>
      <SwitchTransition>
        <CSSTransition
          timeout={500}
          key={gameStatus}
          classNames="block"
          mountOnEnter
          unmountOnExit
        >
          {
            {
              start: <StartGame gameStartFunc={gameStartFunc} />,
              game: <Board gameOverFunc={gameOverFunc} />,
              restart: (
                <RestartGame gameStartFunc={gameStartFunc} winner={winner} />
              ),
            }[gameStatus]
          }
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}

export default App;
