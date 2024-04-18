import React from "react";
import Input from "../Message/Input";
import Message from "../Message/Message";

const Chat = () => {
  return (
    <div>
      <div className="chat-area">
        <div className="chat-area-header">
          <div className="chat-area-title">CodePen Group</div>
          <div className="chat-area-group">
            <img
              className="chat-area-profile"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
              alt=""
            />
            <img
              className="chat-area-profile"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png"
              alt=""
            />
            <img
              className="chat-area-profile"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png"
              alt=""
            />
            <span>+4</span>
          </div>
        </div>
        <Message/>
      </div>
      <Input />
    </div>
  );
};

export default Chat;
