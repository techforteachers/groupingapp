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
    useAuthenticator,
    Loader
  } from "@aws-amplify/ui-react";
import React from "react";
import { useEffect, useState} from "react";
import { StudentTable } from "./StudentTableOne";
import EnhancedTable from "./StudentTable";
export function CreateClassUI(props){
    const [localStudents, setLocalStudents] = useState([]);
    const [localClassName, setLocalClassName] = useState();
    const [editIdx, setEditIdx] = useState(-1);

    function generateUUID() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    function handleCreateStudent(e){
        e.preventDefault();
        const form = new FormData(e.target);
        let id = generateUUID();
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

    //remove local student by selection
    function handleDeleteStudent(toBeDeleted){
        let students = localStudents.slice();
        students = students.filter ( student => ! toBeDeleted.includes ( student.id) ) ;
        setLocalStudents(students);
    }

    function handleCreateClass(){
        if(localClassName != null){
            const data = {
                classname : localClassName,
                students: localStudents,
            }
            props.setLoader(<Loader variation="linear" size="small" />);
            props.createClass(data).then(() => {props.setLoader();});
        }
        else{
            document.getElementById("errorText").innerText = "*Please enter a class name*";
        }
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
    
    async function handleOnFileUpload(event){
        const uploadedFile = event.target.files[0];
        let students = [];
        if(!uploadedFile){
            console.log(uploadedFile + " is null")
            return;
        }
        let reader = new FileReader();
        reader.onload = async function (e) {
            const contents = e.target.result;
            const contentArr = splitContents(contents);
            for (let i=0; i<contentArr.length; i++){
                let id = generateUUID();
                const cont = contentArr[i];
                const data = {
                    first_name: cont["First Name"],
                    last_name: cont["Last Name"],
                    grade: cont["Grade"],
                    id: id  
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
                label="*Name:"
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
            <TextField accept=".csv" type="file" name="student_roster" label="Upload a list of students" onInput={handleOnFileUpload}/>
            <Flex justifyContent="center" alignItems="center" padding={15}>
                <EnhancedTable rows={localStudents} handleDeleteStudent={handleDeleteStudent}/>
            </Flex>
            <Text
                variation="error"
                fontWeight={600}
                id='errorText'
            />
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