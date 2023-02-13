import React from "react";
import { Grid } from "@aws-amplify/ui-react";
import { Button, Flex } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import TreeItem from '@mui/lab/TreeItem';
export function ClassesUI (props){
    const [classButtons, setClassButtons] = useState([]);
    
    function addClass () {
        props.setCurrentView("createClassUI");
    }

    useEffect(() => {
        updateClassButtons();
    }, [props])

    function selectClass(e){
        props.setSelectedClass(e.currentTarget.id)
        if(e){
            console.log(e.currentTarget.id);
        }
        else{
            console.log("e does not exist")
        }
    }

    function updateClassButtons(){
        const listItems = props.classes.map(
            (element) => {
                return (
                    <Button id={element.classname} onClick={selectClass}>{element.classname}</Button>
                )
            }
        ) 
        setClassButtons(listItems);
    }
        
    function findIndex(className){
        for(let i=0; i<props.classes.length; i++){
            if(props.classes[i].classname == className){
                return i;
            }
        }
        return -1;
    }

    function removeClass(){
        let index = findIndex(props.selectedClass)
        if(index == -1){
            console.log("Class not found: " + props.selectedClass)
        }
        else{
            let newClasses = props.classes.slice();
            newClasses.splice(index, 1);
            props.setClasses(newClasses);
            updateClassButtons();
        }
    }

    function editClass(){
        props.setCurrentView("editClassUI");
    }

    return(
        <div>
            <Grid
                columnGap="1rem"
                rowGap="1rem"
                templateColumns="1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
                templateRows="1fr 1fr 1fr 1fr 1fr"
            >
                {classButtons}
                <Button id="createClassButton" onClick={addClass}>+</Button>
            </Grid>
            <Flex justifyContent="flex-end" alignItems="flex-end">
                <Button onClick={editClass}>Edit</Button>
                <Button onClick={removeClass}>Remove</Button>
                <Button>Generate Groups</Button>
            </Flex>
        </div>
        
    );
}