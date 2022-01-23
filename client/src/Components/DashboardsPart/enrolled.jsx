import React, { useEffect, useState } from 'react'
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
    ChakraProvider,
} from "@chakra-ui/react";
import Dashboard from '../../Pages/Dashboard';
import Card from './Card';
import User from '../Utilities/User';
import Auth from '../Auth/Auth';
import axios from 'axios';
import CourseS from './CourseS';
import Course from '../HomeMidCourses/Course';
import { API } from '../Utilities/Constants';
import './styles.css'
import { useHistory } from 'react-router';

const Enrolled = () => {
    const [myCourses, setMyCourses] = useState(null);

    useEffect(() => {
        console.log(Auth);
        console.log(Auth.userToken);
         axios.get(`${API}/myCourses`, { headers: { "token": Auth.userToken } })
 .then(response => {
     console.log(response.data.courses[0].courseName);
     setMyCourses(response.data.courses);
  })
 .catch((error) => {
     console.log('error ' + error);
  })
    }, [])

    const history = useHistory();

    return (
        <Dashboard>
            <Flex flexWrap="wrap" width="100%" justifyContent="center">
                {
                   (myCourses)? (myCourses.map((course) => {
                        return <div className="denrh" onClick={()=>{history.push(`/dashboard/cs/${course._id}`)}} > <CourseS course={course} /></div>}))
                        :
                        (<div></div>)
                }
                {/* <Card />
                <Card />
                <Card />
                <Card />
                <Card /> */}
            </Flex>
        </Dashboard>
    )
}

export default Enrolled;
