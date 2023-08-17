import React,{useState} from 'react'
import './Chat.css'


const ChatFooter = ({socket}) => {
    const [message, setMessage] = useState('')
    const handleTyping = ()=>{
        socket.emit('typing', `${localStorage.getItem('username')} is typing ...`)
    }
    const handleStoppedTyping = ()=>{
        socket.emit('stoppedTyping', '')
    }
    const handleSendMessage = (e) => {
        e.preventDefault()
        if (message.trim() && localStorage.getItem('username')) {
            socket.emit('message', {
                text: message,
                username: localStorage.getItem('username'),
                id: `${socket.id}${Math.random()}`, //this is generates an id of the message no the socket 
                socketId: socket.id
            })
        }
        setMessage('')
    }
    return (
      <div className='chat_footer' onSubmit={handleSendMessage}>
          <form className='chat_footer_form'>
            <input type="text" placeholder='Write a message...' className='message_input' value={message} onChange={(e)=>{setMessage(e.target.value)}} onFocus={handleTyping} onBlur={handleStoppedTyping}/>
            <button className="send_button">Send</button>
          </form>
      </div>
    )
}

export default ChatFooter