import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Flex, View } from '@aws-amplify/ui-react';
import { Help } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Text } from '@aws-amplify/ui-react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export  function HelpPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
    >
      <IconButton onClick={handleOpen}>
        <Help/>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Text id="modal-modal-title" fontWeight={700} fontSize="1.5rem">
            Steps to use the app: 
          </Text>
          <div id="modal-modal-description">
            <Text>
              1. Create an account or log in <br/>
            </Text>
            <Text>
              2. Click the "+" button to create a class <br/>
            </Text>
            <Text marginLeft="2rem">
              a. Specify the class name <br/>
            </Text>
            <Text marginLeft="2rem">
              b. Add students <br/>
            </Text>
            <Text marginLeft="4rem">
              i. Add individual students with specific attributes <br/>
            </Text>
            <Text marginLeft="4rem">
              ii. Add students by importing a .csv file <br/>
            </Text>
            <Text marginLeft="2rem">
              c. Click "Create Class" to save all changes <br/>
            </Text>
            <Text >
              3. To edit or delete a class, select the class and click "edit" or "remove" <br/>
            </Text>
            <Text >
              4. Generate a group <br/>
            </Text>
            <Text marginLeft="2rem">
              a. Select a class and click "Generate Groups" <br/>
            </Text>
            <Text marginLeft="2rem">
              b. Select students to be grouped <br/>
            </Text>
            <Text marginLeft="2rem">
              c. Select grouping algorithm <br/>
            </Text>
            <Text marginLeft="4rem">
              i. Regular Grouping: randomly group the selected students into specified number of groups <br/>
            </Text>
            <Text marginLeft="4rem">
              ii. Station grouping: group students into a specified number of stations with rotations. Each rotation maximizes randomness while ensuring that each student visits each station. Each student should work with different people at each station.  <br/>
            </Text>
            <Text marginLeft="2rem">
              d. Click "Generate" <br/>
            </Text>
          </div>
        </Box>
      </Modal>
    </Flex>
  );
}