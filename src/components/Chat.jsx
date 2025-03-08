import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import {useSelector} from "react-redux";

const chat = () =>{
    const [messages, setMessages] = useState([{text:"Hello World"}]);
    const {targetUserId} = useParams();
    const user = useSelector((store)=>store.user);
    const userId = user?._id;
    useEffect(()=>{
       const socket = createSocketConnection();
       socket.emit("joinchat",{firstName : user?.firstName,userId,targetUserId});
       return()=>{
        socket.disconnect();
       }
    },[userId,targetUserId]);
    

    return (
        <div className="w-1/2 mx-auto border border-gray-600 m-5 h-[70-vh] flex flex-col">
            <h1 className = "p-5 border-b border-gray=600 ">Chat</h1>
        <div className="flex-1 overflow-scroll p-5">
            {messages.map((msg,index)=>{
                return(
                    <div key={index}className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-header">
    Obi-Wan Kenobi
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble">You were the Chosen One!</div>
  <div className="chat-footer opacity-50">Delivered</div>
</div>
                );
            })};
        </div>
        <div className="p-5 border-t border_gray-600 flex items-center gap-2">
            <input className="flex-1  border border-gray-500 text-white rounded p-2"></input>
            <button className="btn btn-secondary">send</button>
        </div>
        </div>
     
    )
};
export default chat;