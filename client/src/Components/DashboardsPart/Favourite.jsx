import React from 'react'
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,Text,
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

const Favourite = () => {
    return (
        <Dashboard>
            <Flex flexWrap="wrap" justifyContent="center">
                <Card coursename="Node.js Course" shortdescription="About Node.js technologies and usage" price="20$" realprice="10$" />
                <Card coursename="Node.js Course" shortdescription="About Node.js technologies and usage" price="20$" realprice="10$" />
                <Card coursename="Node.js Course" shortdescription="About Node.js technologies and usage" price="20$" realprice="10$" />
                <Card coursename="Node.js Course" shortdescription="About Node.js technologies and usage" price="20$" realprice="10$" />
            </Flex>
        </Dashboard>
    )
}

export default Favourite
