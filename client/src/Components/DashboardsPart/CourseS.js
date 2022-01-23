import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { API } from "../Utilities/Constants";
import axios from "axios";
import {useEffect,useState} from 'react';
import './styles.css'
import {Button} from '@chakra-ui/react'

const color = "gold"

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

function CourseS({ course }) {

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
          })
          .catch((e) => {
            alert("Error" + e);
          });
      }
    }
  }, []);


  return (
    <div className="cdsmain">
      <img
        src={course.courseImage}
        alt=""
      />
      
        <div className="cdsc1">
          <div>
          <h1>{course.courseName}</h1>
          <div>By <span>{tutorName}</span></div></div>
          <div className="ccontpr1" style={{marginLeft: "-10px"}}>{rating(course.courseRating)} <span style={{color:"goldenrod"}}>{course.courseRating}</span> </div>
        </div>
        <div className="cdsc2">
          <div>{course.courseMode}</div>
          <Button>Write a review</Button>
          <Button>Drop Course</Button>
      </div>
      
    </div>
  );
}

export default CourseS;
