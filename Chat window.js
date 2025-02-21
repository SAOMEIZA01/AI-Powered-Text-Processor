import React, { useState } from "react";
import { detectLanguage, summarizeText, translateText } from "../api";
import Message from "./Message";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, type: "user" };
    setMessages([...messages, userMessage]);

    const detectedLang = await detectLanguage(input);
    const botMessage = { text: `Detected language: ${detectedLang}`, type: "bot" };

    setMessages((prev) => [...prev, botMessage]);
    setInput("");
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} type={msg.type} />
        ))}
      </div>
      <div className="input-area">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type here..."
        ></textarea>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat
  Window;
