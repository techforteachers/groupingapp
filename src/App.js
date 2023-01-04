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

function App({ signOut, user }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

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
      grade: form.get("Grade")
    };
    console.log(data.first_name);
    console.log(data.last_name);
    console.log(data.grade);
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
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);