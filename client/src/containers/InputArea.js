import React from 'react';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import NameInput from '../components/NameInput';

export default function InputArea() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box my={4}>
          <NameInput />
        </Box>
      </Container>
    </React.Fragment>
  );
}