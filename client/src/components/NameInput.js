import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: 200,
    },
  },
  moiButton: {
    marginRight: 10,
  },
  moiTextField: {
    marginTop: 80,
  },
}))

export default function NameInput(props) {
  const classes = useStyles()
  const defaultFieldValue = 'Enter your Twitter name'
  const [name, setName] = React.useState(defaultFieldValue)

  // Process a request to cancel the 
  const handleCancel = (event) => {
    setName(defaultFieldValue)
  }
  
  const handleGetTweets = (event) => {
    console.log("You want to get your tweets?")
  }
  
  // Clear the Twitter screen name field when it comes into focus
  const clickInTwitterName = (event) => {
    setName('')
  }

  // Update the Twitter screen name when the user types into it
  const changeInTwitterName = (event) => {
    setName(event.target.value)
  }

  const keydownInTwitterName = (event) => {
      // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
      if (event.key === 'Enter') {
        event.preventDefault()
        event.stopPropagation()
        console.log('Enter was pressed')
        // Invoke callback from props;
      }
  }

  return (
    <form className={ classes.root } noValidate autoComplete="off">
      <div className={ classes.moiTextField }>
        <TextField
          required
          id="filled-required"
          label="Required"
          variant="filled"
          value={ name }
          onKeyDown={ keydownInTwitterName }
          onClick={ clickInTwitterName }
          onChange={ changeInTwitterName }
        />
      </div>
      <div>
        <Button className={ classes.moiButton } variant="contained" size="medium"
          onClick={ handleCancel }>
          Cancel
        </Button>
        <Button className={ classes.root } variant="contained" size="medium"color="primary"
          onClick={ handleGetTweets }>
          Get Tweets
        </Button>
      </div>
    </form>
  );
}