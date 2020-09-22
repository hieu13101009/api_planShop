import React, { useState } from 'react';

import useStyles from './style';

const Grid = () => {
    const [cells] = useState(Array.from({ length: 40 }));
    const classes = useStyles();
    return (
        <div className={classes.grid}>
            {cells.map(()=> <div className={classes.cell} ></div>)}
        </div>
    )
}
export default Grid;