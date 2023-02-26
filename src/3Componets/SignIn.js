import React, { useEffect } from "react";
import { Amplify } from 'aws-amplify';
import { API, Auth, Analytics } from "aws-amplify";
import {AuthState, onAuthUIStateChange} from "../ui-components";
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

export function SignIn () {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    if(user){
      sessionStorage.setItem("username", user.username);
    }
    else{
      sessionStorage.setItem("username", "Guest");
    }
  }, []);

  return(
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user.username}</h1>
            <script>
              console.log(user.username);
            </script>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
  );
}