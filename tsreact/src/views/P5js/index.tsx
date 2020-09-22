import React from 'react';
import {createUseStyles} from 'react-jss'
import useStyles from './style';
import Grid from './Grid';
const P5js: React.FC = () => {
    const  classes = useStyles();

    return (
        <div className={classes.app}>
            <Grid />
        </div>
    )
}

export default P5js;