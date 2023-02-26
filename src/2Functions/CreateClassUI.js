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
export function CreateClassUI(props){
    const [localStudents, setLocalStudents] = useState([]);
    const [localClassName, setLocalClassName] = useState();

    useEffect(() => {
        console.log(localStudents);
    }, [localStudents]);

    function handleCreateStudent(e){
        e.preventDefault();
        const form = new FormData(e.target);
        const data = {
          firstname: form.get("First Name"),
          lastname: form.get("Last Name"),
          grade: form.get("Grade"),
          id: localStudents.length
        };
        console.log(data.firstname);
        console.log(data.lastname);
        console.log(data.grade);

        let newStudents = localStudents.slice();
        newStudents.push(data);
        setLocalStudents(newStudents);
        e.target.reset();
    }

    function handleDeleteStudent(student){
        let index = findIndex(student.id)
        if(index == -1){
            console.log("Student not found: " + student.firstname + " " + student.lastname);
        }
        else{
            let newStudents = localStudents.slice();
            newStudents.splice(index, 1);
            setLocalStudents(newStudents);
        }
    }

    function handleCreateClass(){
        if(validateClassName(localClassName) == true){
            const data = {
                classname : localClassName,
                students: localStudents,
                id: props.classes.length
            }
            props.createClass(data);
            props.setCurrentView("classPreviewUI");
        }
        else{
            console.log("Class name already exists")
        }

    }

    function handleChangeClassName(e){
        setLocalClassName(e.currentTarget.value);
    }

    function validateClassName(className){
        if(className == null){
            return false;
        }
        else{
            for(let i=0; i<props.classes.length; i++){
                if(props.classes[i].classname == className){
                    return false;
                }
            }
            return true;
        }
        
    }

    function findIndex(id){
        for(let i=0; i<localStudents.length; i++){
            if(localStudents[i].id == id){
                return i;
            }
        }
        return -1;
    }

    return(
        <div>
            <TextField
                label="Name:"
                name="Class Name"
                onChange={handleChangeClassName}
                placeholder="Class Name"
            />
            <View as="form" onSubmit={handleCreateStudent}>
                <Flex direction="row" justifyContent="center">
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
                    <Button type="submit" variation="primary">
                        Create Student
                    </Button>
                </Flex>
            </View>
            <View margin="3rem 0">
                {localStudents.map((student) => (
                <Flex
                    key={student.id || student.lastname}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text as="strong" fontWeight={700}>
                    {student.firstname}
                    </Text>
                    <Text as="strong" fontWeight={700}>
                    {student.lastname}
                    </Text>
                    <Text as="span">{student.grade}</Text>
                    <Button variation="link" onClick={() => handleDeleteStudent(student)}>
                    Delete student
                    </Button>
                </Flex>
                ))}
            </View>
            <Button onClick={handleCreateClass}>Create Class</Button>
        </div>
    );
}