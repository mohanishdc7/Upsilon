import React from 'react'
import {
    Box,
    Flex,
    Link,
    Text,
    Button,
    VStack,
    chakra,
    Input,
    VisuallyHidden,
    useColorModeValue,
} from "@chakra-ui/react";
import Dashboard from '../../Pages/Dashboard';
import '../../styles/landingpage.css';

const CourseManage = () => {
    return (
        <Dashboard>
            <Text paddingBottom="20px" color="#fff" textTransform="uppercase">Schedule Class Date And Time</Text>
            <form action="/coursename">
                <input type="date" color="#191919"></input><br />
                <Box marginTop="20px">
                    <input type="time" color="#191919" marginTop="20px"></input>
                </Box>
                <br />
                <Button bg="#fff" color="#191919" _hover={{ color: "#191919", bg: "#fff" }} marginLeft="20px" marginTop="20px" type="submit">Scheduled Class</Button>
            </form>
        </Dashboard>
    )
}

export default CourseManage
