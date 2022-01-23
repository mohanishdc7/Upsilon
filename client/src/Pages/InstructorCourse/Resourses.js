import React, { useRef, useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { API } from "../../Components/Utilities/Constants";
import Auth from "../../Components/Auth/Auth";

function Resourses({ courseId }) {
  const iimgref = useRef();
  const ipdfref = useRef();
  const ividref = useRef();

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

  const handleUpload = async (files, type) => {
    const req = new FormData();
    req.append("file", files[0]);
    req.append("upload_preset", "preset1");
    req.append("cloud_name", "upsilon175");
    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/upsilon175/upload",
        req
      );
      const req1 = {
        courseId,
        url: res.data.url,
      };
      console.log(req1);
      const res1 = await axios.post(`${API}/addResource${type}`, req1, {
        headers: { token: Auth.userToken },
      });
      alert(res1.data.message);

      const req2 = await axios.post(
        `${API}/getResources`,
        { courseId },
        { headers: { token: Auth.userToken } }
      );
      console.log(req2.data);
    } catch (error) {
      console.log(error);
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

  return (
    <div style={{ margin: "20px" }}>
      <span style={{ fontWeight: "800", fontSize: "20px" }}>
        Add Course Resourses
      </span>

      <div style={{ margin: "30px 0" }}>
        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          onChange={(e) => handleUpload(e.target.files, "Image")}
          ref={iimgref}
        />
        <input
          style={{ display: "none" }}
          type="file"
          accept=".pdf"
          onChange={(e) => handleUpload(e.target.files, "Document")}
          ref={ipdfref}
        />
        <input
          style={{ display: "none" }}
          type="file"
          accept="video/*"
          onChange={(e) => {
            handleUpload(e.target.files, "Video");
          }}
          ref={ividref}
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
      <hr />
      <div>
        <span style={{ fontWeight: "800", fontSize: "20px" }}>
          Added Resources
        </span>
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

export default Resourses;
