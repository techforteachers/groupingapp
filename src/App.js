import React, { useState, useEffect } from "react";
import { API, Auth, Analytics } from "aws-amplify";
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
import '@aws-amplify/ui-react/styles.css';
import { listStudents } from "./graphql/queries";
import {
  createStudent as createStudentMutation,
  deleteStudent as deleteStudentMutation,
} from "./graphql/mutations";

import GroupDisplay from './Display';
import './Display.css';

function App({ signOut, user }) {
  const [students, setStudents] = useState([]);
  const [groupedStudents, setGroupedStudents] = useState([]);
  const [userName, setUsername] = useState([]);

  useEffect(() => {
    fetchStudents();
    //What is the right place to set the user ID? 
    getUserID();
  }, []);

  async function getUserID(){
    const user = await Auth.currentAuthenticatedUser();
    if (user){
      setUsername(user.username);
    }
    console.log(user.username);
  }

  async function fetchStudents() {
    const apiData = await API.graphql({ query: listStudents });
    const studentsFromAPI = apiData.data.listStudents.items;
    setStudents(studentsFromAPI);
  }

  async function createStudent(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      first_name: form.get("First Name"),
      last_name: form.get("Last Name"),
      grade: form.get("Grade"),
      user:userName
    };
    console.log(data.first_name);
    console.log(data.last_name);
    console.log(data.grade);
    console.log(data.user);
    await API.graphql({
      query: createStudentMutation,
      variables: { input: data },
    });
    fetchStudents();
    event.target.reset();
  }

  async function deleteStudent({ id }) {
    const newStudents = students.filter((student) => student.id !== id);
    setStudents(newStudents);
    await API.graphql({
      query: deleteStudentMutation,
      variables: { input: { id } },
    });
  }

  async function handleOnFileUpload(event){
    const uploadedFile = event.target.files[0];
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
          user:userName
        };
        console.log(data.first_name);
        console.log(data.last_name);
        console.log(data.grade);
        await API.graphql({
          query: createStudentMutation,
          variables: { input: data },
        });
      }

      fetchStudents();


      return contentArr;
    }
    reader.readAsText(uploadedFile);


    /*
    await API.graphql({
      query: createStudentMutation,
      variables: { input: dataArr[0] },
    });
    fetchStudents();
    */
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

  async function generateGroups() {
    const user = await Auth.currentAuthenticatedUser()
    const token = user.signInUserSession.idToken.jwtToken
    const numGroups = document.getElementById("numGroupsInput").value
    console.log("token: ", token)

    const requestData = {
        headers: {                 
            Authorization: token,
        },
        body: {
          numGroups: numGroups
        }
    }
    const data = await API.post('tftGenerateGroupAPI', '/groups', requestData)
    setGroupedStudents(data);
    console.log("Hello, group generator has not been implemented!")
    console.log(data);
  }

  return (
    <View className="App">
    <Heading level={1}>Random Grouping App</Heading>
      <Divider
        orientation="horizontal" />
      <View as="form" margin="3rem 0" onSubmit={createStudent}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="First Name"
            placeholder="John"
            label="First Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="Last Name"
            placeholder="Smith"
            label="Last Name"
            labelHidden
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
      <TextField type="file" name="student_roster" label="Upload a list of students" onInput={handleOnFileUpload}/>
      <Heading level={2}>Current Students</Heading>
      <View margin="3rem 0">
        {students.map((student) => (
          <Flex
            key={student.id || student.name}
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
            <Button variation="link" onClick={() => deleteStudent(student)}>
              Delete student
            </Button>
          </Flex>
        ))}
      </View>
      <Divider
        orientation="horizontal" />
      
      <View margin="3rem 0">
        <Flex
        direction="row"
        justifyContent="center"
        alignItems="center">
          <StepperField
            max={5}
            min={1}
            step={1}
            label="Number of Groups"
            name="Number of Groups"
            id="numGroupsInput"
          />
          <Button onClick={generateGroups}>
            Generate Groups
          </Button>
        </Flex>
      </View>
      <GroupDisplay inputData={groupedStudents}/>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);

