import React, {useState, useEffect} from "react";
import { Tabs, TabItem, useTheme, Flex, Button, View, Grid } from '@aws-amplify/ui-react';
import { Logo } from "../4Buttons/Logo";
import { Greeting } from "../3Componets/Greeting";
import { HeaderLoginUI } from "../3Componets/HeaderLoginUI";
import { HelpPage } from "../4Buttons/HelpPage";

export function Header(props) {
    const { tokens } = useTheme();

    return(
        <Flex>
            <Logo/> 
            <Greeting isLoggedIn={props.isLoggedIn} username={props.user}></Greeting>
            <HeaderLoginUI 
                isLoggedIn={props.isLoggedIn} 
                handleLogoutClick={props.handleLogoutClick} 
                handleLoginClick={props.handleLoginClick} 
                handleSignupClick={props.handleSignupClick}
            />
            <HelpPage/>
        </Flex>
    );
}