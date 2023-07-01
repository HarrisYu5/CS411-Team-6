import React, { useState } from 'react';
import './App.css';

function App() {
  const [backendData, setBackendData] = useState('Waiting for response');
  const [message1, setMessage1] = useState('');
  const [message2, setMessage2] = useState('');

  const sendMessage = () => {
    const requestData = {
      message1: message1,
      message2: message2
    };

    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestData)
    })
      .then(response => response.json())
      .then(data => {
        setBackendData(data.responseMessage);
      })
      .catch(error => {
        console.error('Error sending messages:', error);
        setBackendData('Error sending messages');
      });
  };

  return (
    <body>
      <main>
        <div style = {{backgroundColor: "black"}}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            fontFamily: "Trebuchet MS",
            color: "white"
          }}>
            <h1>Welcome to Crash Course!</h1>
          </div>
          <div class="master-div-style">
          <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          margin: "1vw"
          }}>
            <p>Crash Course will provide a self-learning outline with resources on any topic of your choice!</p>
          </div>
          <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          marginLeft: "20vw",
          marginRight: "20vw",
          }}>
            <input class="form__input" placeholder="Topic" required="" type="text" value={message1} onChange={e => setMessage1(e.target.value)} />
          </div>
          
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            marginLeft: "20vw",
            marginRight: "20vw",
            marginTop: "1vw"
          }}>
            <input class="form__input" placeholder="# of weeks" required="" type="text" value={message2} onChange={e => setMessage2(e.target.value)} />
          </div>
          <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          margin: "1vw"
          }}>
            <button class = "button-1"onClick={sendMessage}>ENTER</button>
          </div>
          <div style={{
          display: "flex",
          alignItems: "left",
          justifyContent: "left",
          height: "100%",
          margin: "1vw"
          }}>
            <p style={{ whiteSpace: 'pre-line' }}>{backendData}</p>
          </div>
          </div>
        </div>
      </main>
    </body>
  );
}

export default App;