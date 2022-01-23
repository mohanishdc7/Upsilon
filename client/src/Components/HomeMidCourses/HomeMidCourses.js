import { Card, Grid, createTheme, ThemeProvider, Box } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "../Utilities/Constants";
import Course from "./Course";
import './Course.css'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      md: 730,
      lg: 1150,
      xl: 1550,
    },
  },
});

function HomeMidCourses() {
  const history = useHistory();
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const body = {
      "filter": "Rating",
      "tags": JSON.stringify([]),
      "regex": "",
      "index": 0,
    };
    const demoUserToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU2ZGUyNGUwY2E5MjVhYjA5YmY1NTEiLCJpYXQiOjE2MzMwODI5NzZ9.y6XwRqXkONmWu2V04oi__FsHn1Ej5tNt6YFePIZ6-e0";
    axios
      .post(`${API}/paging`, body, { headers: { "token": demoUserToken } })
      .then((res) => {
        setCourses(res.data.courses);
        console.log(courses);
      })
      .catch((e) => {
        alert("Error" + e);
      });
  }, []);

  return (
    <Box bg="#fff">
      <div
        className="top"
        style={{
          textAlign: "center",
          fontSize: "50px",
          color: "#191919",
          paddingTop: "20px",
          backgroundColor: "#edf2f6",
        }}
      >
        TOP COURSES
      </div>
      <Grid
        container
        style={{
          width: "100%",
          margin: "0",
          boxSizing: "border-box",
          backgroundColor: "#edf2f6",
        }}
        spacing={5}
      >
        {courses != null ? (
          courses.map((c) => (
            <Grid
              style={{ display: "flex", justifyContent: "center" }}
              item
              xs={12}
              md={6}
              lg={4}
              xl={3}
              key={c.id}
            >
             <div className="hmdch" onClick={()=>{history.push(`/course/${c._id}`)}}>
              <Course course={c} />
            </div>
            </Grid>
          ))
        ) : (
          <div></div>
        )}
      </Grid>
    </Box>
  );
}

export default HomeMidCourses;
