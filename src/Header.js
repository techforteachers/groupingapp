import React, {useState, useEffect} from "react";
import { Auth } from "aws-amplify";
import { Tabs, TabItem, useTheme, Flex, Button, View, Grid } from '@aws-amplify/ui-react';
import AuthUI from "./AuthUI";
import { Logo } from "./Logo";
export function Header() {
    const { tokens } = useTheme();
    const [logStatus, setLogStatus] = useState(false);
    const [username, setUsername] = useState("Guest");
    const [userMessage, setUserMessage] = useState("Hello, please log in or sign up.");
    const [loginButtonClicked, setLoginButtonClicked] = useState(false);
    const [signUpButtonClicked, setSignUpButtonClicked] = useState(false);
    const [logOutButtonClicked, setLogOutButtonClicked] = useState(false);
    async function checkUser(){
        /*const user = await Auth.currentAuthenticatedUser()
        .then((user) => {
            setLogStatus(true);
            setUsername(user.username);
        });*/

        try{
            const user = await Auth.currentAuthenticatedUser();
            setLogStatus(true);
            setUsername(user.username);
            setUserMessage("Hello, " + user.username);
        }
        catch{
            
        }
    }
    
    useEffect(() => {
        checkUser();
      }, []);

    function handleLoginClick(){
        setLoginButtonClicked(true);
        setSignUpButtonClicked(false);
        setLogOutButtonClicked(false);
    }

    function handleSignUpClick(){
        setSignUpButtonClicked(true);
        setLoginButtonClicked(false);
        setLogOutButtonClicked(false);
    }

    function handleLogoutClick(){
        setLogOutButtonClicked(true);
        setLoginButtonClicked(false);
        setSignUpButtonClicked(false);
    }

    const logInButton = <Button
        onClick={handleLoginClick}
    >
        Log In  
    </Button>

    const signUpButton = <Button
        onClick={handleSignUpClick}
    >
        Sign Up  
    </Button>

    const logOutButton = <Button
        onClick={handleLogoutClick}
    >
        Log Out
    </Button>

    return(
        <Grid
            templateRows="1fr 10fr"
            gap={tokens.space.small}
        >
            <Flex
                columnStart="1"
                columnEnd="-1"

                backgroundColor={tokens.colors.blue[40]}
            >
                <Logo/> 
                <h3>{userMessage}</h3>
                {logInButton}
                {signUpButton}
                {logOutButton}
            </Flex>
            <View
                rowStart="2"
            >
                <AuthUI logOutButtonStatus={logOutButtonClicked} setLoginStatus={setLogStatus} loginStatus={logStatus} setMessage={setUserMessage} logInButtonStatus={loginButtonClicked} signUpButtonStatus={signUpButtonClicked}/>
            </View>
        </Grid>
    );
}