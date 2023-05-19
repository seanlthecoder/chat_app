
import './App.css';
//calling io to establish a connection
import io from 'socket.io-client'

import { useState } from "react";

// connecting the front end to the back end
const socket = io.connect("http://localhost:3000");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    // username is not empty and if room is not empty
    if (username !=="" && room !=="") {
      // this will recieve the function as data from the index.js file in order to join the room
      socket.emit("join_room", room);
  }
};


  return <div className="App">
    
    <h3> Join A Chat </h3>
    
    <input type="text" placeholder="Sean...." onChange={(event) => {setUsername(event.target.value); // target.value is accessing the value of the input field
    }} 
    />
    <input type="text" placeholder="Room ID...." onChange={(event) => {setRoom(event.target.value);
    }}
       />
    <button onClick={joinRoom}>Join A Room</button>
  
    </div>
  
}

export default App;
