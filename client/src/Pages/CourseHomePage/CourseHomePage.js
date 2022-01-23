import { BottomNavigation, Paper } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { API, token } from "../../Components/Utilities/Constants";
import {
  BsStarFill,
  BsStarHalf,
  BsStar,
  BsFillPeopleFill,
} from "react-icons/bs";
import "./styles.css";
import { MdOndemandVideo } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Auth from "../../Components/Auth/Auth";
import { v4 as uuidv4 } from "uuid";

const c1 = "#48bb78";

const color = "gold";

function CourseHomePage() {
  const { courseId } = useParams();
  const [user, setUser] = useState();
  const [transactionId, setTransactionId] = useState();

  useEffect(async () => {
    try {
      const res = await axios.post(
        `${API}/getCourse`,
        { courseId },
        { headers: { token } }
      );
      // setCourse(res.data.course)
      setCourse(res.data.course);
      console.log(res.data.course);
      if (!res.data.course.registrationsOpen) setRole(3);
      const tutres = await axios.post(
        `${API}/tutorNameLoc`,
        { courseId },
        { headers: { token } }
      );

      setTut(tutres.data.tutorName);
    } catch (e) {
      alert(`Error : ${e}`);
    }
  }, []);

  useEffect(async () => {
    const res = await axios.get(`${API}/me`, {
      headers: { token: Auth.userToken },
    });
    const a = res.data;
    console.log(a);
    setUser(a);
    console.log(a.myCourses);
    const x = a.myCourses.find((e) => e === courseId);

    if (x) setRole(1);
    else {
      const res1 = await axios.get(`${API}/coursesTaught`, {
        headers: { token: Auth.userToken },
      });
      const a1 = res1.data.courses;
      const x1 = a1.find((e) => e._id === courseId);
      if (x1) setRole(2);
    }
  }, []);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handleFree = async () => {
    const req = {
      name: user.username,
      phone: user.phone,
      pincode: user.pincode,
      courseId,
      transactionId: uuidv4(),
    };
    const res1 = await axios.post(`${API}/registerForCourse`, req, {
      headers: { token: Auth.userToken },
    });
    alert(res1.data.message);
  };

  const handlePay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    const options = {
      key: "rzp_live_ZYGyNfgcYAAfXg", // Enter the Key ID generated from the Dashboard
      amount: course.courseFees * 105,
      currency: "INR",
      name: course.courseName,
      description: "Thank You For Enrolling For This Course...",
      image:
        "https://res.cloudinary.com/upsilon175/image/upload/v1626337087/lightlogo2_g4olr1.png",
      handler: async function (res) {
        const req = {
          name: user.username,
          phone: user.phone,
          pincode: user.pincode,
          courseId,
          transactionId: res.razorpay_payment_id,
        };
        const res1 = await axios.post(`${API}/registerForCourse`, req, {
          headers: { token: Auth.userToken },
        });
        alert(res1.data.message);
      },
      prefill: {
        name: user.username,
        email: user.email,
        contact: user,
      },
      theme: {
        color: "#805AD5",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const x = `{
    "course": {
        "courseCategories": [
            "Science",
            "Coding"
        ],
        "coursePreReq": "",
        "courseReviews": [],
        "registrationsOpen": true,
        "scheduledClasses": [],
        "test": [],
        "assignments": [],
        "IntroductoryContentImages": [
        
        ],
        "IntroductoryContentVideos": [
    
        ],
        "IntroductoryContentDocuments": [],
        "lectures": [],
        "notifications": [],
        "_id": "6107cdbb47705000156dcbbd",
        "courseDescription": "",
        "courseDuration": 0,
        "courseFees": 0,
        "courseLocation": null,
        "courseMode": "Online",
        "courseName": "",
        "courseRating": 5,
        "numberOfBatches": 1,
        "numberOfReviews": 0,
        "numberOfStudentEnrolled": 0,
        "tutorId": "6107cbcb47705000156dcb7e",
        "courseImage": "",
        "__v": 0,
        "classUnderway": true,
        "meetingId": "c5cd46ce-3e7c-4128-93fb-258eb07f76566107cbcb47705000156dcb7e"
    }
}`;

  const y = JSON.parse(x).course;
  const history = useHistory();
  const [course, setCourse] = useState(y);
  const [tut, setTut] = useState("Loading...");
  const [role, setRole] = useState(0);

  const handleRegister = () => {
    if (!Auth.isAuthenticated()) {
      history.push("/login");
    }
    if (role === 0) {
      if (course.courseFees !== 0) handlePay();
      else handleFree();
    } else if (role === 1) history.push(`/dashboard/cs/${courseId}`);
    else if (role === 2) history.push(`/dashboard/ci/${courseId}`);
    else alert("Registrations Closed!");
  };

  const reg = () => {
    if (role === 0)
      return (
        <>
          Register Now For{" "}
          {course.courseFees == "0" ? null : (
            <span>
              <FaRupeeSign />{" "}
            </span>
          )}
          {course.courseFees == "0" ? "Free" : course.courseFees}{" "}
        </>
      );
    else if (role === 1) return "Go to Course";
    else if (role === 2) return "Manage Course";
    else return "Registrations Closed";
  };

  return (
    <>
      <div className='chpt'>
        <div className='chmpt'>
          <div className='chmpt1'>{course.courseName}</div>
          <div className='chmpt2'>
            By <span> {tut}</span>
          </div>
          <p>{course.courseDescription}</p>
        </div>
        <div className='chpt2'>
          <img src={course.courseImage} alt='course image' />
          {console.log(course.courseImage)}
          <button onClick={handleRegister}>{reg()}</button>
        </div>
      </div>
      <div className='chpb'>
        <div>
          <div className='chir'>
            <span>Course Introductory Content</span>
            <hr />
            <div style={{ display: "flex" }}>
              {course.IntroductoryContentImages.map((c) => (
                <img
                  src={c}
                  style={{
                    width: "300px",
                    height: "168.75px",
                    margin: "20px",
                    objectFit: "cover",
                  }}
                />
              ))}
              {course.IntroductoryContentVideos.map((c) => (
                <div
                  style={{
                    margin: "20px",
                    height: "168.75px",
                    margin: "20px",
                  }}
                >
                  <video width='300' controls>
                    <source src={c} />
                  </video>
                </div>
              ))}
              {course.IntroductoryDocuments
                ? course.IntroductoryDocuments.map((c) => (
                    <div>
                      <a href={c} target='_blank'>
                        Document
                      </a>
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className='chmrev'>
            <span className='chemrev1'> Student Feedback </span>
            <hr />
            <div className='chemrev2'>
              {course.courseReviews.length ? (
                course.courseReviews.map((r) => <ReviewCard rev={r} />)
              ) : (
                <div>No Reviews</div>
              )}
            </div>
          </div>
        </div>
        <div className='chmpst'>
          <div className='chmpst1'>
            <span>
              <MdOndemandVideo fill={c1} />
            </span>
            Course Duration : {course.courseDuration} Hours
          </div>
          <div className='chmpst1'>
            <span>
              <BsFillPeopleFill fill={c1} />
            </span>
            {course.numberOfStudentEnrolled} Students
          </div>
          <div className='chmpst1'>
            <span>
              <BsStarFill fill={c1} />
            </span>
            {course.courseRating} Course Rating
          </div>
          <div className='chmpst1'>
            <span>
              <IoMdChatbubbles fill={c1} />
            </span>
            English
          </div>
        </div>
      </div>
      <button className='mbbut' onClick={handleRegister}>
        Register Now For {course.courseFees == "0" ? null : <FaRupeeSign />}
        {course.courseFees == "0" ? "Free" : course.courseFees}
      </button>
    </>
  );
}

export default CourseHomePage;
