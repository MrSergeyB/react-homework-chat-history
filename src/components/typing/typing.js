import React from "react";
import PropTypes from "prop-types";

const Typing = props => {
  const {from, message, time} = props;

  return (
    <li className="clearfix">
      <div className="message-data align-left">
        <i className="fa fa-circle me"></i>
        <span className="message-data-name">{from}</span>
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
      </div>
      <div className="float-left">
        {" "}
        <i className="fa fa-circle me"></i>{" "}
        <i className="fa fa-circle me me2"></i>{" "}
        <i className="fa fa-circle me me3"></i>
      </div>
    </li>
  );
};

Typing.propTypes = {
  from: PropTypes.string,
  message: PropTypes.string,
  time: PropTypes.string
};

export default Typing;
