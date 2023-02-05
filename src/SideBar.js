import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { useEffect, useState } from "react";
export function SideBar(props){
    const [treeItems, setTreeItems] = useState([]);
    useEffect(() => {
        const listItems = props.classes.map(
            (element) => {
                return (
                    <TreeItem nodeId={element} label={element}/>
                )
            }
        ) 
        setTreeItems(listItems);
    }, [props])

    return(
        <TreeView
            aria-label="multi-select"
            multiSelect
            sx={{ height: 216, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
        >
            <TreeItem nodeId="1" label="Classes">
                {treeItems}
            </TreeItem>
        </TreeView>
    );
}
