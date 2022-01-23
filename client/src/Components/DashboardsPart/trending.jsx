import React from 'react'
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

const Trending = () => {
    return (
        <Dashboard>
            <Flex flexWrap="wrap" width="100%" justifyContent="center">
                <Card coursename="Node.js Course" shortdescription="About Node.js technologies and usage" price="20$" realprice="10$" />
                <Card coursename="Node.js Course" shortdescription="About Node.js technologies and usage" price="20$" realprice="10$" />
                <Card coursename="Node.js Course" shortdescription="About Node.js technologies and usage" price="20$" realprice="10$" />
                <Card coursename="Node.js Course" shortdescription="About Node.js technologies and usage" price="20$" realprice="10$" />
            </Flex>
        </Dashboard>
    )
}

export default Trending
