import React from "react";
import { Card, useTheme, Flex} from '@aws-amplify/ui-react';
import { SignIn } from "./SignIn";
import AuthUI from "./AuthUI";
import { Authenticator } from "@aws-amplify/ui-react";
export function Main () {
    const { tokens } = useTheme();
    return(
        <Flex
            height={500}
            backgroundColor={tokens.colors.blue[10]}
            justifyContent="center"
            alignItems="center"
        >
        </Flex>
    )
}