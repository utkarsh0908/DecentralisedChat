import React from 'react'
import { ChatContext } from '../context/context'
import { useContext } from "react"

const messageForm = () => {
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
    <div className=''>
    <form
        onSubmit={event => sendMessage(event)}
        className="border-2 rounded-md">
        <input
            type='text'
            className='w-full'
            value={messageText}
            disabled={currentAccount.name}
            onChange={e => setMessageText(e.target.value)}
            placeholder={placeholder}
        />
    </form>
    </div>
  )
}

export default messageForm