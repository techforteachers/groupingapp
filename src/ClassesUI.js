import React from "react";
import { Grid, Loader } from "@aws-amplify/ui-react";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import TreeItem from '@mui/lab/TreeItem';
import { API } from "aws-amplify";
import { getClass, listClasses, listClassStudents } from "./graphql/queries";
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
        props.setLoader(<Loader variation="linear" size="small" />);
        let classId = props.selectedClass; 
        let response = await API.graphql({
            query: getClass,
            variables: {id: classId},
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        })
        let classStudents = response.data.getClass.students.items;
        for(let i=classStudents.length-1; i>=0; i--){
            let currentStudent = classStudents[i];
            let classStudentId = currentStudent.id; 
            let studentId = currentStudent.studentId;
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
        await API.graphql({
            query: deleteClass,
            variables: { input: { id : classId }},
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
        updateClassButtons();
        props.setUpdateTree(!props.updateTree);
        props.setSelectedClass(null);
        props.setLoader();
    }

    function editClass(){
        props.setCurrentView("editClassUI");
    }

    function generateGroups(){
        if(props.selectedClass != null){
            props.setCurrentView("generateGroupsUI")
            document.getElementById("errorText").innerText = "";
        }
        else{
            document.getElementById("errorText").innerText = "Please select a class";
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
                <Text
                    variation="error"
                    fontWeight={600}
                    id='errorText'
                />
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