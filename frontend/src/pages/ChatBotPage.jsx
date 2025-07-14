import React from 'react'
import ChatBot from '../components/ChatBot'

const ChatBotPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-4">Health Assistant Chat Bot</h1>
      <ChatBot />
    </div>
  )
}

export default ChatBotPage