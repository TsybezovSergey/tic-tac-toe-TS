import React, { FC, useEffect, useState } from 'react'
import style from './board.module.css'
import { Cell, CellVal } from '../Cell/Cell'

export const Board: FC = () => {
  const [cells, setCells] = useState<CellVal[]>(Array(9).fill(null))

  const [player, setPlayer] = useState<CellVal>("x")

  const toggleHandler = (i: number) => {
    player === "x" ? setPlayer("o") : setPlayer("x")
    setCells(prev => prev.map((cell, index) => {
      return i === index ? player : cell
    }))
  }

  useEffect(() => {
    console.log(cells)
  }, [cells])

  return (
    <div className={style.board}>
      {cells.map((cell, i) => 
        <Cell key={i} i={i} cell={cell} toggleHandler = {toggleHandler}/>
      )}
    </div>
  )
}

