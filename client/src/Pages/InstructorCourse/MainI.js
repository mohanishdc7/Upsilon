import React, { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useParams
} from "react-router-dom";
import Home from "./Home";
import Schedule from "./Schedule";
import Forum from "./Forum";
import { Button } from "@chakra-ui/button";
import Resourses from "./Resourses";
import './styles.css'
import Dashboard from '../Dashboard'
import axios from "axios";
import { API } from "../../Components/Utilities/Constants";
import Auth from "../../Components/Auth/Auth";

function MainI() {
  const [navstate, setNavstate] = useState(1);
  const {courseId} = useParams();
  const history = useHistory();

  
  
  const comp = () => {
    if (navstate == 1) return <Home courseId={courseId}/>;
    if (navstate == 2) return <Schedule courseId={courseId} />;
    if (navstate == 4) return <Resourses courseId={courseId}/>;
    else return <Forum />;
  };

  //Authorizing Course
  useEffect(async()=>{
    const res = await axios.get(`${API}/coursesTaught`,{headers:{token : Auth.userToken}}) 
    const a=res.data.courses;
    const x=a.find( e => e._id===courseId);
    if(!x) history.push('/dashboard');
  },[])


  console.log(Auth.userToken);
  useEffect(()=>{
    const nav = localStorage.getItem('nav');
    if(nav)
      setNavstate(nav);   
  },[])

  useEffect(()=>{
    localStorage.setItem('nav',navstate)
  },[navstate])

  return (
    <Dashboard>
      <div>
        <div style={{backgroundColor : "#edf2f6",maxwidth : "calc( 100vw - 240px) ",display:"flex",justifyContent:"space-between" }}>
          <div>
          <Button
            style={{borderRadius:0}}
            onClick={() => {
              setNavstate(1);
            }}
            colorScheme={navstate == 1 ? "purple" : "gray"}
          >
            Home
          </Button>
          <Button
            style={{borderRadius:0}}
            onClick={() => {
              setNavstate(2);
            }}
            colorScheme={navstate == 2 ? "purple" : "gray"}
          >
            Schedule
          </Button>
          <Button
            style={{borderRadius:0}}
            onClick={() => {
              setNavstate(3);
            }}
            colorScheme={navstate == 3 ? "purple" : "gray"}
          >
            Forum
          </Button>

          <Button
            style={{borderRadius:0}}
            onClick={() => {
              setNavstate(4);
            }}
            colorScheme={navstate == 4 ? "purple" : "gray"}
          >
            Add Resources
          </Button>
          </div>
          <div style={{display:"flex",width:"280px",justifyContent:"space-evenly",alignItems:"center"}}>
            <span className="cisp">Edit Course</span>
            <span className="cisp">View Payments History</span>
          </div>
        </div>
        <div className="dm">{comp()}</div>
      </div>

    </Dashboard>
  );
}

export default MainI;
