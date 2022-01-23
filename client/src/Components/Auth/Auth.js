import axios from "axios";
import { Redirect } from "react-router";
import { API } from "../Utilities/Constants";
import User from "../Utilities/User";

class Auth {
  constructor() {
    console.log(localStorage.getItem("authenticated"));
    this.authenticated =
      localStorage.getItem("authenticated") != null
        ? JSON.parse(localStorage.getItem("authenticated"))
        : false;
    this.userToken =
      localStorage.getItem("userToken") != null
        ? localStorage.getItem("userToken")
        : "";
  }

  async login(cb, email, password) {
    console.log(email + password);
    const user = {
      email: email,
      password: password,
    };

    await axios
      .post(`${API}/signin`, user)
      .then((res) => {
        this.authenticated = true;
        localStorage.setItem("authenticated", true);
        console.log(res.data.token);
        this.userToken = res.data.token;
        localStorage.setItem("userToken", this.userToken);
        User.setFields(res.data.user);
        cb();
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 400) {
            alert("Please SignUp First");
          } else if (error.response.status === 401) {
            alert("Invalid Password");
          }
        }
      });
  }

  async signup(cb, email, password) {
    console.log(email + password);
    const user = {
      email: email,
      password: password,
    };

    await axios
      .post(`${API}/signup`, user)
      .then((res) => {
        console.log("SignedUp");
        cb();
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            alert("Email already in use");
          }
        }
      });
  }

  async logout(cb) {
    console.log("yeah");
    localStorage.setItem("authenticated", false);
    localStorage.setItem("userToken", "");
    console.log("Logged out");
    this.authenticated = false;
    console.log(localStorage.getItem("authenticated"));
    localStorage.clear();
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
