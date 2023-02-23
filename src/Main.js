import React from "react";
import { Card, useTheme, Flex, Button, View, Text } from '@aws-amplify/ui-react';
import { useEffect, useState } from "react";
import { LoginUI, SignUpUI, VerificationUI } from "./MainLoginUI";
import { ClassesUI } from "./ClassesUI";
import { CreateClassUI } from "./CreateClassUI";
import { EditClassUI } from "./EditClassUI";
import { HelpPage } from "./HelpPage";
import { GenerateGroupsUI } from "./GenerateGroupsUI";
import { Grid } from "react-ui";
import GroupDisplay from "./Display";
//import { SignUp } from "@aws-amplify/ui-react/dist/types/components/Authenticator/SignUp";
export function Main (props) {
    const { tokens } = useTheme();
    const [view, setView] = useState();
    const [potentialUser, setPotentialUser] = useState();
    const [selectedClass, setSelectedClass] = useState();
    const [backButton, setBackButton] = useState();
    const [groupedStudents, setGroupedStudents] = useState([]);

    useEffect(() => {
        if(props.isLoggedIn == true){
            if(props.currentView == "classPreviewUI"){
                setView(<ClassesUI setSelectedClass={setSelectedClass} selectedClass={selectedClass} setClasses={props.setClasses} classes={props.classes} setCurrentView={props.setCurrentView}/>);
                setBackButton();
            }
            else if(props.currentView == "createClassUI"){
                setView(<CreateClassUI createClass={props.createClass} setCurrentView={props.setCurrentView}/>)
                setBackButton(
                    <Button
                    size="medium"
                    border="2px SOLID rgba(2,31,60,1)"
                    borderRadius="7px"
                    onClick={onBackClick}
                    >
                        <Text
                        textAlign="center"
                        display="block"
                        direction="column"
                        children="Back"
                        ></Text>
                    </Button>
                );
            }
            else if(props.currentView == "editClassUI"){
                setView(<EditClassUI editClass={props.editClass} selectedClass={selectedClass} setCurrentView={props.setCurrentView}/>)
                setBackButton(
                    <Button
                    size="medium"
                    border="2px SOLID rgba(2,31,60,1)"
                    borderRadius="7px"
                    onClick={onBackClick}
                    >
                        <Text
                        textAlign="center"
                        display="block"
                        direction="column"
                        children="Back"
                        ></Text>
                    </Button>
                );
            }
            else if(props.currentView == "generateGroupsUI"){
                setView(<GenerateGroupsUI setGroupedStudents={setGroupedStudents} selectedClass={selectedClass} setCurrentView={props.setCurrentView}/>)
                setBackButton(
                    <Button
                    size="medium"
                    border="2px SOLID rgba(2,31,60,1)"
                    borderRadius="7px"
                    onClick={onBackClick}
                    >
                        <Text
                        textAlign="center"
                        display="block"
                        direction="column"
                        children="Back"
                        ></Text>
                    </Button>
                );
            }
            else if(props.currentView == "groupDisplayUI"){
                setView(<GroupDisplay inputData={groupedStudents}/>)
                setBackButton(
                    <Button
                    size="medium"
                    border="2px SOLID rgba(2,31,60,1)"
                    borderRadius="7px"
                    onClick={onBackClick}
                    >
                        <Text
                        textAlign="center"
                        display="block"
                        direction="column"
                        children="Back"
                        ></Text>
                    </Button>
                );
            }
        } 
        else if (props.currentView == "loginUI"){
            setView(<LoginUI handleChangeUser={props.handleChangeUser} setCurrentView={props.setCurrentView}/>);
            setBackButton();
        }
        else if (props.currentView == "signupUI"){
            setView(<SignUpUI setPotentialUser={setPotentialUser} setCurrentView={props.setCurrentView}/>)
            setBackButton();
        }
        else if (props.currentView == "verificationUI"){
            setView(<VerificationUI potentialUser={potentialUser} setCurrentView={props.setCurrentView} handleChangeUser={props.handleChangeUser}/>)
            setBackButton();
        }
        
        
      }, [props, selectedClass]);

    function onBackClick(){
        if(props.currentView == "groupDisplayUI"){
            props.setCurrentView("generateGroupsUI");
        }
        else{
            props.setCurrentView("classPreviewUI");
        }
    }
    
    return(
        <View>
            {backButton}
            {view}
        </View>
    )
}