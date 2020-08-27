import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './styles';
import EntryForm from "../EntryForm/index";
import {getMessage} from "../../container/HomeContainer/actions/actions";
import {RootStore} from "../../store/index";



const Home: React.FC = () => {
    const classes = useStyles();
    useEffect(() => {
        dispatch(getMessage());
    }, []);
    const homeState = useSelector((state: RootStore) => state.home);
    console.log('homeState---', homeState.messages);
    const dispatch = useDispatch();

    return (
        <div>
            <EntryForm />
            { homeState.messages && (
                <div>
                    <Typography variant="h2">
                    {homeState.messages.ping}
                    </Typography>
                    {homeState.messages.mess.map((entry: any) => {
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
                        )})}
                </div>
                )
            }
        </div>
    );
};

export default Home;