import './App.css';
import io from 'socket.io-client'
import {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Chat from './components/Chat';

const socket = io.connect('http://localhost:3001')

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
