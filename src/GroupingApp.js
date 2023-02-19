import React from "react";
import { Header } from "./Header";
import { Main }  from "./Main";
import { Footer } from "./Footer";
import { SideBar } from "./SideBar";
import { useEffect, useState } from "react";
import { Card, useTheme, View, Grid, Divider, Text} from "@aws-amplify/ui-react";


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

    function handleCreateClass(data){
        const classData = {
            username: user,
            classname: data.classname,
            students: data.students,
            id: data.id
        }

        let newClasses = classes.slice();
        newClasses.push(classData);
        setClasses(newClasses);
    }

    function handleEditClass(data, index){
        const classData = {
            username: user,
            classname: data.classname,
            students: data.students,
            id: data.id
        }

        let newClasses = classes.slice();
        newClasses[index] = classData;
        setClasses(newClasses);
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