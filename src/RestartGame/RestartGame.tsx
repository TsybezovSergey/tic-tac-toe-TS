import React, { FC } from 'react'
import { Winner } from '../App'
import style from './restart.module.css'

type Props =  {
  gameStartFunc(): void;
  winner: Winner;
}

export const RestartGame: FC<Props> = ({gameStartFunc, winner}) => {
  return (
    <div className={style.winWrapper}>
      <h3>{winner !== "draw" ? `${winner?.toUpperCase()} is win` : "draw"}</h3>
      <button className={style.button} onClick={gameStartFunc}>Restart</button>
    </div>
  )
}
