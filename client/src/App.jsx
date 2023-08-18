import './App.css';
import io from 'socket.io-client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Chat from './components/Chat';

const socket = io.connect('https://fly-chat-zwoq.onrender.com')

function App() {
  
  

  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home socket={socket}/>}></Route>
        <Route path='/chat' element={<Chat socket={socket}/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
