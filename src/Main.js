import React from "react";
import { Card, useTheme, Flex, Button } from '@aws-amplify/ui-react';
import { useEffect, useState } from "react";
import { LoginUI, SignUpUI, VerificationUI } from "./MainLoginUI";
import { ClassesUI } from "./ClassesUI";
import { CreateClassUI } from "./CreateClassUI";
import { EditClassUI } from "./EditClassUI";
//import { SignUp } from "@aws-amplify/ui-react/dist/types/components/Authenticator/SignUp";
export function Main (props) {
    const { tokens } = useTheme();
    const [view, setView] = useState();
    const [potentialUser, setPotentialUser] = useState();
    const [selectedClass, setSelectedClass] = useState();

    useEffect(() => {
        if(props.isLoggedIn == true){
            if(props.currentView == "classPreviewUI"){
                setView(<ClassesUI setSelectedClass={setSelectedClass} selectedClass={selectedClass} setClasses={props.setClasses} classes={props.classes} setCurrentView={props.setCurrentView}/>);
            }
            else if(props.currentView == "createClassUI"){
                setView(<CreateClassUI createClass={props.createClass} classes={props.classes} setCurrentView={props.setCurrentView}/>)
            }
            else if(props.currentView == "editClassUI"){
                setView(<EditClassUI editClass={props.editClass} classes={props.classes} selectedClass={selectedClass} setCurrentView={props.setCurrentView}/>)
            }
        } 
        else if (props.currentView == "loginUI"){
            setView(<LoginUI handleChangeUser={props.handleChangeUser} setCurrentView={props.setCurrentView}/>);
        }
        else if (props.currentView == "signupUI"){
            setView(<SignUpUI setPotentialUser={setPotentialUser} setCurrentView={props.setCurrentView}/>)
        }
        else if (props.currentView == "verificationUI"){
            setView(<VerificationUI potentialUser={potentialUser} setCurrentView={props.setCurrentView} handleChangeUser={props.handleChangeUser}/>)
        }
        
        
      }, [props, selectedClass]);

    
    
    return(
        <Flex>
            {view}
            
        </Flex>
    )
}