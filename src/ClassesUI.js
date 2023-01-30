import React from "react";
import { Grid } from "@aws-amplify/ui-react";
import { Button, Flex } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
export function ClassesUI (props){
    const [selectedClass, setSelectedClass] = useState();
    const [classes, setClasses] = useState([]);
    const [classButtons, setClassButtons] = useState([]);

    function addClass () {
        let newClasses = classes.slice();
        newClasses.push("test");
        setClasses(newClasses);
    }

    useEffect(() => {
        updateClassButtons();
    }, [classes])

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
        const listItems = classes.map(
            (element) => {
                return (
                    <Button id={element} onClick={selectClass}>{element}</Button>
                )
            }
        ) 
        setClassButtons(listItems);
    }
        
    function removeClass(){
        let index = classes.indexOf(selectedClass);
        let newClasses = classes.slice();
        if (index > -1){
            newClasses.splice(index, 1);
        }
        else{
            console.log("Class not found")
        }
        setClasses(newClasses);
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