import logo from './logo.svg';
import './App.css';
import {Button} from '@mui/joy';
import analytics from './configuration';
import { useEffect } from 'react';

const payload = {"client_id":"GA1.1.1893775379.1730791804","non_personalized_ads":false,"events":[{"name":"testing_event_via_url","params":{"items":[],"button_name":"testing_lagi"}}]}
const measurementId = "G-CYLMJ0XRLL";
const apiSecret = "ZUZq21-cQ-GWbJ37ptrpSQ"

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
            if (typeof window.gtag == "function") {
              window.gtag('event', 'screen_view', {
                'app_name': 'myAppName',
                'screen_name': 'Home'
              });
            }
            // fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`, {
            //   method: "POST",
            //   body: JSON.stringify(payload)
            // }).then(response => response.json())
            // .then(data => {
            //   console.log(data)
            // })
            // logEvent(
            //   analytics,
            //   "click_button",
            //   {
            //     button_name: "react_button"
            //   }
            // )
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
