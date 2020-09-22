import { createUseStyles } from 'react-jss';

export default createUseStyles({
    app: {
        display: 'flex',
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
        outline : '2px solid black',
    },
    cell: {
        outline : '2px solid black',
    }
});