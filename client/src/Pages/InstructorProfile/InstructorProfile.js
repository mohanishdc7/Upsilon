import { Avatar } from "@chakra-ui/avatar";
import React from "react";
import "./styles.css";
import { MdOndemandVideo } from "react-icons/md";
import { BsFillPeopleFill, BsStarFill } from "react-icons/bs";
import Course from "../../Components/HomeMidCourses/Course";

const c1 = "green";

const profile = {
  name: "Bharath Reddy",
  shortdesc: "Student at IIT Madras",
  about:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, accusamus vitae! Veritatis quis placeat libero dolorem, voluptatibus perspiciatis necessitatibus beatae, natus error, ex fugiat minus et ut quasi ullam doloribus quae corrupti adipisci magni perferendis tempore doloremque aperiam? Labore distinctio dolor error eligendi alias natus facilis, quaerat impedit quam! Laudantium.",
  students: "2000",
  rating: "4.9",
  coursecount: "30",
  courses: [
    {
      id: "1",
      image: "https://source.unsplash.com/random/720x404",
      title: "React - The Complete Guide",
      instuctor: "Sanchit Gupta",
      description:
        "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
      tag: "Coding",
      rating: "4.7",
      price: "Free",
      location: "Offline",
    },
    {
      id: "2",
      image: "https://source.unsplash.com/random/720x404",
      title: "React - The Complete Guide",
      instuctor: "Sanchit Gupta",
      description:
        "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
      tag: "Coding",
      rating: "3.5",
      price: "Free",
      location: "Offline",
    },
    {
      id: "3",
      image: "https://source.unsplash.com/random/720x404",
      title: "React - The Complete Guide",
      instuctor: "Sanchit Gupta",
      description:
        "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
      tag: "Coding",
      rating: "4.3",
      price: "Free",
      location: "Offline",
    },
    {
      id: "3",
      image: "https://source.unsplash.com/random/720x404",
      title: "React - The Complete Guide",
      instuctor: "Sanchit Gupta",
      description:
        "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
      tag: "Coding",
      rating: "4.3",
      price: "Free",
      location: "Offline",
    },
    {
      id: "3",
      image: "https://source.unsplash.com/random/720x404",
      title: "React - The Complete Guide",
      instuctor: "Sanchit Gupta",
      description:
        "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
      tag: "Coding",
      rating: "4.3",
      price: "Free",
      location: "Offline",
    },
    {
      id: "3",
      image: "https://source.unsplash.com/random/720x404",
      title: "React - The Complete Guide",
      instuctor: "Sanchit Gupta",
      description:
        "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
      tag: "Coding",
      rating: "4.3",
      price: "Free",
      location: "Offline",
    },
    {
      id: "3",
      image: "https://source.unsplash.com/random/720x404",
      title: "React - The Complete Guide",
      instuctor: "Sanchit Gupta",
      description:
        "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
      tag: "Coding",
      rating: "4.3",
      price: "Free",
      location: "Offline",
    },
    {
      id: "3",
      image: "https://source.unsplash.com/random/720x404",
      title: "React - The Complete Guide",
      instuctor: "Sanchit Gupta",
      description:
        "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
      tag: "Coding",
      rating: "4.3",
      price: "Free",
      location: "Offline",
    },
    {
      id: "3",
      image: "https://source.unsplash.com/random/720x404",
      title: "React - The Complete Guide",
      instuctor: "Sanchit Gupta",
      description:
        "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
      tag: "Coding",
      rating: "4.3",
      price: "499",
      location: "Offline",
    },
  ],
};

function InstructorProfile() {
  return (
    <>
      <div className='ipm'>
        <div className='prom'>
          <Avatar size='2xl' src='https://source.unsplash.com/random/720x404' />
          <div className='proi1'>
            <span>{profile.name}</span>
            <span className='proi2'>{profile.shortdesc}</span>
          </div>
        </div>
        <div className='ipm1'>
          <div className='ipb1'>
            <div className='ipbi'>
              <span>Qualifications</span>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus, nesciunt necessitatibus perspiciatis nam ratione
                doloribus saepe deserunt veritatis nulla mollitia!
              </p>
            </div>
            <div className='ipbi'>
              <span>Experience</span>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus, nesciunt necessitatibus perspiciatis nam ratione
                doloribus saepe deserunt veritatis nulla mollitia!
              </p>
            </div>
          </div>
          <div className='prst'>
            <div className='prst1'>
              <span>
                <BsFillPeopleFill fill={c1} />
              </span>
              {profile.students} Students
            </div>
            <div className='prst1'>
              <span>
                <MdOndemandVideo fill={c1} />
              </span>
              {profile.coursecount} Courses{" "}
            </div>
            <div className='prst1'>
              <span>
                <BsStarFill fill={c1} />
              </span>{" "}
              {profile.rating} Instructor Rating{" "}
            </div>
          </div>
        </div>
        <div className='imp2'>
          <div className='impi1'>My Courses</div>

          <div className='impgr'>
            {profile.courses.map((c) => (
              <div className='impgr1'>
                <Course course={c} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default InstructorProfile;
