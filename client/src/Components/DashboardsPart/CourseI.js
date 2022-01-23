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

function CourseI({ course }) {


  return (
    <div className="cdsmain">
      <img
        src={course.courseImage}
        alt=""
      />
      
        <div className="cdsc1">
          <div>
          <h1>{course.courseName}</h1>
        </div>
          <div className="ccontpr1" style={{marginLeft: "-10px"}}>{rating(course.courseRating)} <span style={{color:"goldenrod"}}>{course.courseRating}</span> </div>
        </div>
        <div className="cdsc2">
          <div>{course.courseMode}</div>
          <Button>Edit Course</Button>
          <Button>View Payments</Button>
      </div>
      
    </div>
  );
}

export default CourseI;
