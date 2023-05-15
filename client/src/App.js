
import './App.css';
//calling io to establish a connection
import io from 'socket.io-client'

// connecting the front end to the back end
const socket = io.connect("http://localhost:3001");

function App() {
  return <div className="App">hello sean </div>
  
}

export default App;
