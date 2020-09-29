import React from 'react';
import useStyles from './style';


const ColorPicker = ({currentColor, setCurrentColor}) => {
    const classes = useStyles();

    const colorChange = (event:any) => {
        setCurrentColor(event.target.value);
    }
    return <input className={classes.colorPicker} type="color" onChange={colorChange} value={currentColor}/>
};

export default ColorPicker;