import { useContext } from "react"
import {ChatContext} from '../context/context'
import MessageCard from '../components/messageCard'

const chatview = () => {
  const { state } = useContext(ChatContext)

  const formattedMessagesArray = () => {
    const uniqueArray = state.messages.filter((value, index) => {
      const _value = JSON.stringify(value)

      return (
        index ===
        state.messages.findIndex(obj => {
          return JSON.stringify(obj) === _value
        })
      )
    })

    return uniqueArray
  }
  const {
        messageText,
        setMessageText,
        placeholder,
        gun,
        roomName,
        currentAccount,
        currentUser,
      } = useContext(ChatContext)

      const sendMessage = event => {
        event.preventDefault()
        if (messageText.trim() === '') return
    
        const messagesRef = gun.get(roomName)
    
        const newMessage = {
          sender: currentUser.name,
          avatar: currentUser.avatar
            ? currentUser.avatar
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU',
          content: messageText.trim(),
          createdAt: Date().substring(4, 11),
          messageId: Date.now(),
        }
    
        messagesRef.set(newMessage)
        setMessageText('')
      }

  return (
    <div className="flex flex-col h-[92%] w-[65%] border-l-2 border-[#9b9b9b62] overflow-y-scroll scrollbar-hidden">
      <div className='fixed top-4 p-4 flex flex-row justify-between items-center bg-[#e9e9e9] h-20 w-[65%] rounded-tr'>
        {roomName}
      </div>
      <div className="mt-20">
      {formattedMessagesArray().map((message, index) => (
          <MessageCard
            key={index}
            avatar={message.avatar}
            sender={message.sender}
            timestamp={message.createdAt}
            content={message.content}
          />
        ))}
      </div>
      
      <div className='fixed bottom-6 w-[60%] ml-2'>
    <form
        onSubmit={event => sendMessage(event)}
        className="border-2 rounded-md">
        <input
            type='text'
            className='w-full p-2'
            value={messageText}
            disabled={currentAccount.name}
            onChange={e => setMessageText(e.target.value)}
            placeholder={placeholder}
            
        />
    </form>
    </div>
      
    </div>
  )
}

export default chatview