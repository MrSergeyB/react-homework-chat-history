import React from "react";
import Message from "../message";
import Response from "../response";
import Typing from "../typing";
import "./message-history.css";
import PropTypes from "prop-types";

const MessageHistory = props => {
  const {list = [{}]} = props;
  return (
    <ul>
      {list.map(message => {
        switch (message.type) {
          case "message":
            return (
              <Message
                key={message.id}
                from={message.from.name}
                message={message.text}
                time={message.time}
              />
            );
          case "response":
            return (
              <Response
                key={message.id}
                from={message.from.name}
                message={message.text}
                time={message.time}
              />
            );
          case "typing":
            return (
              <Typing
                key={message.id}
                from={message.from.name}
                message={message.text}
                time={message.time}
              />
            );
          default:
            return null;
        }
      })}
    </ul>
  );
};

MessageHistory.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)
};

export default MessageHistory;
