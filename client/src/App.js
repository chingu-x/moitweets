import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet"
import './App.css'
import Copyright from './components/Copyright'
import InputArea from './containers/InputArea'
import OutputArea from './containers/OutputArea'
import TopBar from './containers/TopBar'

const App = () => {
  const [screenName, setScreenName] = useState('')
  const [tweetsJSON, setTweetsJSON] = useState()
  const [isDataLoaded, setIsDataLoaded] = useState(false)                                                     // second, we initialize a variable by useRef

  const updateScreenName = async (screenName) => {
    setScreenName(screenName)
  }

  function getTweets(screenName) {
    return new Promise(resolve => {
      const serverURL = 'http://localhost:3001/gettweets/'+screenName
      console.log(`serverURL: ${serverURL}`)
      fetch(serverURL)
        .then(response => response.json())
        .then(jsonBody => { 
          console.log(jsonBody);
          resolve(jsonBody) 
        })
    })
  }

  useEffect(() => {
    getTweets(screenName).then(setTweetsJSON)
    setIsDataLoaded(true)
  },[screenName])

  return (
    <div className="App">
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>
      <TopBar />

      <main>
        <InputArea updateScreenName={ updateScreenName } />
        { isDataLoaded ? 
            (<OutputArea screenName={ screenName } tweets={ tweetsJSON } />)
            :
            (' ')
        }
      </main>

      <footer>
        <Copyright />
      </footer>
    </div>
  );
}

export default App;
