import React, { useEffect, useState } from 'react';
import { Button, Flex, Text } from '@aws-amplify/ui-react';
import { Auth, API } from 'aws-amplify';
//const data = require("./testData");


const GroupDisplay = (props) => {
  //format inputData array into json
  var selectedStudents = props.studentsTBG;
  const [groupedStudents, setGroupedStudents] = useState(props.inputData)
  
  if(groupedStudents.length == 0){
    return(
      <p>data not available</p>
    );
  }
  let dataDict = {};
  for(let i = 0; i < groupedStudents.length; i++){
    let groupNumInt = i+1;
    let groupNumString = groupNumInt.toString();
    let header = "Group " + groupNumString; 
    dataDict[header] = groupedStudents[i];
  }
  let data = [dataDict];

  function renderHeaderCells() {
    let headerCells = [];
    headerCells.push(<th> {"Rotation/Group"} </th>);
    for (let n in Object.keys(data[0])){
      headerCells.push(<th>{Object.keys(data[0])[n]}</th>);
    }
    return headerCells;
  }

  function renderResults(){
    let cells = [];
    for (let rotation in data){
      cells.push(<th> {rotation} </th>)
      let results = [];
      for (let i in data[rotation]){
        let currentGroup = data[rotation][i];
        let studentNames = "";
        for(let j=0; j<currentGroup.length; j++){
          studentNames += currentGroup[j].first_name + " " + currentGroup[j].last_name + ", ";
        }
        results.push(<td>{studentNames}</td>)
        //results.push(<td>{data[rotation][i].join(", ")}</td>)
      }
      cells.push(results)
      cells.push(<tr></tr>)
    }
    return cells
  }

  async function regenerateGroups(){
    const user = await Auth.currentAuthenticatedUser()
    const token = user.signInUserSession.idToken.jwtToken
    const numGroups = props.numGroups
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
    setGroupedStudents(data);
    console.log(data);
  }

  return (
    <Flex
    direction="column"
    alignItems="center"
    justifyContent="center"
    >
      <React.Fragment>
        <br></br><br></br>
        <h1>Groups</h1>
        <br/>
        <table class="center">
          <thead>
            <tr>{renderHeaderCells()}</tr>
          </thead>
          <tr></tr><tr></tr>
          <tbody>
            {renderResults()}
          </tbody>
        </table>
        <br></br><br></br><br></br>
      </React.Fragment>
      <Button
        size="medium"
        border="2px SOLID rgba(2,31,60,1)"
        borderRadius="7px"
        onClick={regenerateGroups}
        >
          <Text
          textAlign="center"
          display="block"
          direction="column"
          children="Regenerate Groups"
          ></Text>
      </Button>
    </Flex>
  );
};

export default GroupDisplay;
