import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'
import './Home.css'

const Home = ({socket}) => {
    const [username, setUsername] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        socket.emit('newUser', {username, socketId: socket.id})
        localStorage.setItem('username', username)
       
        navigate('/chat')
    }
  return (
    <form className="home" onSubmit={handleSubmit}>
        <h3 className="home_header">Sign In To Chat</h3>
        <label htmlFor="username">Username</label>
        <input className="username_input" type="text" name="username" id="username" minLength={6} value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
        <button type="submit" className="home_cta">Sign In</button>
    </form>
  )
}

export default Home