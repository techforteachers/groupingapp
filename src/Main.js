import React from "react";
import { Card, useTheme, Flex, Alert} from '@aws-amplify/ui-react';
import { useEffect, useState } from "react";
import { LoginUI, SignUpUI, VerificationUI } from "./MainLoginUI";
//import { SignUp } from "@aws-amplify/ui-react/dist/types/components/Authenticator/SignUp";
export function Main (props) {
    const { tokens } = useTheme();
    const [view, setView] = useState();
    const [alert, setAlert] = useState();
    const [potentialUser, setPotentialUser] = useState();

    useEffect(() => {
        if(props.isLoggedIn == true){
            setView();
        } 
        else if (props.currentView == "loginUI"){
            setView(<LoginUI handleChangeUser={props.handleChangeUser} setAlert={setAlert}/>);
        }
        else if (props.currentView == "signupUI"){
            setView(<SignUpUI setPotentialUser={setPotentialUser} setCurrentView={props.setCurrentView}/>)
        }
        else if (props.currentView == "verificationUI"){
            setView(<VerificationUI potentialUser={potentialUser} setCurrentView={props.setCurrentView} handleChangeUser={props.handleChangeUser}/>)
        }
      }, [props]);

    
    
    return(
        <Flex
            height={500}
            backgroundColor={tokens.colors.blue[10]}
            justifyContent="center"
            alignItems="center"
        >
            { alert ? 
            (
                <Alert variation="success" isDismissible={false}>Successfully signed in</Alert>
            ) :
            (
                <Alert variation="success" isDismissible={false}>Successfully signed out</Alert>
            )}
            {view}
        </Flex>
    )
}