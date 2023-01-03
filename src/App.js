import React, { useState, useEffect } from "react";
import { API, Auth, Analytics } from "aws-amplify";
import {withAuthenticator,
  useAuthenticator
} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
function App({ signOut, user }) {
  return (
    <div>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(App);