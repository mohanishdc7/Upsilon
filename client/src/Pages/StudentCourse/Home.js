import React, { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import { Button } from "@chakra-ui/button";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalOverlay,
  ModalFooter,
  Input,
  FormLabel,
  FormControl,
  Textarea,
} from "@chakra-ui/react";
import "./styles.css";
import axios from "axios";
import { API } from "../../Components/Utilities/Constants";
import Auth from "../../Components/Auth/Auth";
import { useHistory } from "react-router";

function Home({ courseId }) {
  const history = useHistory();
  const joinClass = async () => {
    try {
      // console.log("MeetingId" + meetingId);
      const res = await axios.post(
        `${API}/getMeeting`,
        { courseId },
        { headers: { token: Auth.userToken } }
      );
      if(!res.data.meetingId){
      alert("No Class Scheduled Yet...")
      return;
      }
      // alert("MeetingId" + meetingId);
      history.push(`/meeting/${res.data.meetingId}`)
      
    } catch (error) {
      alert(error);
    }
  };

  useEffect(async () => {
    const res = await axios.post(
      `${API}/getResources`,
      { courseId },
      { headers: { token: Auth.userToken } }
    );
    console.log(res.data.resources);
    setResources(res.data.resources);
  }, []);

  const [resources, setResources] = useState({
    courseId: "6163e83c2f51e9001619c927",
    createdAt: "2021-10-11T07:31:08.749Z",
    documents: [],
    images: [],
    updatedAt: "2021-10-13T11:32:54.388Z",
    videos: [],
    __v: 0,
    _id: "6163e83c2f51e9001619c929",
  });

  return (
    <div>
      <div className="csb">
        <Button colorScheme="green" onClick={joinClass}>
          Join Live Class Now
        </Button>
      </div>
      <div className="csdhm">
        <span>Course Rescourses</span>
        <div style={{ display: "flex" }}>
          {resources.images.map((c) => (
            <img
              src={c}
              style={{
                width: "300px",
                height: "168.75px",
                margin: "20px",
              }}
            />
          ))}
          {resources.videos.map((c) => (
            <div
              style={{
                margin: "20px",
                height: "168.75px",
                margin: "20px",
              }}
            >
              <video width="300" controls>
                <source src={c} />
              </video>
            </div>
          ))}
          {resources.documents.map((c) => (
            <div>
              <a href={c} target="_blank">
                Document
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
