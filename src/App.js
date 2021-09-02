import './App.css';
import RTCMesh from 'react-rtc-real'
require('react-rtc-real/assets/index.css');

function App() {
  return (
    <div className="App">
      <div>
      <RTCMesh URL=" wss://a57c-154-0-10-26.ngrok.io" />
      </div>
    </div>
  );
}

export default App;
