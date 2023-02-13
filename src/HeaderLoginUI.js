import React from "react";
import { Greeting } from "./Greeting";
import { Flex, View, TextField, Button, Text, Alert } from "@aws-amplify/ui-react";
import { useState, useEffect } from 'react';

export function HeaderLoginUI (props) {

    let logButton;
    let signupButton;
    if (props.isLoggedIn) {
        logButton = <LogoutButton onClick={props.handleLogoutClick} />;
    } else {
        logButton = <LoginButton onClick={props.handleLoginClick}/>;
        signupButton = <SignupButton onClick={props.handleSignupClick}/>
    }

    return(
        <Flex>
            {logButton}
            {signupButton}
        </Flex>
    );
}

function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Log In
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Log Out
      </button>
    );
  }

  function SignupButton(props) {
    return (
      <button onClick={props.onClick}>
        Sign Up
      </button>
    );
  }
