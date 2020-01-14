import React from 'react';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Tweets from '../components/Tweets';

export default function OutputArea() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box my={4}>
          <Tweets />
        </Box>
      </Container>
    </React.Fragment>
  );
}