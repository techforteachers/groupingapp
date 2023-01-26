import React from "react";
export function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <h1>Welcome back, {props.username}!</h1>;
    }
    return <h1>Please log in or sign up.</h1>;
}