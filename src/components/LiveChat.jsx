import React, { useState } from "react";
import './LiveChat.css';

function LiveChat(){
    
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    
    const handleChange = (e) => {
        setMessage(e.target.value);
      };
    
      const handleSend = (e) => {
        e.preventDefault();
        if (message.trim()) {
          setMessages([...messages, { text: message, sender: "user" }]);
          setMessage("");
          // Simulate a response from the support team
          setTimeout(() => {
            setMessages((prevMessages) => [
              ...prevMessages,
              { text: "Support team response", sender: "support" },
            ]);
          }, 1000);
        }
      };
    
    return(
        <div className="live-chat">
            <h1>Live Chat</h1>
            <p>Chat with our IT support team in real time</p>
            <div className="chat-window">
                <div className="messages">
                    {messages.map((msg, index) => (
                        <div
                        key = {index}
                        className={`message ${msg.sender === "user" ? "user" : "support"}`} 
                        >
                        {msg.text}
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSend}>
                    <input
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={handleChange}
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default LiveChat;