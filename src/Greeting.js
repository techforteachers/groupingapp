import { Text } from "@aws-amplify/ui-react";
import React from "react";
export function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <p>Welcome back, {props.username}!</p>;
    }
    return <p>Please log in or sign up.</p>;
}