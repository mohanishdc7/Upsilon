import { Button } from "@chakra-ui/button";
import { NumberInput, useDisclosure } from "@chakra-ui/react";
import {
  Checkbox,
  CheckboxGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Lorem,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";
import React, { useRef, useState } from "react";
import axios from "axios";
import { API } from "../Components/Utilities/Constants";
import Auth from "../Components/Auth/Auth";
import User from "../Components/Utilities/User";
import Dashboard from "./Dashboard";

function CreateCourse(props) {
  let x = [];

  const defImg =
    "https://res.cloudinary.com/upsilon175/image/upload/v1626337087/lightlogo2_g4olr1.png";

  console.log(User);

  const [img, setImg] = useState(defImg);
  const [doc, setDoc] = useState();
  const [vid, setVid] = useState();
  const [pri, setPri] = useState(defImg);

  const imgref = useRef();
  const iimgref = useRef();
  const ipdfref = useRef();
  const ividref = useRef();

  const [tf, setTf] = useState(true);
  const [ton, setTon] = useState(true);

  const cats = [
    "Science",
    "Arts",
    "JEE",
    "GATE",
    "Coding",
    "Photography",
    "Language",
    "Music",
    "Dance",
    "Commerce",
    "Fitness",
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [course, setCourse] = useState({
    IntroductoryContentDocuments: [],
    IntroductoryContentImages: [],
    IntroductoryContentVideos: [],
    assignments: [],
    classUnderway: null,
    courseCategories: [],
    courseDescription: "",
    courseDuration: null,
    courseFees: 0,
    courseImage: defImg,
    courseLocation: null,
    courseMode: "Online",
    courseName: "",
    coursePreReq: "",
    courseRating: null,
    courseReviews: [],
    lectures: [],
    meetingId: "",
    notifications: [],
    numberOfBatches: 1,
    numberOfReviews: 0,
    numberOfStudentEnrolled: 0,
    registrationsOpen: true,
    scheduledClasses: [],
    test: [],
    tutorId: "",
    __v: 0,
    _id: "",
  });

  const handleSubmit = async () => {
    setCourse((c) => {
      if (!ton) return { ...c, courseMode: "Offline" };
    });
    setCourse((c) => {
      if (tf) return { ...c, courseFees: 0 };
    });

    if (!(img === defImg)) {
      const req = new FormData();
      req.append("file", img);
      req.append("upload_preset", "n9zsfhdq");
      req.append("cloud_name", "dmujsjrn1");
      try {
        var res = await axios.post(
          "https://api.cloudinary.com/v1_1/dmujsjrn1/upload",
          req
        );
        setCourse((s) => {
          return {
            ...s,courseImage:res.data.url            
          };
        });
      } catch (error) {
        console.log(error);
      }
    }

    if (vid) {
      const req = new FormData();
      req.append("file", vid);
      req.append("upload_preset", "n9zsfhdq");
      req.append("cloud_name", "dmujsjrn1");
      try {
        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dmujsjrn1/upload",
          req
        );
        setCourse((s) => {
          return {
            ...s,
            IntroductoryContentVideos: [
              ...s.IntroductoryContentVideos,
              res.data.url,
            ],
          };
        });
      } catch (error) {
        console.log(error);
      }
    }

    if (doc) {
      const req = new FormData();
      req.append("file", doc);
      req.append("upload_preset", "n9zsfhdq");
      req.append("cloud_name", "dmujsjrn1");
      try {
        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dmujsjrn1/upload",
          req
        );
        setCourse((s) => {
          return {
            ...s,
            IntroductoryContentDocuments: [
              ...s.IntroductoryContentDocuments,
              res.data.url,
            ],
          };
        });
      } catch (error) {
        console.log(error);
      }
    }

    if (Auth.isAuthenticated() === true) {
      await axios
        .post(`${API}/createCourse`, course, {
          headers: { token: Auth.userToken },
        })
        .then((res) => {
          console.log("Reaching");
          alert("Course Created Successfully");
          props.history.push("/dashboard");
        })
        .catch((e) => {
          alert("Error" + e);
        });
    } else {
      props.history.push("/login");
    }

    // Integrate Api Here
    console.log(course);
  };

  return (
    <Dashboard>
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <span style={{ fontWeight: "800", fontSize: "20px" }}>
          Course Image
        </span>
        <div style={{ margin: "30px 0" }}>
          <img
            src={pri}
            alt=""
            style={{ width: "280px", height: "157.5px", objectFit: "cover" }}
          />

          <input
            type="file"
            name="cimg"
            id=""
            style={{ display: "none" }}
            ref={imgref}
            accept="image/*"
            onChange={(e) => {
              const x = e.target.files[0];
              if (x) {
                setImg(x);
                console.log(img);
                const r = new FileReader();
                r.onloadend = () => {
                  setPri(r.result);
                };
                r.readAsDataURL(x);
              } else setImg(defImg);
            }}
          />
          <Button
            colorScheme="purple"
            style={{ margin: "30px 0" }}
            onClick={() => imgref.current.click()}
          >
            Add Course Image
          </Button>
        </div>

        <FormControl style={{ margin: "30px 0" }}>
          <FormLabel>
            <span style={{ fontWeight: "800", fontSize: "20px" }}>
              Course Title
            </span>
          </FormLabel>
          <Input
            onChange={(e) =>
              setCourse((c) => {
                return { ...c, courseName: e.target.value };
              })
            }
            type="text"
          />
        </FormControl>
        <FormControl style={{ margin: "30px 0" }}>
          <FormLabel>
            <span style={{ fontWeight: "800", fontSize: "20px" }}>
              Course Description
            </span>
          </FormLabel>
          <Textarea
            onChange={(e) =>
              setCourse((c) => {
                return { ...c, courseDescription: e.target.value };
              })
            }
          />
        </FormControl>

        <FormControl style={{ margin: "30px 0" }}>
          <FormLabel>
            <span style={{ fontWeight: "800", fontSize: "20px" }}>
              Course Duration
            </span>
          </FormLabel>
          <NumberInput
                onChange={(e) => {
                  setCourse((c) => {
                    return { ...c,courseDuration: e};
                  })
                }}
                step={2}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
        </FormControl>

        <div style={{ margin: "30px 0" }}>
          <Button colorScheme="purple" onClick={onOpen}>
            + Add a Category Tag
          </Button>
        </div>

        <Modal isOpen={isOpen} onClose={onClose} size="xs">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Choose Categories</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <CheckboxGroup defaultValue={x}>
                {cats.map((c) => (
                  <div>
                    <Checkbox
                      style={{ marginBottom: "10px" }}
                      value={c}
                      onChange={(e) => {
                        if (e.target.checked) {
                          x.push(e.target.value);
                        }
                      }}
                    >
                      {c}
                    </Checkbox>
                  </div>
                ))}
              </CheckboxGroup>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="purple"
                mr={3}
                onClick={() => {
                  onClose();
                  setCourse((c) => {
                    return { ...c, courseCategories: x };
                  });
                }}
              >
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <div style={{ margin: "30px 0" }}>
          {" "}
          <Checkbox
            style={{ marginRight: "30px" }}
            isChecked={tf}
            onChange={() => setTf((s) => !s)}
          >
            Teach For Free
          </Checkbox>
          <Checkbox isChecked={!tf} onChange={() => setTf((s) => !s)}>
            Charge a Fee
          </Checkbox>
          {tf ? null : (
            <div style={{ margin: "30px 0" }}>
              <FormControl>
                <FormLabel>Course Fees (in INR)</FormLabel>
                <NumberInput
                onChange={(e) => {
                  setCourse((c) => {
                    return { ...c, courseFees: e };
                  })
                }}
                step={50}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </FormControl>
            </div>
          )}
        </div>
        <div style={{ margin: "30px 0" }}>
          <Checkbox
            style={{ marginRight: "30px" }}
            isChecked={ton}
            onChange={() => setTon((s) => !s)}
          >
            Online
          </Checkbox>
          {/* <Checkbox isChecked={!ton} onChange={() => setTon((s) => !s)}>
          Offline
        </Checkbox>

        {ton ? null : (
          <div>
            <Button colorScheme="purple"  style={{margin:"30px 0"}}>Add Location</Button>
          </div>
        )} */}
        </div>
        <span style={{ fontWeight: "800", fontSize: "20px" }}>
          Add Introductory Contents
        </span>

        <div style={{ margin: "30px 0" }}>
          <input
            style={{ display: "none" }}
            type="file"
            accept="image/*"
            ref={iimgref}
            onChange={(e) => {
              setImg(e.target.files[0]);
            }}
          />
          <input
            style={{ display: "none" }}
            type="file"
            accept=".pdf"
            ref={ipdfref}
            onChange={(e) => {
              setDoc(e.target.files[0]);
            }}
          />
          <input
            style={{ display: "none" }}
            type="file"
            accept="video/*"
            ref={ividref}
            onChange={(e) => {
              setVid(e.target.files[0]);
            }}
          />
          <Button
            colorScheme="purple"
            style={{ margin: "10px 30px" }}
            onClick={() => {
              ipdfref.current.click();
            }}
          >
            Add Document
          </Button>
          <Button
            colorScheme="purple"
            style={{ margin: "10px 30px" }}
            onClick={() => {
              iimgref.current.click();
            }}
          >
            Add Image
          </Button>
          <Button
            colorScheme="purple"
            style={{ margin: "10px 30px" }}
            onClick={() => {
              ividref.current.click();
            }}
          >
            Add Video
          </Button>
        </div>

        <Button colorScheme="green" onClick={()=>{
          console.log(img===defImg)
          handleSubmit()
        }}>
          Submit
        </Button>
      </div>
    </Dashboard>
  );
}

export default CreateCourse;
