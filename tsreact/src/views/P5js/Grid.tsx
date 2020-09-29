import React, { useState } from 'react';
import { updateJsxSelfClosingElement } from 'typescript';

import useStyles from './style';

const initialCells = Array.from({ length: 40 }, () => ({
    on: false,
    color: '#000000'
}))

const Grid = ({ currentColor }) => {
    const [cells, setCells] = useState(initialCells);
    const classes = useStyles();
    const updateCells = (i:any) => () => {
        setCells(cells.map((cell, cellIndex)=>{
            if (cellIndex === i) {
                return {
                    on: true,
                    color: currentColor,
                }
            }
            return cell;
        }))
    }
    return (
        <div className={classes.grid}>
            {cells.map((cell, i:any)=> 
                <div 
                    key={i}
                    style={{background: cell.on ? cell.color: '#ffffff'}}
                    className={classes.cell} 
                    onClick={updateCells(i)}>
                </div>
            )}
        </div>
    )
}
export default Grid;