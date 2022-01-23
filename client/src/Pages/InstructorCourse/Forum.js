import React,{useState}from 'react'
import './styles.css'
import {Button,Input} from '@chakra-ui/react';
import {GrAttachment} from 'react-icons/gr'
import axios from 'axios';
import { API } from '../../Components/Utilities/Constants';
import Auth from '../../Components/Auth/Auth';

const sty = {
    backgroundColor : "white",
    color : "black",
}


function Forum({courseId}) {

    const [chat,setChat] = useState(0);
    const [chatmessage1,setChatmessage1] = useState("");
    const [chatmessage2,setChatmessage2] = useState("");

    const handleSend =async ()=>{
        const req={
            courseId,
            message : chatmessage1,
            type : "text"
        }
       try {
          const res =await axios.post(`${API}/sendMessage`,req,{headers:{token:Auth.userToken}})
       } catch (error) {
           console.log(error)
       } 
    }

    return (
        <div style={{maxWidth:"calc( 100vw - 240px)"}} >

            <div className="chat" style={{margin:"20px"}}>
                <div className="chats">
                    <div 
                    style={ chat===0? null : sty }
                    onClick={()=>setChat(0)}
                    className="chatsi" >
                        Announcements
                    </div>
                    <hr />
                    <div 
                    style={ chat===1? null : sty }
                    onClick={()=>setChat(1)}
                    className="chatsi">
                        Discussion Forum
                    </div>
                    <hr />                
                </div>
                <hr />
                {chat===0?<div className="chatp">
                    <div className="chatdis"></div>
                    <hr />
                    <div className="chatsend">
                        <div><GrAttachment/></div>
                        <Input
                        value={chatmessage1}
                        onChange={ e => setChatmessage1(e.target.value)}
                        placeholder="Type your message here..."
                        type="text" name="" id="" />
                        <Button
                        onClick={()=>handleSend()}
                        >Send</Button>
                    </div>
                </div>:<div className="chatp">
                    <div className="chatdis"></div>
                    <hr />
                    <div className="chatsend">
                        <div><GrAttachment/></div>
                        <Input
                        value={chatmessage2}
                        onChange={ e => setChatmessage2(e.target.value)}
                        placeholder="Type your message here..."
                        type="text" name="" id="" />
                        <Button
                        onClick={()=>handleSend()}
                        >Send</Button>
                    </div>
                </div>
                }       
            </div>
            
        </div>
    )
}

export default Forum
