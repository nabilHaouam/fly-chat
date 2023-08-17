import React,{useState, useEffect, useRef} from 'react'
import ChatBar from './ChatBar'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'
import './Chat.css'

const Chat = ({socket}) => {
  const [messages, setMessages] = useState([])
  const [userTyping, setUserTyping] = useState('')
  const lastMessageRef = useRef(null)
  
  useEffect(() => {
    socket.on('messageResponse', (data)=>{
      setMessages([...messages, data])
    })
  }, [socket, messages])

  useEffect(() => {
    socket.on('typingResponse', (data)=> {
      setUserTyping(data)
    })
    
  }, [socket])

  useEffect(() => {
    socket.on('stoppedTypingResponse', (data)=> {
      setUserTyping(data)
    })
    
  }, [socket])
  
 
  useEffect(() => {
    //i'm using the optional operator because without it, if the last message doesn't load before the ref is assingned it will throw an error 
    lastMessageRef.current?.scrollIntoView({behavior : 'smooth'})
  }, [messages])
  

  return (
    <div className='chat'>
      <ChatBar socket={socket}/>
      <div className='chat_right'>
        <ChatBody messages={messages} lastMessageRef={lastMessageRef} userTyping={userTyping} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  )
}

export default Chat