import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { useEffect, useState } from "react";
import { API } from 'aws-amplify';
import { listClasses } from './graphql/queries';
export function SideBar(props){
    const [treeItems, setTreeItems] = useState([]);
    useEffect(() => {
        const getClasses = async () => {
            let response = await API.graphql({
                query: listClasses,
                authMode: 'AMAZON_COGNITO_USER_POOLS'
            });
            let classes = response.data.listClasses.items;
            const listItems = classes.map(
                (element) => {
                    return (
                        <TreeItem nodeId={element.className} label={element.className}/>
                    )
                }
            ) 
            setTreeItems(listItems);
        };

        getClasses().catch(console.error);
    }, [props.updateTree])

    let tree;
    if(props.user != "Guest"){
        tree =
        <TreeItem nodeId="1" label="Classes">
            {treeItems}
        </TreeItem>
    }
    return(
        <TreeView
            aria-label="multi-select"
            multiSelect
            sx={{ height: 216, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
        >
            {tree}
        </TreeView>
    );
}
