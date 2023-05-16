
import './App.css';
//calling io to establish a connection
import io from 'socket.io-client'

// connecting the front end to the back end
const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {

  }



  return <div className="App">
    
    <h3> Join A Chat </h3>
    <input type="text" placeholder="Sean...." onChange={(event) => {setUsername(event.target.value);
    }} 
    />
    <input type="text" placeholder="Room ID...." onChange={(event) => {setRoom(event.target.value);
    }}
       />
    <button>Join A Room</button>
  
    </div>
  
}

export default App;
