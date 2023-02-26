import React from "react"
import TreeView from '@mui/lab/TreeView';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Button from '@mui/material/Button';
import { Tabs, TabItem, Grid, Card, useTheme, View, Heading, Text, Authenticator, Flex } from '@aws-amplify/ui-react';
import {NavBar, SideBar} from "../ui-components";


export const HomePageLayout = () => {
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
        </Flex>
        <Flex
          columnStart="1"
          columnEnd="2"
          backgroundColor={tokens.colors.blue[20]}
        >
          <TreeView
            aria-label="multi-select"
            //defaultCollapseIcon={<ExpandMoreIcon />}
            //defaultExpandIcon={<ChevronRightIcon />}
            multiSelect
            sx={{ height: 216, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
          >
            <TreeItem nodeId="1" label="Classes">
              <TreeItem nodeId="2" label="ELA1" />
              <TreeItem nodeId="3" label="ELA2" />
              <TreeItem nodeId="4" label="ELA3">
                <TreeItem nodeId="5" label="Groups1"/>
                <TreeItem nodeId="6" label="Groups2"/>
              </TreeItem>
            </TreeItem>
          </TreeView>
        </Flex>
        
          
        <Card
          columnStart="2"
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
};