import React from "react";
import { Header } from "./Header";
import { Main }  from "./Main";
import { Footer } from "./Footer";
import { SideBar } from "./SideBar";
import { useEffect, useState } from "react";
import { Card, useTheme, View, Grid, Divider, Text} from "@aws-amplify/ui-react";
import { createClass, deleteClassStudent, deleteStudent } from "./graphql/mutations";
import { API } from "aws-amplify";
import { updateClass } from "./graphql/mutations";
import { createStudent } from "./graphql/mutations";
import { createClassStudent } from "./graphql/mutations";

export function GroupingApp (props)  {
    const { tokens } = useTheme();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState("Guest");
    const[ currentView, setCurrentView ] = useState("");
    const[ classes, setClasses ] = useState([]);
    //alertStatus: false displays "successfully signed out" and true displays "successfully signed in"
    const offWhite = "#F6F8FF"; 
    const dividerColor = "#021F3C";
    const background = "#EFF7FF"

    function handleLoginClick(){
        setCurrentView("loginUI");
    }

    function handleLogoutClick(){
        setIsLoggedIn(false); 
        setCurrentView("loginUI")
    }

    function handleSignupClick(){
        setCurrentView("signupUI")
    }

    function handleChangeUser(newStatus, newUser){
        setIsLoggedIn(newStatus);
        setUser(newUser)
    }

    function handleChangeView(newView){
        setCurrentView(newView);
    }

    async function handleCreateClass(data){
        let students = data.students;
        const newClassData = {
            className: data.classname
        }
        const newClass = await API.graphql({
            query: createClass,
            variables: { input: newClassData },
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        }); 
        const newClassId = newClass.data.createClass.id; 
        for(let i=0; i<students.length; i++){
            let currentStudent = students[i];
            let firstname = currentStudent.first_name;
            let lastname = currentStudent.last_name;
            let grade = currentStudent.grade; 
            let newStudent = await API.graphql({
                query: createStudent,
                variables: { input : { first_name: firstname, last_name: lastname, grade: grade } },
                authMode: 'AMAZON_COGNITO_USER_POOLS'
            });
            let newStudentId = newStudent.data.createStudent.id;
            await API.graphql({
                query: createClassStudent,
                variables: {input: {studentId: newStudentId, classId: newClassId}},
                authMode: 'AMAZON_COGNITO_USER_POOLS'
            });
        }
        
        console.log(newClass.data.createClass.id);
        setCurrentView("classPreviewUI");
    }

    async function handleEditClass(data){
        let classId = data.id; 
        let newClassName = data.classname;
        let addedStudents = data.addedStudents;
        let deletedStudents = data.deletedStudents;
        let deletedClassStudents = data.deletedClassStudents;
        const newClass = await API.graphql({
            query: updateClass,
            variables: { input: {id: classId, className: newClassName} },
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        }); 
        for(let i=0; i<addedStudents.length; i++){
            let currentStudent = addedStudents[i];
            let firstname = currentStudent.first_name;
            let lastname = currentStudent.last_name;
            let grade = currentStudent.grade; 
            let newStudent = await API.graphql({
                query: createStudent,
                variables: { input : { first_name: firstname, last_name: lastname, grade: grade } },
                authMode: 'AMAZON_COGNITO_USER_POOLS'
            });
            let newStudentId = newStudent.data.createStudent.id;
            await API.graphql({
                query: createClassStudent,
                variables: {input: {classId: classId, studentId: newStudentId}},
                authMode: 'AMAZON_COGNITO_USER_POOLS'
            });
        }
        for(let j=deletedStudents.length-1; j>=0; j--){
            let currentStudent = deletedStudents[j];
            let id = deletedClassStudents[j]
            await API.graphql({
                query: deleteClassStudent,
                variables: {input: {id: id}},
                authMode: 'AMAZON_COGNITO_USER_POOLS'
            });
            await API.graphql({
                query: deleteStudent,
                variables: {input: {id: currentStudent} },
                authMode: 'AMAZON_COGNITO_USER_POOLS'
            });
        }
        console.log(newClass.data.updateClass.className);
        setCurrentView("classPreviewUI");
    }

    return(
        <Grid
            templateColumns="0.1rem 1fr 3fr 1fr 2fr 0.1rem"
            templateRows="1fr 3fr 0.1fr"
            columnGap="1rem"
            rowGap="0.5rem"
            backgroundColor={background}
        >
            <Card
                columnStart="1"
                columnEnd="-1"
                backgroundColor={offWhite}
                border={`${tokens.borderWidths.medium} solid ${dividerColor}`}
            >
                <Header 
                    user={user} 
                    isLoggedIn={isLoggedIn} 
                    handleLoginClick={handleLoginClick} 
                    handleLogoutClick={handleLogoutClick} 
                    handleSignupClick={handleSignupClick}
                />
            </Card>
            <Card
                columnStart="2"
                columnEnd="3" 
                backgroundColor={offWhite}
                border={`${tokens.borderWidths.medium} solid ${dividerColor}`}
                borderRadius="10px"
            >
                <SideBar classes={classes}/>
            </Card>
            <Card
                columnStart="3"
                columnEnd="6"
                backgroundColor={offWhite}
                border={`${tokens.borderWidths.medium} solid ${dividerColor}`}
                borderRadius="10px"
            >
                <Main 
                    currentView={currentView} 
                    setCurrentView={handleChangeView}
                    isLoggedIn={isLoggedIn} 
                    handleChangeUser={handleChangeUser}
                    setClasses={setClasses}
                    classes={classes}
                    createClass={handleCreateClass}
                    editClass={handleEditClass}
                />
            </Card>
            <Card
                columnStart="1"
                columnEnd="-1"
                backgroundColor={offWhite}
                border={`${tokens.borderWidths.medium} solid ${dividerColor}`}
            >
                <Footer backgroundColor={offWhite}/>
            </Card>
        </Grid>
    );
}