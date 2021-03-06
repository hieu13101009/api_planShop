import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';

import useStyles from './styles';
import Home from '../../views/Home';
import p5js from '../../views/P5js';

const App: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <span role="img" aria-label="humbugger">
                        🍔
                        </span>
                    </IconButton>
                    <Button component={Link} to="/home" color="inherit">
                        Home
                    </Button>
                    <Button component={Link} to="/p5js" color="inherit">
                        p5js
                    </Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/p5js" component={p5js} />
                    <Redirect to="/" />
                </Switch>
            </Container>
        </div>
    );
};

export default App;
