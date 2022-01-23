import React, { useEffect, useState } from "react";
import "./Count.css";
import student from './image (3) copy 2.png'
import teacher from './image (3) copy.png'
import courses from './image (2) copy 2.png';

function Count() {

  const speed=20;
  
  const initial = {
    a : 1000,
    b : 10,
    c : 30,
    d : 100,
  }
  
  const target = {
    a : 2000,
    b : 50,
    c : 80,
    d : 700
  }

  const int = {
    a : (target.a-initial.a)/speed,
    b : (target.b-initial.b)/speed,
    c : (target.c-initial.c)/speed,
    d : (target.d-initial.d)/speed,

  }

  const [count, setCount] = useState(initial);
  
  useEffect(()=>{

    const i = setInterval(() => {
      setCount( s => ({
        a: s.a + int.a,
        b: s.b + int.b,
        c: s.c + int.c,
        d: s.d + int.d,
      }))
    },500/speed)

    const i1=setTimeout(()=>{
      clearInterval(i)
    },2000)

    return ()=>{
      clearInterval(i);
      clearInterval(i1);
    }

    
  },[])
  
  
  return (
    <div className="main">
      <div className="item1">
        <img className="coimg" src={student} alt="student"/>
        <p className="cop" style={{ color : "#D69E2E"}}>{Math.ceil(count.a)}+ Students</p>
      </div>
      <div className="item2">
        <img className="coimg" src={teacher} alt="student"/>
        <p className="cop"style={{ color : "#48BB78"}} >{Math.ceil(count.b)}+ Teachers</p>
      </div>
      <div className="item3">
        <img className="coimg" src={courses} alt="student"/>
        <p   className="cop"style={{color : "#9F7AEA" }}>{Math.ceil(count.c)}+ Courses</p>
      </div>
    </div>
  );

  }

  export default Count;
