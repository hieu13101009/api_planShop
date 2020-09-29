import { createUseStyles } from 'react-jss';

export default createUseStyles({
    app: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    grid: {
        display: 'grid',
        gridTemplateRows: 'repeat(5, 1fr)',
        gridTemplateColumns: 'repeat(8, 1fr)',
        width: '80vmin',
        height: '50vmin',
    },
    cell: {
        cursor: 'pointer',
        outline : '2px solid black',
        background: 'white',
        transition: 'all 200ms linear',
        '&:hover': {
            transform: 'scale(1.2)'
        }
    },
    colorPicker: {
        margin: '1rem',
        padding: 0,
        width: '50px',
        height: '50px',
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
    }
});