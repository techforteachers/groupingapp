import React, {useState, useEffect} from "react";
import { Tabs, TabItem, useTheme, Flex, Button, View, Grid, Card } from '@aws-amplify/ui-react';
import {TFTButton} from "./TFTButton"
import { Greeting } from "./Greeting";
import { HeaderLoginUI } from "./HeaderLoginUI";
import { HelpPage } from "./HelpPage";

export function Header(props) {
    const { tokens } = useTheme();

    return(
            <Flex>
                <TFTButton/>
                <Greeting isLoggedIn={props.isLoggedIn} username={props.user}></Greeting>
                <HeaderLoginUI 
                    isLoggedIn={props.isLoggedIn} 
                    handleLogoutClick={props.handleLogoutClick} 
                    handleLoginClick={props.handleLoginClick} 
                    handleSignupClick={props.handleSignupClick}
                />
                <HelpPage/>
                <Button style={{marginLeft:'auto' }} onClick={() => window.open("https://www.paypal.com/donate/?hosted_button_id=QMRLBVZLQBXGW")}>
                    Donate
                </Button>

            </Flex>
            
        
        
    );
}