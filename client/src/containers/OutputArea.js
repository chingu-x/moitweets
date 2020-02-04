import React from 'react';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles'
import Tweets from '../components/Tweets';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
    },
  },
  moiContainer: {
    marginTop: 0,
    paddingTop: 0,
  },
}))

export default function OutputArea(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={ classes.moiContainer } maxWidth="lg">
        <Box my={ 4 }>
          <Tweets screenName={ props.screenName } tweets={ props.tweets } 
            clearTweetsOutput={ props.clearTweetsOutput } />
        </Box>
      </Container>
    </React.Fragment>
  );
}