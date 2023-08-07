import './App.css';
import io from 'socket.io-client'
import {useState} from 'react'
import Chat from './Chat'

const socket = io.connect('http://localhost:3001')

function App() {
  const [username, setUsername] = useState("")
  const [roomID, setRoomID] = useState("")

  const joinRoom = () => {
    if (username !== "" && roomID !== ""){
      socket.emit('join_room', roomID)
    }
  }
  return (
    <div className="App">
     <h3>Join Chat</h3>
     <input type="text" placeholder="username..." onChange={(event)=>{setUsername(event.target.value)}}></input>
     <input type="text" placeholder="roomID..." onChange={(event)=>{setRoomID(event.target.value)}}></input>

     <button onClick={joinRoom}>Join</button>

     <Chat socket={socket} username={username} roomID={roomID}/>
    </div>

  );
}

export default App;
