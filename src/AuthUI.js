import React from "react";
import { Auth } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { View, TextField, Button, Text, Alert } from '@aws-amplify/ui-react';

function AuthUI (props) {
    const [alert, setAlert] = useState();
    //false displays "successfully signed out"
    //true displays "successfully signed in"

    //TODO: Add "resend confirmation code"
    useEffect(() => {
        if(props.loginStatus == false){
            if(props.logInButtonStatus == true){
                setInputScreen(loginUI);
            }
            else if (props.signUpButtonStatus == true){
                setInputScreen(signUpUI);
            }
        }
        else{
            setInputScreen();
            if(props.logOutButtonStatus == true){
                onSignOut();
            }
        }
      }, [props]);

    const [inputScreen, setInputScreen] = useState();
    const[verificationInput, setVerificationInput] = useState();
    //*global var used for confirm verification; dangerous and should be replaced 
    var Username;
    
    const loginUI = <View>
    <TextField
        label="Username"
        id='usernameInput'
    /> 
    <TextField
        type="password"
        label="Password"
        id='passwordInput'
    /> 
    <Button
        height='5rem'
        fontSize='2rem'
        loadingText=""
        onClick={onSignIn}
        >
        Submit
    </Button>
    <Text
        variation="error"
        as="p"
        lineHeight="1.5em"
        fontWeight={400}
        fontSize="1em"
        fontStyle="normal"
        textDecoration="none"
        width="30vw"
        id='errorText'
    >
    </Text>
</View>

    const signUpUI = <View>
        <TextField
            label="Username"
            id='usernameSignUpInput'
        /> 
        <TextField
            type="password"
            label="Password"
            id='passwordSignUpInput'
        /> 
        <TextField
            type="email"
            label="Email"
            id='emailSignUpInput'
        /> 
        <Button
            height='5rem'
            fontSize='2rem'
            loadingText=""
            onClick={onSignUp}
            >
            Submit
        </Button>
        <Text
            variation="error"
            as="p"
            lineHeight="1.5em"
            fontWeight={400}
            fontSize="1em"
            fontStyle="normal"
            textDecoration="none"
            width="30vw"
            id='signUperrorText'
        >
        </Text>
    </View>

    const verificationUI = <View>
        <TextField
            type="number"
            label="Verification Code"
            id='verificationCodeInput'
        /> 
        <Button
            height='5rem'
            fontSize='2rem'
            loadingText=""
            onClick={onVerificationCode}
            >
            Submit
        </Button>
    </View>

    async function onSignIn(){
        console.log(document.getElementById("usernameInput").value)
        try {
            const user = Auth.signIn(document.getElementById("usernameInput").value, document.getElementById("passwordInput").value)
            .then((user) => {
                props.setMessage("Hello, " + user.username);
                props.setLoginStatus(true);
                setAlert(true);
            });
            setInputScreen();
            
        } catch (error) {
            document.getElementById("errorText").innerText = error;
            console.log('error signing in', error);
        }
    }

    async function onVerificationCode(){
        try {
            await Auth.confirmSignUp(Username, document.getElementById("verificationCodeInput").value)
            .then(() => {
                props.setMessage("Hello, " + Username);
                props.setLoginStatus(true);
                setAlert(true);
            });
            setInputScreen()
            setVerificationInput()
          } catch (error) {
              console.log('error confirming sign up', error);
          }
    }

    async function onSignUp(){
        var username = document.getElementById("usernameSignUpInput").value
        Username = username
        var password = document.getElementById("passwordSignUpInput").value
        var email = document.getElementById("emailSignUpInput").value
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                },
                autoSignIn: { // optional - enables auto sign in after user is confirmed
                    enabled: true,
                }
            });
            console.log(user);
            setInputScreen();
            setVerificationInput(verificationUI);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    async function onSignOut(){
        Auth.signOut()
        .then(
            () => {
                props.setMessage("Hello, please log in or sign up.");
                props.setLoginStatus(false);
                setAlert(false);
            }
        )
        setInputScreen();
    }

    return (
        <div>
            { inputScreen }
            { alert ? 
            (
                <Alert variation="success" isDismissible={false}>Successfully signed in</Alert>
            ) :
            (
                <Alert variation="success" isDismissible={false}>Successfully signed out</Alert>
            ) }
            { verificationInput }
        </div>
    );
    
};
  
export default AuthUI;
