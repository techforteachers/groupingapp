import React from "react";
export function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <h3>Welcome back, {props.username}!</h3>;
    }
    return <h3>Please log in or sign up.</h3>;
}