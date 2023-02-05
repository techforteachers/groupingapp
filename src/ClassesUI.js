import React from "react";
import { Grid } from "@aws-amplify/ui-react";
import { Button, Flex } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import TreeItem from '@mui/lab/TreeItem';
export function ClassesUI (props){
    const [selectedClass, setSelectedClass] = useState();
    const [classButtons, setClassButtons] = useState([]);

    function addClass () {
        props.setCurrentView("classDetailUI");
    }

    useEffect(() => {
        updateClassButtons();
    }, [props])

    function selectClass(e){
        setSelectedClass(e.currentTarget.id)
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
        let index = findIndex(selectedClass)
        if(index == -1){
            console.log("Class not found: " + selectedClass)
        }
        else{
            let newClasses = props.classes.slice();
            if (index > -1){
                newClasses.splice(index, 1);
            }
            else{
                console.log("Class not found")
            }
            props.setClasses(newClasses);
            updateClassButtons();
        }
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
                <Button>Edit</Button>
                <Button onClick={removeClass}>Remove</Button>
                <Button>Generate Groups</Button>
            </Flex>
        </div>
        
    );
}