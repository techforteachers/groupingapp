import { Card, Flex, Text, Divider, View, Button, Loader } from "@aws-amplify/ui-react";
import React from "react";
import { useEffect, useState } from "react";
import { API, Auth } from "aws-amplify";
export function StationsDisplayUI(props){
    const [stations, setStations] = useState([]);
    const [groupedStudents, setGroupedStudents] = useState(props.groupedStudents);

    useEffect(() => {
        updateStations();
    }, [groupedStudents]);

    function updateStations(){
        let tempStations = [];
        for(let k=0; k<groupedStudents.length; k++){
            let tempGroups = [];
            let currentStationNum = k+1;
            for(let i = 0; i<groupedStudents[k].length; i++){
                let tempStudents = [];
                let currentGroupNum = i+1;
                for(let j=0; j<groupedStudents[k][i].length; j++){
                    tempStudents.push(
                        <Text 
                            variation="primary"
                            as="span"
                            color="black"
                            lineHeight="1.5em"
                            fontWeight={400}
                            fontSize="1em"
                            fontStyle="normal"
                            textDecoration="none"
                            width="30vw"
                        >
                            {groupedStudents[k][i][j].first_name + " " + groupedStudents[k][i][j].last_name }
                        </Text>
                    );
                }
                tempGroups.push(
                    <Flex border="2px SOLID rgba(2,31,60,1)" width = "15rem" direction="column" padding="1rem">
                        <Text 
                            variation="primary"
                            as="span"
                            color="black"
                            lineHeight="1.5em"
                            fontWeight={700}
                            fontSize="1.2em"
                            fontStyle="normal"
                            textDecoration="none"
                            width="30vw"
                        >
                            Station {+ currentGroupNum}
                        </Text>
                        <Divider/>
                        {tempStudents}
                    </Flex>
                );
            }
            tempStations.push(
                <Flex wrap="wrap" direction="column">
                    <Text 
                        variation="primary"
                        as="span"
                        color="black"
                        lineHeight="1.5em"
                        fontWeight={700}
                        fontSize="1.5rem"
                        fontStyle="normal"
                        textDecoration="none"
                    >
                        Rotation { + " " + currentStationNum}
                    </Text>
                    <Flex wrap="wrap" direction="row" padding="1rem">
                    
                        {tempGroups}
                    </Flex>
                </Flex>
            )
        }
        setStations(tempStations);
    }

    async function regenerateStations(){
        props.setLoader(<Loader variation="linear" size="small" />);
        const user = await Auth.currentAuthenticatedUser()
        const token = user.signInUserSession.idToken.jwtToken
        const numGroups = props.numGroups
        console.log("token: ", token)
    
        const requestData = {
            headers: {                 
                Authorization: token,
            },
            body: {
              numStations: numGroups,
              students: props.studentsTBG
            }
        }
        const data = await API.post('tftGenerateStationGroupsAPI', '/students', requestData)
        setGroupedStudents(data);
        console.log(data);
        props.setLoader();
      }

    return(
        <div>
            <Flex wrap="wrap" paddingTop="1rem" paddingBottom="1rem" >
                {stations}
            </Flex>
            <Button
                size="medium"
                border="2px SOLID rgba(2,31,60,1)"
                borderRadius="7px"
                onClick={regenerateStations}
                >
                <Text
                textAlign="center"
                display="block"
                direction="column"
                children="Regenerate Stations"
                ></Text>
            </Button>
        </div>
        
    );
}