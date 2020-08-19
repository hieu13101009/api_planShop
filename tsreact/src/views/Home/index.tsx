import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector } from "react-redux";
import { Card, CardContent, Typography } from '@material-ui/core';
import {getMessage} from "../../container/HomeContainer/actions/actions";
import useStyles from './styles';
import useCallListApi from '../../hooks/index';

import {RootStore} from "../../store/index";


const Home: React.FC = () => {
    const classes = useStyles();
    const homeState = useSelector((state: RootStore) => state.home);
    console.log('homeState',homeState.messages);
    return (
        <div>
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