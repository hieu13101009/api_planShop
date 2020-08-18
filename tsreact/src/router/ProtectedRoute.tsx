import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Index from '../views/Index';

export const ProtectedRoute = ({}) => {
    return (
        <Route
            render={(props) => {
                if (localStorage.token) {
                    return (
                        <Route>
                            <Route exact path="/admin" component={Index} />
                        </Route>
                    );
                } else {
                    return <Redirect to="/Login" />;
                }
            }}
        />
    );
};
