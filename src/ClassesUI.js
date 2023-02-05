import React from "react";
import { Grid } from "@aws-amplify/ui-react";
import { Button, Flex } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import TreeItem from '@mui/lab/TreeItem';
export function ClassesUI (props){
    const [selectedClass, setSelectedClass] = useState();
    const [classButtons, setClassButtons] = useState([]);

    function addClass () {
        let newClasses = props.classes.slice();
        let className = "test" + newClasses.length;
        newClasses.push(className);
        props.setClasses(newClasses);
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
                    <Button id={element} onClick={selectClass}>{element}</Button>
                )
            }
        ) 
        setClassButtons(listItems);
    }
        
    function removeClass(){
        let index = props.classes.indexOf(selectedClass);
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