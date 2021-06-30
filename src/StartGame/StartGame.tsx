import React, { FC } from "react";
import style from "./start.module.css";

type Props = {
  gameStartFunc(): void;
};

export const StartGame: FC<Props> = ({ gameStartFunc }) => {
  return (
    <button className={style.button} onClick={gameStartFunc}>
      Start
    </button>
  );
};
