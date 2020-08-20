import React from 'react';
import {useSelector } from "react-redux";
import { Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './styles';
import EntryForm from "../EntryForm/index";

import {RootStore} from "../../store/index";



const Home: React.FC = () => {
    const classes = useStyles();
    const homeState = useSelector((state: RootStore) => state.home);
    return (
        <div>
            <EntryForm />
            {
                homeState.messages.map((entry) => (
                    <Card className={classes.entryCard} key={0}>
                        <CardContent>
                            <Typography variant="h2">
                                {entry.user}
                            </Typography>
                            <Typography variant="body1">
                                {entry.message}
                            </Typography>
                            <Typography variant="caption">
                                {entry.timestamp}
                            </Typography>
                        </CardContent>
                    </Card>
                ))
            }
        </div>
    );
};

export default Home;