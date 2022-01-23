import React from "react";
import "./Course.css";
import { FaRupeeSign } from "react-icons/fa";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { API } from "../Utilities/Constants";
import axios from "axios";
import { useEffect, useState } from "react";

const color = "gold";

const course = {
  "courseCategories": ["Music", "Music"],
  "coursePreReq": "",
  "courseReviews": [],
  "registrationsOpen": true,
  "scheduledClasses": [],
  "test": [],
  "assignments": [],
  "IntroductoryContentImages": [],
  "IntroductoryContentVideos": [],
  "IntroductoryContentDocuments": [],
  "lectures": [],
  "notifications": [],
  "_id": "61488b273818f8001612d545",
  "courseDescription": "basic training, how to sing, vocal management, etc. \n",
  "courseDuration": 1,
  "courseFees": 0,
  "courseLocation": null,
  "courseMode": "Online",
  "courseName": "music (vocal) ",
  "courseRating": 5,
  "numberOfBatches": 1,
  "numberOfReviews": 0,
  "numberOfStudentEnrolled": 0,
  "tutorId": "614889023818f8001612d4d1",
  "courseImage":
    "https://res.cloudinary.com/upsilon175/image/upload/v1626337087/lightlogo2_g4olr1.png",
  "meetingId": "",
  "classUnderway": false,
  "__v": 0,
};

const rating = (a) => {
  a = Math.round(2 * a) / 2;
  let ans = [];
  let x = Math.floor(a);
  let y = Math.ceil(a);
  let z = x != y;
  while (x--) {
    ans.push(<BsStarFill fill={color} />);
  }
  if (z) ans.push(<BsStarHalf fill={color} />);
  while (y != 5) {
    ans.push(<BsStar fill={color} />);
    y++;
  }
  return ans;
};

function Course({ course }) {
  const [tutorName, setTutorName] = useState("Loading...");
  const [courseDistance, setCourseDistance] = useState("Loading...");

  useEffect(() => {
    if (course) {
      if (course._id) {
        const body = {
          "courseId": course._id,
        };
        const demoUserToken =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU2ZGUyNGUwY2E5MjVhYjA5YmY1NTEiLCJpYXQiOjE2MzMwODI5NzZ9.y6XwRqXkONmWu2V04oi__FsHn1Ej5tNt6YFePIZ6-e0";

        axios
          .post(`${API}/tutorNameLoc`, body, {
            headers: { "token": demoUserToken },
          })
          .then((res) => {
            console.log(res.data);
            setTutorName(res.data.tutorName);
            setCourseDistance(res.data.courseDistance);
          })
          .catch((e) => {
            alert("Error" + e);
          });
      }
    }
  }, []);

  return (
    <div className="ccard">
      <img src={course.courseImage} alt="" />
      <div className="ccont">
        <div className="cconth">
          <div className="cconth1">
            {course.courseName.length < 50
              ? course.courseName
              : `${course.courseName.slice(0, 50)}...`}
          </div>
          <div className="cconth2">{course.courseMode}</div>
        </div>
        <div className="cconta">
          By <span> {tutorName} </span>
        </div>
        <div className="cconde">
          {course.courseDescription.length < 100
            ? course.courseDescription
            : `${course.courseDescription.slice(0, 100)}...`}
        </div>
        <div className="ccontpr">
          <div className="ccontpr1">
            {rating(course.courseRating)} <span>{course.courseRating}</span>{" "}
          </div>
          <div className="ccontpr2">
            {course.courseFees === 0 ? null : <FaRupeeSign fill="#48BB78" />}
            <span>{course.courseFees === 0 ? "Free" : course.courseFees}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
