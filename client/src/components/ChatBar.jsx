import React,{useState, useEffect} from 'react'
import './Chat.css'

const ChatBar = ({socket}) => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    socket.on('newUserResponse', (data)=> setUsers(data))
  }, [socket, users])
  
  return (
    <div className='chat_bar'>
        <h2>Fly Chat</h2>
        <div>
            <h4 className='chat_bar_header'>Active Users</h4>
            <div className="chat_users">
                {users.map((user)=>  (<p key={user.socketId}>{user.username}</p>))}    
            </div>
        </div>
    </div>
  )
}

export default ChatBar