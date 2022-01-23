import axios from "axios";
import { set } from "date-fns";
import React, { useEffect, useState } from "react";

import { Jutsu } from "react-jutsu";
import { useParams,useHistory } from "react-router-dom";
import Auth from "../Auth/Auth";
import { API } from "../Utilities/Constants";

const App = () => {
  const history = useHistory();
  const { meetingId } = useParams();
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [call, setCall] = useState(false);
  const [password, setPassword] = useState("");
  const [courseId,setCourseId] = useState();

  useEffect( async() => {
    const courseId = meetingId.slice(0,24);
    const res1 = await axios.post(`${API}/getCourse`,{courseId},{headers:{token:Auth.userToken}})
    setRoom(res1.data.course.courseName);
    const res = await axios.get(`${API}/me`, {
      headers: { token: Auth.userToken },
    });
    const a = res.data;
    setName(a.username);
    setCall(true);
  }, []);

  const handleEnd = async()=>{
    const res = await axios.post(`${API}/endMeeting`,{courseId},{headers:{token :Auth.userToken}})
    history.push('/dashboard');
  }

  return (
    <div style={{width:"100vw",height:"100vh"}}>
    {call?
    <Jutsu
      containerStyles={{ width: '100vw', height: '100vh' }}
      roomName={room}
      domain="upsilon.australiacentral.cloudapp.azure.com"
      displayName={name}
      password={password}
      onMeetingEnd={handleEnd}
      loadingComponent={<p>loading ...</p>}
      errorComponent={<p>Oops, something went wrong</p>}
    />:null
    }
    </div>
  );
};

export default App;
