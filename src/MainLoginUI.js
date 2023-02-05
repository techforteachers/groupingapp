import React from "react";
import { View, TextField, Button, Text } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
export function LoginUI (props) {

    async function onSignIn(){
        console.log(document.getElementById("usernameInput").value)
        try {
            const user = Auth.signIn(document.getElementById("usernameInput").value, document.getElementById("passwordInput").value)
            .then((user) => {
                props.handleChangeUser(true, user.username);
                props.setCurrentView("classPreviewUI");
            });
            
        } catch (error) {
            document.getElementById("errorText").innerText = error;
            console.log('error signing in', error);
        }
    }
    return(
        <View>
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
    );
}
    



export function SignUpUI (props) { 
    async function onSignUp(){
        var username = document.getElementById("usernameSignUpInput").value
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
            props.setCurrentView("verificationUI");
            props.setPotentialUser(username);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }
    return(
        <View>
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
    );
}

export function VerificationUI (props) {
    const Username = props.potentialUser;
    async function onVerificationCode(){
        try {
            await Auth.confirmSignUp(Username, document.getElementById("verificationCodeInput").value)
            .then(() => {
                props.handleChangeUser(true, Username);
            });
            props.setCurrentView("classPreviewUI");
          } catch (error) {
              console.log('error confirming sign up', error);
          }
    }
    return(
        <View>
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
    );
}