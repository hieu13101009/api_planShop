import React from "react";
import { Route, Redirect } from "react-router-dom";
import Index from '../views/Index'
import Example from '../views/Example'


export const ProtectedRoute = ({
    }) => {
    return (
        <Route
        render={props => {
            if (localStorage.token) {
            return (
                <Route>
                    <Route exact path="/admin" component={Index} />
                    <Route exact path="/admin/Example" component={Example} />
                </Route>
            );
            } else {
            return (
                <Redirect to= "/Login"/>
            );
            }
        }}
        />
    );
};
