import React, {useState, useEffect} from "react";
import { Tabs, TabItem, useTheme, Flex, Button, View, Grid } from '@aws-amplify/ui-react';
import { Logo } from "./Logo";
import { Greeting } from "./Greeting";
import { HeaderLoginUI } from "./HeaderLoginUI";
export function Header(props) {
    const { tokens } = useTheme();

    return(
        <Flex
            backgroundColor={tokens.colors.blue[40]}
        >
            <Logo/> 
            <Greeting isLoggedIn={props.isLoggedIn} username={props.user}></Greeting>
            <HeaderLoginUI 
                isLoggedIn={props.isLoggedIn} 
                handleLogoutClick={props.handleLogoutClick} 
                handleLoginClick={props.handleLoginClick} 
                handleSignupClick={props.handleSignupClick}
            />
        </Flex>
    );
}