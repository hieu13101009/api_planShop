import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './styles';
import EntryForm from "../EntryForm/index";
import {getMessage} from "../../container/HomeContainer/actions/actions";

import {RootStore} from "../../store/index";
import { Message } from 'react-hook-form/dist/types/form';



const Home: React.FC = () => {
    const classes = useStyles();
    useEffect(() => {
        dispatch(getMessage());
    }, []);
    const homeState: {messages: Message[]} = useSelector((state: RootStore) => state.home);
    console.log('homeState---', homeState);
    const dispatch = useDispatch();

    return (
        <div>
            <EntryForm />
            
            { homeState.messages !== undefined ? 
                homeState.messages.map((entry: any) => {
                    return(
                    <Card className={classes.entryCard} key={entry.id}>
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
                )})
                : null
            }
        </div>
    );
};

export default Home;