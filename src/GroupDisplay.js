import { Card, Flex, Text, Divider, View, Button, Loader } from "@aws-amplify/ui-react";
import React from "react";
import { useEffect, useState } from "react";
import { API, Auth } from "aws-amplify";
export function GroupDisplayUI(props){
    const [groups, setGroups] = useState([]);
    const [groupedStudents, setGroupedStudents] = useState(props.groupedStudents);

    useEffect(() => {
        updateGroups();
    }, [groupedStudents]);

    function updateGroups(){
        let tempGroups = [];
        for(let i = 0; i<groupedStudents.length; i++){
            let tempStudents = [];
            let currentGroupNum = i+1;
            for(let j=0; j<groupedStudents[i].length; j++){
                
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
                        {groupedStudents[i][j].first_name + " " + groupedStudents[i][j].last_name }
                    </Text>
                );
            }
            tempGroups.push(
                <Flex border="2px SOLID rgba(2,31,60,1)" width = "20rem" direction="column" padding="1rem">
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
                        Group {+ currentGroupNum}
                    </Text>
                    <Divider/>
                    {tempStudents}
                </Flex>
            );
        }
        setGroups(tempGroups);
    }

    async function regenerateGroups(){
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
              numGroups: numGroups,
              students: props.studentsTBG
            }
        }
        const data = await API.post('tftGenerateGroupsAPI', '/students', requestData)
        setGroupedStudents(data);
        console.log(data);
        props.setLoader();
      }

    return(
        <div>
            <Flex wrap="wrap" paddingTop="1rem" paddingBottom="1rem">
                {groups}
            </Flex>
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
        </div>
        
    );
}