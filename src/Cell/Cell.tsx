import React, { FC } from 'react';
import style from "./cell.module.css"

export type CellVal = "x" | "o" | null

type CellProps = {
  i: number,
  cell: CellVal,
  toggleHandler(i: number): void
}

export const Cell: FC<CellProps> = ({cell, i, toggleHandler}) => {
  return (
    <div className={style.cell} onClick={() => toggleHandler(i)}>{cell && <h3>{cell}</h3>}</div>
  )
}
