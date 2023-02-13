import React from "react";
import Button from '@mui/material/Button';
import { Tabs, TabItem, Grid, Card, useTheme, View, Heading, Text, Authenticator, Flex } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

const ChooseAppPageLayout = ({ signOut, user }) => {
    const { tokens } = useTheme();

    return (
        <View>
            <Grid
                columnGap="0.5rem"
                rowGap="0.5rem"
                templateColumns="1fr 4fr 1fr"
                templateRows="1fr 8fr 1fr"
            >
                <Flex
                    columnStart="1"
                    columnEnd="-1"
                    backgroundColor={tokens.colors.blue[40]}
                >
                    <Button variant="text" >
                        TechForTeachers
                    </Button>
                    <Tabs>
                        <TabItem title="Tab 1"></TabItem>
                        <TabItem title="Tab 2"></TabItem>
                    </Tabs>
                    <Button variant="contained" onClick={signOut}>Sign out</Button>
                </Flex>
                <Card
                    columnStart="1"
                    columnEnd="-1"
                    backgroundColor={tokens.colors.blue[10]}
                >
                    Main
                </Card>
                <Card
                    columnStart="1"
                    columnEnd="-1"
                    backgroundColor={tokens.colors.blue[40]}
                >
                    Footer
                </Card>
            </Grid>
        </View>
    );
}

export default withAuthenticator(ChooseAppPageLayout);