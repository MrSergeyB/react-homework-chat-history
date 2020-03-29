import React from "react";
import MessageHistory from "./components/message-history";
import messages from "./components/message-data/message-data";
import "./App.css";

function App() {
  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={messages} />
        </div>
      </div>
    </div>
  );
}

export default App;
