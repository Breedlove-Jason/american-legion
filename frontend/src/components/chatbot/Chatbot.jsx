import { useState } from "react";
import "./Chatbot.css"; // Make sure to import the CSS file
import axios from "axios";
import { FaRobot } from "react-icons/fa"; // Using a robot icon to represent AI
import { faSquareUp, faHeadSideGear } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to track if the chatbot is open

  const handleSend = async () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");

      try {
        const response = await axios.post(
          "http://localhost:8000/api/chatbot/",
          { message: input },
        );

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: response.data.message, sender: "bot" },
        ]);
      } catch (error) {
        console.error("Error sending message:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Sorry, something went wrong. Please try again.",
            sender: "bot",
          },
        ]);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="chatbot-toggle" onClick={toggleChatbot}>
        <FontAwesomeIcon icon={faHeadSideGear} size={"2x"} />
        {/*<FaRobot size={30} color="#fff" />{" "}*/}
        {/* Adjust size and color to match your theme */}
      </div>

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            Chat with AI
            <button className="chatbot-close-button" onClick={toggleChatbot}>
              X
            </button>
          </div>
          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-bubble ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input-container">
            <input
              type="text"
              className="chatbot-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
            />
            <button className="chatbot-send-button" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
