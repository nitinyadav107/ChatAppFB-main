import { getReceiverSocketId } from "../index.js";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { io } from "../index.js"; 

export const sendMessage = async (req, res) => {
  try {
    const { sender_id,message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = sender_id;

    let conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        members: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });

    conversation.messages.push(newMessage._id);

    await conversation.save();
    const receiverSocketId=getReceiverSocketId(receiverId);
    if(receiverSocketId){
      io.to(receiverSocketId).emit('newMessage',newMessage);
    }

    res.status(200).json({ message: "Message sent successfully", newMessage });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

export const getMessage = async (req, res) => {
  try {
    // const { id: receiverId } = req.params;
    const { receiver_id, conversation_id } = req.params;
    const receiverId=receiver_id;
    const senderId=conversation_id;
    

    const conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    }).populate("messages");

    if (!conversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    res.status(200).json({ messages: conversation.messages });
  } catch (error) {
    console.error("Error in getMessage:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//console.log("Message sent successfully");
