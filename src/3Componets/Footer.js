import React from "react";
import { Card, useTheme } from '@aws-amplify/ui-react';

export function Footer() {
    const {tokens} = useTheme();
    return(
        <Card
            backgroundColor={tokens.colors.blue[40]}
        >
            Footer
        </Card>
    );
}