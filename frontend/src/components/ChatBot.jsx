import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! What symptoms are you experiencing today?' }
  ]);
  const [userInput, setUserInput] = useState('');

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const userMessage = { sender: 'user', text: userInput };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setUserInput('');

    const botReply = await getBotReply(userInput);
    setMessages([...updatedMessages, { sender: 'bot', text: botReply }]);
  };

  const getBotReply = async (input) => {
    const msg = input.toLowerCase();

    return new Promise((resolve) => {
      setTimeout(() => {
        if (msg.includes('fever')) {
          resolve('It might be a viral infection 🤒. Please stay hydrated 🥤 and consult a doctor if it persists.');
        } else if (msg.includes('diabetes') || msg.includes('thirst') || msg.includes('frequent urination') || msg.includes('fatigue')) {
          resolve('These symptoms may indicate diabetes 🧪. Consider checking your blood sugar and consult a diabetologist.');
        } else if (msg.includes('chest pain') || msg.includes('tightness') || msg.includes('shortness of breath')) {
          resolve('Chest pain may be serious ❤️. Seek immediate medical attention or consult a cardiologist.');
        } else if (msg.includes('cough') || msg.includes('sore throat') || msg.includes('sneezing')) {
          resolve('Sounds like a cold or upper respiratory infection 😷. Rest and stay hydrated.');
        } else if (msg.includes('headache') || msg.includes('migraine') || msg.includes('pain in head')) {
          resolve('Headaches can have many causes 🤕. Rest and consult a neurologist if it persists.');
        } else if (msg.includes('cold') || msg.includes('chills') || msg.includes('runny nose')) {
          resolve('It could be the common cold 🥶. Stay warm and consider over-the-counter remedies.');
        } else {
          resolve("I'm not sure about that symptom 🤔. Can you describe it in more detail?");
        }
      }, 1000);
    });
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-4 h-[500px] flex flex-col">
      <div className="flex-1 overflow-y-auto space-y-2 mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-md ${
              msg.sender === 'bot'
                ? 'bg-blue-100 text-left'
                : 'bg-green-100 text-right'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded px-3 py-2"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Describe your symptoms..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;