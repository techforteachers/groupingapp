import React from "react"
import TreeView from '@mui/lab/TreeView';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import { Grid, Card, useTheme, View, Heading, Text, Authenticator } from '@aws-amplify/ui-react';
import {NavBar, SideBar} from "./ui-components";


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
        <NavBar
          columnStart="1"
          columnEnd="-1"
          backgroundColor={tokens.colors.blue[40]}
        >
        </NavBar>
        <TreeView
          columnStart="1"
          columnEnd="2"
          backgroundColor={tokens.colors.blue[20]}
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