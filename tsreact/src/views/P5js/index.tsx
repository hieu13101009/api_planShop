import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    app: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
const P5js: React.FC = () => {
    const  classes = useStyles();

    return (
        <div className={classes.app}>
            hello w
            {/* <Grid /> */}
        </div>
    )
}

export default P5js;