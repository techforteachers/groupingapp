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
export function SetClassUI(props){
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
          grade: form.get("Grade")
        };
        console.log(data.firstname);
        console.log(data.lastname);
        console.log(data.grade);

        let newStudents = localStudents.slice();
        newStudents.push(data);
        setLocalStudents(newStudents);
        e.target.reset();
    }

    function handleCreateClass(){
        if(validateClassName(localClassName) == true){
            const data = {
                classname : localClassName,
                students: localStudents
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
            <Button onClick={handleCreateClass}>Create Class</Button>
        </div>
    );
}