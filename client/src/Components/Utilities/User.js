import axios from "axios";
import { Redirect } from "react-router";
import { API } from "./Constants";

class User {
  constructor() {
    // this.state = JSON.parse(localStorage.getItem("user")) || null;
    // this.state = {
    //   experience: [],
    //   interests: [],
    //   myCourses: [],
    //   phone: [],
    //   qualifications: [],
    //   role: "",
    //   specialities: [],
    //   username: "",
    //   email: "",
    //   img: "",
    // };
    this.experience = JSON.parse(localStorage.getItem("experience")) || [];
    this.interests = JSON.parse(localStorage.getItem("interests")) || [];
    this.myCourses = JSON.parse(localStorage.getItem("myCourses")) || [];
    this.phone = JSON.parse(localStorage.getItem("phone")) || "";
    this.qualifications =
      JSON.parse(localStorage.getItem("qualifications")) || [];
    this.role = JSON.parse(localStorage.getItem("role")) || "";
    this.specialities = JSON.parse(localStorage.getItem("specialities")) || [];
    this.username = JSON.parse(localStorage.getItem("username")) || "";
    this.email = JSON.parse(localStorage.getItem("email")) || "";
    this.img = JSON.parse(localStorage.getItem("img")) || "";
  }

  setFields(user) {
    // this.state = JSON.parse(user);
    // localStorage.setItem("user", JSON.stringify(user));
    this.experience = user.experience;
    localStorage.setItem("experience", JSON.stringify(this.experience));
    this.interests = user.interests;
    localStorage.setItem("interests", JSON.stringify(this.interests));
    this.myCourses = user.myCourses;
    localStorage.setItem("myCourses", JSON.stringify(this.myCourses));
    this.phone = user.phone;
    localStorage.setItem("phone", JSON.stringify(this.phone));
    this.qualifications = user.qualifications;
    localStorage.setItem("qualifications", JSON.stringify(this.qualifications));
    this.role = user.role;
    localStorage.setItem("role", JSON.stringify(this.role));
    this.specialities = user.specialities;
    localStorage.setItem("specialities", JSON.stringify(this.specialities));
    this.username = user.username;
    localStorage.setItem("username", JSON.stringify(this.username));
    this.email = user.email;
    localStorage.setItem("email", JSON.stringify(this.email));
    this.img = user.img;
    localStorage.setItem("img", JSON.stringify(this.img));
  }
}

export default new User();
