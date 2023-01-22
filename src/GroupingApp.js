import React from "react";
import { useState } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { Authenticator } from '@aws-amplify/ui-react';
export function GroupingApp () {
    //const [username, setUsername] = useState("Guest");
    return(
        <div>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}