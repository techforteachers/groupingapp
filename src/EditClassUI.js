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
import { getClass, listClassStudents } from "./graphql/queries";
import { createStudent } from "./graphql/mutations";
import { deleteStudent } from "./graphql/mutations";
import { API } from "aws-amplify";
export function EditClassUI(props){
    const [localStudents, setLocalStudents] = useState([]);
    const [localClassStudents, setLocalClassStudents] = useState([]);
    const [deletedClassStudents, setDeletedClassStudents] = useState([]);
    const [addedStudents, setAddedStudents] = useState([]);
    const [deletedStudents, setDeletedStudents] = useState([]);
    const [localClassName, setLocalClassName] = useState();
    useEffect(() => {
        //setLocalClassName(props.classes[index].className)
        updateLocalStudents();
    }, [props]);

    function handleCreateStudent(e){
        e.preventDefault();
        const form = new FormData(e.target);
        let id = localStudents.length;
        const data = {
          first_name: form.get("First Name"),
          last_name: form.get("Last Name"),
          grade: form.get("Grade"),
          id:id
        };
        console.log(data.first_name);
        console.log(data.last_name);
        console.log(data.grade);

        
        addLocalStudent(data);
        e.target.reset();
    }

    async function handleDeleteStudent(student){
        deleteLocalStudent(student.id);
    }

    function handleEditClass(){
        const data = {
            classname : localClassName,
            students: localStudents,
            id: props.selectedClass,
            addedStudents: addedStudents,
            deletedStudents: deletedStudents,
            deletedClassStudents: deletedClassStudents
        }
        props.editClass(data);
    }

    function handleChangeClassName(e){
        setLocalClassName(e.currentTarget.value);
    }

    function addLocalStudent(data){
        let students = localStudents.slice();
        students.push(data);
        setLocalStudents(students);

        let newStudents = addedStudents.slice();
        newStudents.push(data);
        setAddedStudents(newStudents);
    }

    function deleteLocalStudent(id){
        let students = localStudents.slice();
        let index = findStudentIndex(id);
        students.splice(index, 1);
        setLocalStudents(students);

        let removedStudents = deletedStudents.slice();
        removedStudents.push(id);
        setDeletedStudents(removedStudents);

        let removedClassStudents = deletedClassStudents.slice();
        let classStudentId = findClassStudentId(id);
        removedClassStudents.push(classStudentId);
        setDeletedClassStudents(removedClassStudents);
    }

    function findStudentIndex(id){
        for(let i=0; i<localStudents.length; i++){
            if(localStudents[i].id == id){
                return i;
            }
        }
        return -1;
    }

    function findClassStudentId(id){
        for(let i=0; i<localClassStudents.length; i++){
            if(localClassStudents[i].studentId == id){
                return localClassStudents[i].id;
            }
        }
        return -1;
    }

    async function updateLocalStudents(){
        let response = await API.graphql({
            query: listClassStudents,
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
        let totalStudents = response.data.listClassStudents.items
        let students = []; 
        let classStudents = [];
        for(let i=0; i<totalStudents.length; i++){
            let currentStudent = totalStudents[i];
            if(currentStudent.classId == props.selectedClass){
                students.push(currentStudent.student);
                classStudents.push(currentStudent);
            }
        }
        setLocalStudents(students);
        setLocalClassStudents(classStudents);
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