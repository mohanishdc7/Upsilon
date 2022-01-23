import React, { useState,useEffect} from "react";
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
import { useDisclosure } from '@chakra-ui/hooks';
import Schedule from "./Schedule";
import Forum from "./Forum";
import { Button, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
Textarea} from "@chakra-ui/react";
import "./styles.css";
import Dashboard from '../Dashboard';
import { API } from "../../Components/Utilities/Constants";
import Auth from "../../Components/Auth/Auth";
import axios from "axios";

function MainC() {
  const [navstate, setNavstate] = useState(1);
  const history = useHistory();

  const {isOpen,onOpen,onClose} = useDisclosure();
  const {courseId} = useParams();

  useEffect(async()=>{
    const res = await axios.get(`${API}/me`,{headers:{token : Auth.userToken}}) 
    const a=res.data.myCourses;
    console.log(a);
    const x=a.find( e => e===courseId);
    if(!x) history.push('/dashboard');
  },[])

  const comp = () => {
    if (navstate == 1) return <Home courseId={courseId} />;
    if (navstate == 2) return <Schedule courseId={courseId} />;
    else return <Forum courseId={courseId}/>;
  };

  useEffect(()=>{
    const navc = localStorage.getItem('navc');
    if(navc) setNavstate(navc);   
  },[])

  useEffect(()=>{
    localStorage.setItem('navc',navstate)
  },[navstate])

  return (
    <Dashboard>
      <div style={{maxwidth: "calc( 100vw - 240px)"}}>
        <div
          style={{
            backgroundColor: "#edf2f6",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Button
              style={{ borderRadius: 0}}
              onClick={() => {
                setNavstate(1);
              }}
              colorScheme={navstate == 1 ? "purple" : "gray"}
            >
              Home
            </Button>
            <Button
              style={{ borderRadius: 0 }}
              onClick={() => {
                setNavstate(2);
              }}
              colorScheme={navstate == 2 ? "purple" : "gray"}
            >
              Schedule
            </Button>
            <Button
              style={{ borderRadius: 0 }}
              onClick={() => {
                setNavstate(3);
              }}
              colorScheme={navstate == 3 ? "purple" : "gray"}
            >
              Forum
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              width: "280px",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Button onClick={onOpen} >Write a Review</Button>
            <Button >Drop this Course</Button>
          </div>
        </div>
        <div>
          {comp()}
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} size="xs">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Write a Review</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>
                <span style={{ fontWeight: "600", fontSize: "20px" }}>
                  Review
                </span>
              </FormLabel>
              <Textarea type="text" />
            </FormControl>
            <div style={{ width: "300px", height: "300px" }}></div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" mr={3}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Dashboard>
  );
}

export default MainC;
