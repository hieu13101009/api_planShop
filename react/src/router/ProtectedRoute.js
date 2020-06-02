import React from "react";
import { Route, Redirect } from "react-router-dom";
import Index from '../views/Index'


export const ProtectedRoute = ({
    }) => {
    return (
        <Route
        render={props => {
            if (localStorage.token) {
            return <Index />;
            } else {
            return (
                <Redirect to= "Login"/>
            );
            }
        }}
        />
    );
};
