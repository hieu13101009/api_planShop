import React, {useState} from 'react';
import {createUseStyles} from 'react-jss'
import useStyles from './style';
import Grid from './Grid';
import ColorPicker from './ColorPicker';
const P5js: React.FC = () => {
    const  classes = useStyles();
    const [currentColor, setCurrentColor] = useState('#30e889');

    return (
        <div className={classes.app}>
            <ColorPicker currentColor={currentColor} setCurrentColor={setCurrentColor}/>
            <Grid currentColor={currentColor}/>
        </div>
    )
}

export default P5js;