import { useState, useEffect } from "react";
import clsx from "clsx";

const Bubble = ({ message }) => {
  const bubbleClasses = clsx(
    "inline-block rounded-3xl py-1.5 px-4 max-w-[75%] text-left",
    message.isSelf
      ? "bg-gray-200 text-gray-700 self-end mr-2"
      : "bg-blue-600 text-white"
  )

  const containerClasses = clsx(
    "flex items-start space-x-2",
    message.isSelf && "flex-row-reverse text-right"
  )

  return (
    <div className={containerClasses}>
      <img
        src={
          message.avatar.path ? message.avatar.path : "/bridge/avatar-empty.jpg"
        }
        alt="Message avatar"
        width="32"
        height="32"
        className="mt-1 inline-block"
      />
      <div className="flex flex-col items-start w-full">
        <div className={bubbleClasses}>{message.text}</div>
        <span className="text-xs text-gray-400 mt-0.5 px-4 w-full">
          {message.sender}
        </span>
      </div>
    </div>
  );
};

const Chat = ({ messages }) => {
  return (
    <div className="chat-container">
      <div className="grid grid-cols-1 gap-2">
        {messages.map((message, idx) => (
          <Bubble key={idx} message={message} />
        ))}
      </div>
    </div>
  );
};

export default Chat;
