import React, { useEffect, useState } from "react";
import { Button, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import axios from "axios";
import Auth from "../../Components/Auth/Auth";
import { API } from "../../Components/Utilities/Constants";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router";

function Home({ courseId }) {
  const history = useHistory();
  const [stuenr, setStuenr] = useState([]);
  const [meetingId, setMeetingId] = useState("");
  useEffect(async () => {
    try {
      const res = await axios.post(
        `${API}/getStudentsList`,
        { courseId },
        { headers: { token: Auth.userToken } }
      );
      console.log(res.data.registeredStudentList);
      setStuenr(res.data.registeredStudentList);
    } catch (error) {
      alert(error);
    }
  }, []);

  const startMeeting = async () => {
    try {
      const a = courseId + uuidv4();
      setMeetingId(a);
      // console.log(a , meetingId);
      const res = await axios.post(
        `${API}/startMeeting`,
        { courseId, meetingId: a },
        { headers: { token: Auth.userToken } }
      );
      // alert(`/meeting/${a}`)
      history.push(`/meeting/${a}`);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div>
        <div className="csb">
          <Button colorScheme="purple" onClick={startMeeting}>
            Go Live Now
          </Button>
        </div>
      </div>

      <span style={{ marginLeft: "30px", fontWeight: 800, fontSize: "18px" }}>
        List Of Registered Students
      </span>

      <div className="citb">
        {stuenr.length === 0 ? (
          "No Students Registered Yet"
        ) : (
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Sno</Th>
                <Th>Name</Th>
              </Tr>
            </Thead>
            <Tbody>
              {stuenr.map((c, i) => (
                <Tr>
                  <Td>{i + 1}</Td>
                  <Td>{c.name}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </div>
    </>
  );
}

export default Home;
