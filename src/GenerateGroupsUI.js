import React from "react";
import { Text } from "react-ui";
import { Button } from "@aws-amplify/ui-react";
import { StepperField } from "@aws-amplify/ui-react";
import { Grid, Card, Flex } from "@aws-amplify/ui-react";
import { DataGrid } from '@mui/x-data-grid';
import { API } from "aws-amplify";
import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { classStudentsByClassId, listClassStudents, listStudents } from "./graphql/queries";
import { Loader } from "@aws-amplify/ui-react";
import "./button.css"
export function GenerateGroupsUI (props){
    const [students, setStudents] = useState([]);
    const [selectedStudents, setSelectedStudents] = useState([]);
    const [generateMethod, setGenerateMethod] = useState("groups");
    const [generateConfig, setGenerateConfig] = useState([]);
    const background = "F6F8FF";
    useEffect(() => {
        fetchStudents(); 
      }, []);

    const columns = [
        { field: 'first_name', headerName: 'First name', width: 130 },
        { field: 'last_name', headerName: 'Last name', width: 130 },
        { field: 'grade', headerName: 'Grade', width: 70 }
    ];

    async function fetchStudents(){
        let response = await API.graphql({
            query: classStudentsByClassId,
            variables: {classId: props.selectedClass },
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
        /*let totalStudents = response.data.listClassStudents.items
        let students = []; 
        for(let i=0; i<totalStudents.length; i++){
            let currentStudent = totalStudents[i];
            if(currentStudent.classId == props.selectedClass){
                students.push(currentStudent.student);
            }
        }*/
        let classStudents = response.data.classStudentsByClassId.items; 
        let students = [];
        for(let i=0; i<classStudents.length; i++){
            students.push(classStudents[i].student);
        }
        
        setStudents(students);
        setGenerateConfig(
            <StepperField
                max={students.length}
                min={1}
                step={1}
                label= "Number of Groups:"
                name="Number of Groups"
                id="numGroupsInput"
            />
        );
    }

    function handleSelectChange(e){
        setGenerateMethod(e.target.value);
        if(e.target.value == "groups"){
            setGenerateConfig(
                <StepperField
                    max={students.length}
                    min={1}
                    step={1}
                    label= "Number of Groups:"
                    name="Number of Groups"
                    id="numGroupsInput"
                />
            );
        }
        else if(e.target.value == "stations"){
            setGenerateConfig(
                <StepperField
                    max={students.length}
                    min={1}
                    step={1}
                    label= "Number of Stations:"
                    name="Number of Groups"
                    id="numGroupsInput"
                />
            );
        }
    }

    function generate(){
        if(generateMethod == "groups"){
            generateGroups();
        }
        else if(generateMethod == "stations"){
            generateStations();
        }
    }

    async function generateStations(){
        if(selectedStudents != 0){
            document.getElementById("errorText").innerText = "";
            props.setLoader(<Loader variation="linear" size="small" />);
            const user = await Auth.currentAuthenticatedUser()
            const token = user.signInUserSession.idToken.jwtToken
            const numGroups = document.getElementById("numGroupsInput").value
            console.log("token: ", token)
        
            const requestData = {
                headers: {                 
                    Authorization: token,
                },
                body: {
                  numStations: numGroups,
                  students: selectedStudents
                }
            }
            const data = await API.post('tftGenerateStationGroupsAPI', '/students', requestData)
            props.setGroupedStudents(data);
            props.setNumGroups(numGroups);
            props.setStudentsTBG(selectedStudents);
            props.setCurrentView("stationDisplayUI");
            console.log(data);
            props.setLoader();
        }
        else{
            document.getElementById("errorText").innerText = "*Please select at least one student*";
        }
    }

    async function generateGroups(){
        if(selectedStudents != 0){
            props.setLoader(<Loader variation="linear" size="small" />);
            document.getElementById("errorText").innerText = "";
            const user = await Auth.currentAuthenticatedUser()
            const token = user.signInUserSession.idToken.jwtToken
            const numGroups = document.getElementById("numGroupsInput").value
            console.log("token: ", token)
        
            const requestData = {
                headers: {                 
                    Authorization: token,
                },
                body: {
                  numGroups: numGroups,
                  students: selectedStudents
                }
            }
            const data = await API.post('tftGenerateGroupsAPI', '/students', requestData)
            props.setGroupedStudents(data);
            props.setNumGroups(numGroups);
            props.setStudentsTBG(selectedStudents);
            props.setCurrentView("groupDisplayUI");
            console.log(data);
            props.setLoader();
        }
        else{
            document.getElementById("errorText").innerText = "*Please select at least one student*";
        }
    }

    const rows = students;

    return(
        <Grid
        templateRows="1fr 0.1fr"
        rowGap="1rem"
        backgroundColor={background}
        >
            <Card
            rowStart={1}
            rowEnd={2}
            backgroundColor={background}
            >
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        rowsPerPageOptions={[100]}
                        checkboxSelection
                        onSelectionModelChange={(ids) => {
                            const selectedIds = new Set(ids);
                            const selectedRowData = rows.filter((row) => 
                                selectedIds.has(row.id.toString())
                            );
                            setSelectedStudents(selectedRowData);
                        }}
                    />
                </div>
            </Card>
            <Flex
            rowStart={2} 
            rowEnd={-1}
            direction="column"
            backgroundColor={background}
            justifyContent="center" 
            alignItems="center"
            >
                <label>
                    Groups or Stations: 
                    <select value={generateMethod} onChange={handleSelectChange}>
                        <option value="groups">Groups</option>
                        <option value="stations">Stations</option>
                    </select>
                </label>
                {generateConfig}
                <Button
                    size="medium"
                    border="2px SOLID rgba(2,31,60,1)"
                    borderRadius="7px"
                    onClick={generate}
                >
                    <Text
                    textAlign="center"
                    display="block"
                    direction="column"
                    children="Generate"
                    ></Text>
                </Button>
                <Text
                    variation="error"
                    fontWeight={600}
                    id='errorText'
                />
            </Flex>
        </Grid>
    );
}