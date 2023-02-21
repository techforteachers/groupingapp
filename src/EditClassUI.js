import {
    Button,
    Flex,
    Heading,
    StepperField,
    Text,
    TextField,
    View,
    Divider,
    withAuthenticator,
    useAuthenticator
  } from "@aws-amplify/ui-react";
import React from "react";
import { useEffect, useState} from "react";
import { getClass } from "./graphql/queries";
import { createStudent } from "./graphql/mutations";
import { listStudents } from "./graphql/queries";
import { deleteStudent } from "./graphql/mutations";
import { API } from "aws-amplify";
export function EditClassUI(props){
    const [localStudents, setLocalStudents] = useState([]);
    const [localClassName, setLocalClassName] = useState();
    useEffect(() => {
        //setLocalClassName(props.classes[index].className)
        updateLocalStudents();
    }, [props]);

    async function handleCreateStudent(e){
        e.preventDefault();
        const form = new FormData(e.target);
        const data = {
          first_name: form.get("First Name"),
          last_name: form.get("Last Name"),
          grade: form.get("Grade")
        };
        console.log(data.first_name);
        console.log(data.last_name);
        console.log(data.grade);

        await API.graphql({
            query: createStudent,
            variables: {input : data},
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        })
        updateLocalStudents();
        e.target.reset();
    }

    async function handleDeleteStudent(student){
        let id = student.id;
        await API.graphql({
            query: deleteStudent,
            variables: {input: {id}}
        })
        updateLocalStudents();
    }

    function handleEditClass(){
        const data = {
            classname : localClassName,
            students: localStudents,
            id: props.selectedClass
        }
        props.editClass(data);
    }

    function handleChangeClassName(e){
        setLocalClassName(e.currentTarget.value);
    }

    async function updateLocalStudents(){
        let students = await API.graphql({
            query:listStudents,
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        })
        setLocalStudents(students.data.listStudents.items);
    }

    return(
        <div>
            <TextField
                label="Name:"
                name="Class Name"
                onChange={handleChangeClassName}
                placeholder={localClassName}
            />
            <View as="form" onSubmit={handleCreateStudent}>
                <Flex direction="row" justifyContent="start">
                    <TextField
                        name="First Name"
                        placeholder="John"
                        label="First Name"
                        variation="quiet"
                        required
                    />
                    <TextField
                        name="Last Name"
                        placeholder="Doe"
                        label="Last Name"
                        variation="quiet"
                        required
                    />
                    <StepperField
                        max={12}
                        min={1}
                        step={1}
                        label="Grade"
                        name="Grade"
                    />
                    <Button
                    type="submit"
                    size="medium"
                    border="2px SOLID rgba(2,31,60,1)"
                    borderRadius="7px"
                    >
                        <Text
                        textAlign="center"
                        display="block"
                        direction="column"
                        children="Create Student"
                        ></Text>
                    </Button>
                </Flex>
            </View>
            <View margin="3rem 0">
                {localStudents.map((student) => (
                <Flex
                    key={student.id || student.last_name}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text as="strong" fontWeight={700}>
                    {student.first_name}
                    </Text>
                    <Text as="strong" fontWeight={700}>
                    {student.last_name}
                    </Text>
                    <Text as="span">{student.grade}</Text>
                    <Button variation="link" onClick={() => handleDeleteStudent(student)}>
                    Delete student
                    </Button>
                </Flex>
                ))}
            </View>
            <Button
                size="medium"
                border="2px SOLID rgba(2,31,60,1)"
                borderRadius="7px"
                onClick={handleEditClass}
                >
                    <Text
                    textAlign="center"
                    display="block"
                    direction="column"
                    children="Save"
                    ></Text>
            </Button>
        </div>
    );
}