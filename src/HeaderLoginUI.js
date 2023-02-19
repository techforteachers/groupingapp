import React from "react";
import { Greeting } from "./Greeting";
import { Flex, View, TextField, Button, Text, Alert } from "@aws-amplify/ui-react";
import { useState, useEffect } from 'react';
import Login from "./ui-components/LogIn";

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
      <View
      width="100px"
      height="50px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      >
        <Button
        width="100px"
        height="50px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="2px SOLID rgba(2,31,60,1)"
        borderRadius="105px"
        padding="0px 0px 0px 0px"
        onClick={props.onClick}>
          <Text
            fontSize="17px"
            fontWeight="650"
            color="rgba(0,0,0,1)"
            lineHeight="33.421875px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="18.76%"
            bottom="24.24%"
            left="21.26%"
            right="21.26%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Log in"
          ></Text>
        </Button>
      
      </View>
    );
  }
  
  function LogoutButton(props) {
    return (
      <View
      width="100px"
      height="50px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      >
        <Button
        width="115px"
        height="50px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="2px SOLID rgba(2,31,60,1)"
        borderRadius="105px"
        padding="0px 0px 0px 0px"
        onClick={props.onClick}>
          <Text
          fontSize="17px"
          fontWeight="650"
          color="rgba(0,0,0,1)"
          lineHeight="33.421875px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="18.76%"
          bottom="24.24%"
          left="21.26%"
          right="21.26%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Log out"
          ></Text>
        </Button>

      </View>
    );
  }

  function SignupButton(props) {
    return (
      <View
      width="100px"
      height="50px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      >
        <Button
        width="110px"
        height="50px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="2px SOLID rgba(2,31,60,1)"
        borderRadius="105px"
        padding="0px 0px 0px 0px"
        onClick={props.onClick}>
          <Text
          fontSize="17px"
          fontWeight="650"
          color="rgba(0,0,0,1)"
          lineHeight="33.421875px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="18.76%"
          bottom="24.24%"
          left="21.26%"
          right="21.26%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sign up"
          ></Text>
        </Button>

      </View>
    );
  }
