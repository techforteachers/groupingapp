import React from "react";
import { Header } from "./Header";
import { Main }  from "./Main";
import { Footer } from "./Footer";
import { SideBar } from "./SideBar";
import { useEffect, useState } from "react";
import { Card, useTheme, View, Grid} from "@aws-amplify/ui-react";


export function GroupingApp (props)  {
        const { tokens } = useTheme();
        const [isLoggedIn, setIsLoggedIn] = useState(false);
        const [user, setUser] = useState("Guest");
        const[ currentView, setCurrentView ] = useState("");
        const[ classes, setClasses ] = useState([]);
        //alertStatus: false displays "successfully signed out" and true displays "successfully signed in"

    

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

    return(
        <Grid
            templateColumns="1fr 3fr 1fr"
            templateRows="1fr 3fr 1fr"
        >
            <Card
                columnStart="1"
                columnEnd="-1"
                backgroundColor={tokens.colors.blue[40]}
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
                columnStart="1"
                columnEnd="2" 
            >
                <SideBar classes={classes}/>
            </Card>
            <Card
                columnStart="2"
                columnEnd="-1"
                backgroundColor={tokens.colors.blue[10]}
            >
                <Main 
                    currentView={currentView} 
                    setCurrentView={handleChangeView}
                    isLoggedIn={isLoggedIn} 
                    handleChangeUser={handleChangeUser}
                    setClasses={setClasses}
                    classes={classes}
                />
            </Card>
            <Card
                columnStart="1"
                columnEnd="-1"
            >
                <Footer/>
            </Card>
        </Grid>
    );
}