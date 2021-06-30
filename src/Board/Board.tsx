import React, { FC, useEffect, useState } from "react";
import style from "./board.module.css";
import { Cell, CellVal } from "../Cell/Cell";
import { Winner } from "../App";

const winPos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

type Player = "x" | "o";

type BoardProps = {
  gameOverFunc(winner: Winner): void;
};

export const Board: FC<BoardProps> = ({ gameOverFunc }) => {
  const [cells, setCells] = useState<CellVal[]>(Array(9).fill(null));

  const [cellsX, setCellsX] = useState<number[]>([]);
  const [cellsO, setCellsO] = useState<number[]>([]);

  const [player, setPlayer] = useState<Player>("x");

  const toggleHandler = (i: number) => {
    player === "x"
      ? setCellsX((prev) => [...prev, i])
      : setCellsO((prev) => [...prev, i]);
    player === "x" ? setPlayer("o") : setPlayer("x");
    setCells((prev) =>
      prev.map((cell, index) => {
        if (i === index && !Boolean(cell)) {
          return player;
        }
        return cell;
      })
    );
  };

  const winFunc = (arr: number[]): boolean => {
    const boolWin = winPos.find((el) => {
      return el.every((e) => arr.includes(e));
    });
    return !!boolWin;
  };

  useEffect(() => {
    if (winFunc(cellsX)) {
      return gameOverFunc("x");
    }
    if (winFunc(cellsO)) {
      return gameOverFunc("o");
    }
    if (cells.filter((c) => c).length === 9) {
      return gameOverFunc("draw");
    }
  }, [cells, cellsX, cellsO, gameOverFunc]);

  return (
    <>
      <div className={style.board}>
        {cells.map((cell, i) => (
          <Cell key={i} i={i} cell={cell} toggleHandler={toggleHandler} />
        ))}
      </div>
    </>
  );
};
