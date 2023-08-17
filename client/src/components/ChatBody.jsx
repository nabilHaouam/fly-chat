import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Chat.css'

const ChatBody = ({messages, lastMessageRef, userTyping}) => {
    const navigate = useNavigate()
    const handleLeaveChat = ()=> {
        localStorage.removeItem('username')
        navigate('/')
        window.location.reload()
    }
   
  return (
    <div className='chat_body'>
        <header className='chat_body_header'>
            <h2 className='chat_body_header_title'>Chill out with your best buddies</h2>
            <button className="leave_chat_btn" onClick={handleLeaveChat}>Leave Chat</button>
        </header>
        <div className="messages_container"> 
            {messages.map((message) =>
                message.username === localStorage.getItem('username') ? (
                //this message is sent from you
                <div className="message" key={message.id}>
                    <p className="sender_name">You</p>
                    <div className="sent_message">{message.text}</div>
                </div> 
                ) : (
                //this message is recieved by you
                <div className="message" key={message.id}>
                    <p>{message.username}</p>
                    <div className="recieved_message">{message.text}</div>
                </div>
                )
            )}
            <div ref={lastMessageRef} />
            {/* triggered when someone is typing */}
            <div className="message_status">
                <p>{userTyping}</p>
            </div>
        </div>
        
    </div>
  )
}

export default ChatBody