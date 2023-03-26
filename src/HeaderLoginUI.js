import React from "react";
import { Greeting } from "./Greeting";
import { Flex, View, TextField, Button, Text, Alert, ButtonGroup } from "@aws-amplify/ui-react";
import { useState, useEffect } from 'react';
import Login from "./ui-components/LogIn";
import "./button.css"

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
          <ButtonGroup>
            {logButton}
            {signupButton}
          </ButtonGroup>
    );
}

function LoginButton(props) {
    return (
      <Button
      onClick={props.onClick}
      display="block"
      border="2px SOLID rgba(2,31,60,0)"
      >
        Log in
      </Button>
      )
  }
  
  function LogoutButton(props) {
    return (
      <Button
      onClick={props.onClick}
      display="block"
      border="2px SOLID rgba(2,31,60,0)"
      >
        Sign out
      </Button>
    );
  }

  function SignupButton(props) {
    return (
      <Button
      onClick={props.onClick}
      display="block"
      border="2px SOLID rgba(2,31,60,0)"
      >
        Sign up
      </Button>
    );
  }
