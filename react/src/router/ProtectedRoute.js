import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = () => {
    return (
        <Route
        render={props => {
            return (
                <Redirect
                to={{
                    pathname: "/Signup",
                }}
                />
            );
        }}
        />
    );
};
