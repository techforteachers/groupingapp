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
import { Loader } from "@aws-amplify/ui-react";
import {GroupDisplayUI} from "./GroupDisplay";
import { StationsDisplayUI } from "./StationDisplay";
//import { SignUp } from "@aws-amplify/ui-react/dist/types/components/Authenticator/SignUp";
export function Main (props) {
    const { tokens } = useTheme();
    const [view, setView] = useState();
    const [potentialUser, setPotentialUser] = useState();
    const [selectedClass, setSelectedClass] = useState();
    const [studentsTBG, setStudentsTBG] = useState([]);
    const [backButton, setBackButton] = useState();
    const [groupedStudents, setGroupedStudents] = useState([]);
    const [loader, setLoader] = useState();
    const [numGroups, setNumGroups] = useState();
    

    useEffect(() => {
        if(props.isLoggedIn == true){
            if(props.currentView == "classPreviewUI"){
                setView(<ClassesUI setLoader={setLoader} updateTree={props.updateTree} setUpdateTree={props.setUpdateTree} setSelectedClass={setSelectedClass} selectedClass={selectedClass} setCurrentView={props.setCurrentView}/>);
                setBackButton();
            }
            else if(props.currentView == "createClassUI"){
                setView(<CreateClassUI setLoader={setLoader} createClass={props.createClass} setCurrentView={props.setCurrentView}/>)
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
                setView(<EditClassUI setLoader={setLoader} editClass={props.editClass} selectedClass={selectedClass} setCurrentView={props.setCurrentView}/>)
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
                setView(<GenerateGroupsUI setStudentsTBG={setStudentsTBG} setNumGroups={setNumGroups} setLoader={setLoader} setGroupedStudents={setGroupedStudents} selectedClass={selectedClass} setCurrentView={props.setCurrentView}/>)
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
                setView(<GroupDisplayUI setLoader={setLoader} studentsTBG={studentsTBG} setCurrentView={props.setCurrentView} numGroups={numGroups} groupedStudents={groupedStudents}/>)
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
            else if(props.currentView == "stationDisplayUI"){
                setView(<StationsDisplayUI setLoader={setLoader} studentsTBG={studentsTBG} setCurrentView={props.setCurrentView} numGroups={numGroups} groupedStudents={groupedStudents}/>)
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
        if(props.currentView == "groupDisplayUI" || props.currentView == "stationDisplayUI"){
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
            {loader}
        </View>
    )
}