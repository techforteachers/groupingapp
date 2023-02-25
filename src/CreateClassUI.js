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
import { API } from "aws-amplify";
import { createStudent } from "./graphql/mutations";
import { listStudents } from "./graphql/queries";
import { deleteStudent } from "./graphql/mutations";
export function CreateClassUI(props){
    const [localStudents, setLocalStudents] = useState([]);
    const [localClassName, setLocalClassName] = useState();

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

    function handleCreateClass(){
        const data = {
            classname : localClassName,
            students: localStudents,
        }
        props.createClass(data);
    }

    function handleChangeClassName(e){
        setLocalClassName(e.currentTarget.value);
    }

    function addLocalStudent(data){
        let students = localStudents.slice();
        students.push(data);
        setLocalStudents(students);
    }

    function addMultipleLocalStudents(students){
        let currentStudents = localStudents.slice();
        for(let i=0; i<students.length; i++){
            currentStudents.push(students[i]);
        }
        setLocalStudents(currentStudents);
    }

    function deleteLocalStudent(id){
        let students = localStudents.slice();
        let index = findIndex(id);
        students.splice(index, 1);
        setLocalStudents(students);
    }

    function findIndex(id){
        for(let i=0; i<localStudents.length; i++){
            if(localStudents[i].id == id){
                return i;
            }
        }
        return -1;
    }
    
    async function handleOnFileUpload(event){
        const uploadedFile = event.target.files[0];
        let students = [];
        let startId = localStudents.length;
        if(!uploadedFile){
            console.log(uploadedFile + " is null")
            return;
        }

        let reader = new FileReader();
        reader.onload = async function (e) {
            const contents = e.target.result;
            const contentArr = splitContents(contents);
            for (let i=0; i<contentArr.length; i++){
                const cont = contentArr[i];
                const data = {
                    first_name: cont["First Name"],
                    last_name: cont["Last Name"],
                    grade: cont["Grade"],
                    id: startId+i
                };
                console.log(data.first_name);
                console.log(data.last_name);
                console.log(data.grade);
                students.push(data);
            }
            addMultipleLocalStudents(students);
            
            return contentArr;
        }
        reader.readAsText(uploadedFile);
    }

    function splitContents(str, delimiter = ",") {
    // slice from start of text to the first \n index
    // strip away line breaker like \r or \n
    // use split to create an array from string by delimiter
    let headers = str.slice(0, str.indexOf("\n"));
    headers = headers.replace(/(\r\n|\n|\r)/gm, '');
    headers = headers.split(delimiter);

    // slice from \n index + 1 to the end of the text
    // use split to create an array of each csv value row
    let rows = str.slice(str.indexOf("\n") + 1).split("\n");

    // Map the rows
    // split values from each row into an array, strip away remaining line breaker
    // use headers.reduce to create an object
    // object properties derived from headers:values
    // the object passed as an element of the array
    const arr = rows.map(function (row) {
        row = row.replace(/(\r\n|\n|\r)/gm, '');
        const values = row.split(delimiter);
        const el = headers.reduce(function (object, header, index) {
        object[header] = values[index];
        return object;
        }, {});
        return el;
    });

    // return the array
    return arr;
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
                <Flex direction="row" justifyContent="start" alignItems="flex-end">
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
                    height={45}
                    width={55}
                    size="medium"
                    border="2px SOLID rgba(2,31,60,1)"
                    borderRadius="7px"
                    >
                        <Text
                        textAlign="center"
                        display="block"
                        direction="column"
                        children="Add"
                        ></Text>
                    </Button>
                </Flex>
            </View>
            <TextField type="file" name="student_roster" label="Upload a list of students" onInput={handleOnFileUpload}/>
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
                onClick={handleCreateClass}
                >
                    <Text
                    textAlign="center"
                    display="block"
                    direction="column"
                    children="Create Class"
                    ></Text>
            </Button>
        </div>
    );
}