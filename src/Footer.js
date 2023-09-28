import React from "react";
import { Card, useTheme } from '@aws-amplify/ui-react';

export function Footer(props) {
    const {tokens} = useTheme();
    return(
        <Card
        backgroundColor={props.backgroundColor}
        >
            ©2023 TechForTeachers
        </Card>
    );
}