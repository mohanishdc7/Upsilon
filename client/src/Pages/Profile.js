import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";
import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import Dashboard from './Dashboard'
import axios from "axios";
import Auth from "../Components/Auth/Auth";
import { API } from "../Components/Utilities/Constants";

function Profile() {

  const [edit, setEdit] = useState(false);
  const imgref = useRef();
  const [img,setImg] =useState();
  const [username, setUsername] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  const handleUpdate = async()=>{
    const req={
      name : username,
      phone,
      email,
      img,
    }
    console.log("hI")
    const res = await axios.post(`${API}/updateProfileDetails`,req,{headers:{ token : Auth.userToken}})

    alert(res.data.message);
  }

  useEffect(async()=>{
    const res= await axios.get(`${API}/me`,{headers:{token:Auth.userToken}})
    console.log(res.data)
    setImg(res.data.image);
    setUsername(res.data.username);
    setPhone(res.data.phone);
    setEmail(res.data.email);

  },[])

  return (
      <Dashboard>
    <div className="prm">
      <div className="prms">
          <div className="prmp">
        <Avatar size="2xl" />
        {
            edit? <>
            <input
            style={{display:"none"}}
            ref={imgref} type="file" accept="image/*" name="" id="" />
            <Button 
            style={{margin:"50px"}}
            onClick={()=>imgref.current.click()}>Upload Image</Button>
            </>:null
        }
        
        </div>
        <div className="prmf">
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              isReadOnly={!edit}
              value={username}
              onChange={(e) => {
                if (edit) {
                  setUsername(e.target.value);
                }
              }}
            />
          </FormControl>
        </div>
        <div className="prmf">
          <FormControl>
            <FormLabel>Phone</FormLabel>
            <Input
              isReadOnly={!edit}
              value={phone}
              onChange={(e) => {
                if (edit) {
                  setPhone(e.target.value);
                }
              }}
            />
          </FormControl>
        </div>
        <div className="prmf">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              isReadOnly={!edit}
              value={email}
              onChange={(e) => {
                if (edit) {
                  setEmail(e.target.value);
                }
              }}
            />
          </FormControl>
        </div>
        <div className="prme">

        {
            !edit ? <Button colorScheme="purple" onClick={() => setEdit((e) => !e)}>Edit Profile</Button> :
            <>
            <Button onClick={() => setEdit((e) => !e)}>
            Cancel
        </Button>

          <Button colorScheme="green" onClick={() => {handleUpdate();
            console.log(username)
            setEdit((e) => !e)}}>
              Save Changes
          </Button>
          </>

            }
        </div>
      </div>
    </div></Dashboard>
  );
}

export default Profile;
