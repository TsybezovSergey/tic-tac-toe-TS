import React, { useState } from "react";
import "./App.css";
import { Board } from './Board/Board';


export type Winner = "x" | "o" | "draw" | null

function App() {
  const [winner, setWinner] = useState<Winner>(null)

  const gameOverFunc = (params: Winner) => {
    setWinner(params)
  }

  return (<>
      {!winner ? <Board gameOverFunc={gameOverFunc}/> : <h1>game over {winner}</h1>}
    </>
  );
}

export default App;
