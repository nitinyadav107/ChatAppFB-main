import React from "react";

function Message({ message }) {
  console.log("Message component", message);
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  console.log("Auth user", authUser);
  console.log("Auth user id"
  , authUser.user.id);
  console.log("Message sender id", message.senderId);
  const itsMe = message.senderId === authUser.user.id;
  console.log("itsMe", itsMe);

  const chatName = itsMe ? " chat-end" : "chat-start";
  const chatColor = itsMe ? "bg-blue-500" : "";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div>
      {authUser?(
        <div className="p-4">
        <div className={`chat ${chatName}`}>
          <div className={`chat-bubble text-white ${chatColor}`}>
            {message.message}
          </div>
          <div className="chat-footer">{formattedTime}</div>
        </div>
      </div>

      ):(<div></div>)}
      
    </div>
  );
}

export default Message;