import React from "react";
import { Header } from "./Header";
import { Main }  from "./Main";
import { Footer } from "./Footer";
export class GroupingApp extends React.Component  {
    constructor(props){
        super(props);
        
        this.state = {isLoggedIn : false, user : "Guest", currentView : ""}
        //alertStatus: false displays "successfully signed out" and true displays "successfully signed in"
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleSignupClick = this.handleSignupClick.bind(this);
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangeView = this.handleChangeView.bind(this);
    }

    

    handleLoginClick(){
        this.setState({currentView : "loginUI"})
    }

    handleLogoutClick(){
        this.setState({isLoggedIn : false}); 
        this.setState({currentView : "loginUI"})
    }

    handleSignupClick(){
        this.setState({currentView : "signupUI"})
    }

    handleChangeUser(newStatus, newUser){
        this.setState({isLoggedIn : newStatus});
        this.setState({user : newUser})
    }

    handleChangeView(newView){
        this.setState({currentView : newView});
    }

    render(){
        return(
            <div>
                <Header 
                    user={this.state.user} 
                    isLoggedIn={this.state.isLoggedIn} 
                    handleLoginClick={this.handleLoginClick} 
                    handleLogoutClick={this.handleLogoutClick} 
                    handleSignupClick={this.handleSignupClick}
                />
                <Main 
                    currentView={this.state.currentView} 
                    setCurrentView={this.handleChangeView}
                    isLoggedIn={this.state.isLoggedIn} 
                    handleChangeUser={this.handleChangeUser}
                />
                <Footer></Footer>
            </div>
        );
    }

}