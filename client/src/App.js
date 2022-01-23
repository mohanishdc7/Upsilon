import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";

import Layout from "./Components/Layout/Layout";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import Search from "./Pages/Search/Search";
import Trending from "./Components/DashboardsPart/trending";
import ManageCourse from "./Components/DashboardsPart/manageCourse";
import Enrolled from "./Components/DashboardsPart/enrolled";
import Help from "./Components/DashboardsPart/HelpCenter";
import Favourite from "./Components/DashboardsPart/Favourite";
import StudentPage from "./Components/DashboardsPart/TeachersPage";
import CourseManage from "./Components/DashboardsPart/CourseManage";
import CourseHomePage from "./Pages/CourseHomePage/CourseHomePage";
import InstructorProfile from "./Pages/InstructorProfile/InstructorProfile";
import StudentPage1 from "./Components/DashboardsPart/StudentPage";
import ProtectedRoute from "./Components/Utilities/ProtectedRoute";
import JitsiComponent from "./Components/MeetingActivity/JitsiComponent";
import MainI from "./Pages/InstructorCourse/MainI";
import MainC from "./Pages/StudentCourse/MainC";
import CreateCourse from "./Pages/CreateCourse";
import Profile from "./Pages/Profile";

// function SecuredRoute(props) {
//   return (
//     <Route
//       path={props.path}
//       render={
//         props.isLoggedIn ? (
//           <props.component props></props.component>
//         ) : (
//           <Redirect to={{ pathname: "/" }}></Redirect>
//         )
//       }
//     ></Route>
//   );
// }

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Layout>
      <ChakraProvider>
        <Box>
          <Router>
            <>
              <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route
                  exact
                  path='/dashboard/createcourse'
                  component={CreateCourse}
                />
                <Route exact path='/dashboard/ci/:courseId' component={MainI} />
                <Route exact path='/dashboard/cs/:courseId' component={MainC} />
                <Route exact path='/search' component={Search} />
                <Route
                  exact
                  path='/course/:courseId'
                  component={CourseHomePage}
                />
                <Route exact path='/user' component={InstructorProfile} />
                <Route exact path='/about' component={About} />
                <Route exact path='/dashboard/profile' component={Profile} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/login' component={SignIn} />
                <Route exact path='/signup' component={SignUp} />
                <Route
                  exact
                  path='/meeting/:meetingId'
                  component={JitsiComponent}
                />
                <ProtectedRoute exact path='/dashboard' component={Dashboard} />
                <ProtectedRoute
                  exact
                  path='/dashboard/trending'
                  component={Trending}
                ></ProtectedRoute>
                <ProtectedRoute
                  exact
                  path='/dashboard/managecourse'
                  component={ManageCourse}
                ></ProtectedRoute>
                <ProtectedRoute
                  exact
                  path='/dashboard/enrolledecourse'
                  component={Enrolled}
                ></ProtectedRoute>
                <ProtectedRoute
                  exact
                  path='/dashboard/help'
                  component={Help}
                ></ProtectedRoute>
                <ProtectedRoute
                  exact
                  path='/dashboard/favourite'
                  component={Favourite}
                ></ProtectedRoute>
                <ProtectedRoute
                  exact
                  path='/dashboard/teacherinfo'
                  component={StudentPage}
                ></ProtectedRoute>
                <ProtectedRoute
                  exact
                  path='/dashboard/coursename'
                  component={CourseManage}
                ></ProtectedRoute>
                <ProtectedRoute
                  exact
                  path='/dashboard/studentpage'
                  component={StudentPage1}
                ></ProtectedRoute>
              </Switch>
            </>
          </Router>
        </Box>
      </ChakraProvider>
    </Layout>
  );
}

export default App;
