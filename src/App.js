import logo from './logo.svg';
import './App.css';
import {Button} from '@mui/joy';
import analytics from './configuration';
import { logEvent } from "firebase/analytics";
import { useEffect } from 'react';
import ReactGa from 'react-ga4'


function App() {
  useEffect(() => {
    console.log("ya hallo")
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={
          () => {
            console.log("this happened");
            console.log(analytics.app.name);
            ReactGa.event({
              "action": "click_button",
              "category": "click_button"
            })
            logEvent(
              analytics,
              "click_button",
              {
                button_name: "react_button"
              }
            )
          }
        } variant="solid">Hallo gais</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
