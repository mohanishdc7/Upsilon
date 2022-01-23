import { useState,useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { API } from "../../Components/Utilities/Constants";
import Auth from "../../Components/Auth/Auth";
import axios from "axios";

function Schedule({courseId}) {


  const [scheduledClasses, setScheduledClasses] = useState([]);

  useEffect(async () => {
    const res = await axios.post(
      `${API}/getCourse`,
      { courseId },
      { headers: { token: Auth.userToken } }
    );
    const a = res.data.course.scheduledClasses;
    setScheduledClasses(a);
  }, []);


  return (
    <div>
      
      <div style={{margin:"30px",fontWeight: 800,fontSize:"18px"}}>Upcoming Classes</div>
    
    

    <div className="cistb" >
    {
        scheduledClasses.length===0? "No Classes Scheduled" :
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Class</Th>
            <Th>Time</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            scheduledClasses.map(c => <Tr>
              <Td>{c.date}th {c.moth}</Td>
              <Td><Link to='/' >{c.className}</Link></Td>
              <Td>{c.time} - {c.endtime}</Td>
            </Tr>)
          }
        </Tbody>
      </Table>

      }
    </div>


    </div>
  );
}

export default Schedule;
