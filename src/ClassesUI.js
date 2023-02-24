import React from "react";
import { Grid } from "@aws-amplify/ui-react";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import TreeItem from '@mui/lab/TreeItem';
import { API } from "aws-amplify";
import { listClasses, listClassStudents } from "./graphql/queries";
import { deleteClass, deleteClassStudent, deleteStudent } from "./graphql/mutations";
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

    async function updateClassButtons(){
        const listItems = await API.graphql({
            query: listClasses,
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
        const buttons = listItems.data.listClasses.items.map(
            (element) => {
                return (
                    <Button id={element.id} onClick={selectClass}>{element.className}</Button>
                )
            }
        ) 
        setClassButtons(buttons);
        
    }
    async function removeClass(){
        let id = props.selectedClass; 
        let response = await API.graphql({
            query: listClassStudents,
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        })
        let classStudents = response.data.listClassStudents.items;
        for(let i=classStudents.length-1; i>=0; i--){
            let currentStudent = classStudents[i];
            let classStudentId = currentStudent.id; 
            let studentId = currentStudent.studentId;
            if(props.selectedClass == currentStudent.classId){
                await API.graphql({
                    query: deleteClassStudent,
                    variables: {input: {id: classStudentId}},
                    authMode: 'AMAZON_COGNITO_USER_POOLS'
                });
                await API.graphql({
                    query: deleteStudent,
                    variables: {input: {id: studentId}},
                    authMode: 'AMAZON_COGNITO_USER_POOLS'
                });
            }
        }
        await API.graphql({
            query: deleteClass,
            variables: { input: { id }},
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
        updateClassButtons();
        props.setUpdateTree(!props.updateTree);
    }

    function editClass(){
        props.setCurrentView("editClassUI");
    }

    function generateGroups(){
        props.setCurrentView("generateGroupsUI")
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
                <Button
                    size="medium"
                    border="2px SOLID rgba(2,31,60,1)"
                    borderRadius="7px"
                    onClick={editClass}
                    >
                        <Text
                        textAlign="center"
                        display="block"
                        direction="column"
                        children="Edit"
                        ></Text>
                </Button>
                <Button
                    size="medium"
                    border="2px SOLID rgba(2,31,60,1)"
                    borderRadius="7px"
                    onClick={removeClass}
                    >
                        <Text
                        textAlign="center"
                        display="block"
                        direction="column"
                        children="Remove"
                        ></Text>
                </Button>
                <Button
                    size="medium"
                    border="2px SOLID rgba(2,31,60,1)"
                    borderRadius="7px"
                    onClick={generateGroups}
                    >
                        <Text
                        textAlign="center"
                        display="block"
                        direction="column"
                        children="Generate Groups"
                        ></Text>
                </Button>
            </Flex>
        </div>
        
    );
}