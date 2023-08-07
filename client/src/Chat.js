import React, { useState, useEffect } from 'react'
import './Chat.css'


const Chat = ({socket, username , roomID}) => {
    const [currentMessage, setCurrentMessage] = useState('')
    
    
  return (
    <div className='chat'>
        <div className="chat-header"><h3> Live Chat: {roomID}</h3></div>
        <div className="chat-body"></div>
        <div className="chat-footer">
            <input type="text" placeholder='Write something...'  />
        </div>
    </div>
  )
  }
export default Chat