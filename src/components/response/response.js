import React from "react";
import PropTypes from "prop-types";

const Response = props => {
  const {from, message, time} = props;
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">{message}</div>
    </li>
  );
};

Response.propTypes = {
  from: PropTypes.string,
  message: PropTypes.string,
  time: PropTypes.string
};

export default Response;
