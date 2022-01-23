import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import Dashboard from "../../Pages/Dashboard";
import axios from "axios";
import Auth from "../Auth/Auth";
import { API } from "../Utilities/Constants";
import CourseI from "./CourseI";
import { useHistory } from "react-router";
import './styles.css'

const ManageCourses = () => {

  const [mycourses,setCourses] = useState([]);
  const history = useHistory();
 
  useEffect(async ()=>{

    const res = await axios.get(`${API}/coursesTaught`,{headers:{token:Auth.userToken}})

    const a = res.data.courses;
    setCourses(a);

  },[])


  return (
    <Dashboard>
      <Flex width="100%" justifyContent="center" flexWrap="wrap">
        {
          mycourses.map(c => <div classname="cdms"
          onClick={()=>history.push(`/dashboard/ci/${c._id}`)}
          >
              <CourseI course={c}/>
            </div>)
        }
      </Flex>
    </Dashboard>
  );
};

export default ManageCourses;
