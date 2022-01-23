import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import "./styles.css";
import axios from "axios";
import { API } from "../../Components/Utilities/Constants";
import { useHistory } from "react-router";
import { GrNext, GrPrevious } from "react-icons/gr";
import Course from "../../Components/HomeMidCourses/Course";

function SearchCourses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [previousSearchQuery, setPreviousSearchQuery] = useState(null);
  const history = useHistory();
  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(0);
  const [next, setNext] = useState(false);

  useEffect(() => {
    // alert("Hi!");
    if (0) {
    } else {
      setCourses([]);
      setPreviousSearchQuery(searchQuery);
      console.log(searchQuery);
      const timeout = setTimeout(() => {
        const body = {
          filter: "Rating",
          tags: JSON.stringify([]),
          regex: searchQuery,
          index: page,
        };
        const demoUserToken =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU2ZGUyNGUwY2E5MjVhYjA5YmY1NTEiLCJpYXQiOjE2MzMwODI5NzZ9.y6XwRqXkONmWu2V04oi__FsHn1Ej5tNt6YFePIZ6-e0";
        axios
          .post(`${API}/paging`, body, { headers: { token: demoUserToken } })
          .then((res) => {
            console.log("yeah");
            console.log(res);
            setCourses(res.data.courses);
            if (res.data.courses.length === 15) setNext(true);
            else setNext(false);
          })
          .catch((e) => {
            alert("Error" + e);
          });
      }, 10);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [searchQuery, page]);

  return (
    <>
      {/* <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchPage={true}
      /> */}
      {/* <Top /> */}
      <hr />
      <div
        className='seamain'
        style={{
          maxwidth: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span className='tog'>{/* <Filters /> */}</span>
        {courses !== null ? (
          <div>
            <div className='bm1'>
              {courses.map((course) => (
                <div
                  className='bi1'
                  onClick={() => history.push(`/course/${course._id}`)}
                >
                  <Course course={course} />
                </div>
              ))}
            </div>
            <div className='pgnav'>
              {page === 0 ? null : (
                <span className='svb'>
                  <GrPrevious
                    onClick={() => setPage((e) => e - 1)}
                    fontSize='30px'
                    style={{ margin: "15px" }}
                  />
                </span>
              )}
              <button
                className='c123'
                style={{
                  backgroundColor: "#8a2be2",
                  color: "white",
                }}
              >
                {page + 1}
              </button>
              {next ? (
                <span className='svn'>
                  <GrNext
                    onClick={() => setPage((e) => e + 1)}
                    fontSize='30px'
                    style={{ margin: "15px" }}
                  />
                </span>
              ) : null}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}

export default SearchCourses;
