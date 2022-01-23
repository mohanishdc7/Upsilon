import React from 'react'
import {
    Flex,
    Button,
    Text,
    Popover,
    PopoverBody, Box,
    PopoverTrigger, NumberInput,
    PopoverContent,
    Input,
    PopoverArrow,
    FormControl, NumberInputField,
    PopoverHeader, Stack,
    PopoverCloseButton
} from "@chakra-ui/react";
import Dashboard from '../../Pages/Dashboard';
import Card from './Card';
import '../../styles/studentpage.css';
import { useHistory } from 'react-router-dom';
import { Radio, RadioGroup } from "@chakra-ui/react"

const StudentPage = () => {
    const [value, setValue] = React.useState("1");
    let y = 0;
    if (value === 1) {
        y = 1;
    }
    const id = 214124;
    const history = useHistory();
    const addCourse = () => {
        history.push(`/addcourse/${id}`);
    }

    return (
        <>
            <Dashboard>
                <Box>
                    <Box>
                        <Text fontSize="26px">
                            Your Total Students List
                        </Text>
                        <br />
                        <table>
                            <tr>
                                <th>Course Name</th>
                                <th>Student Name</th>
                            </tr>
                            <tr>
                                <td>React</td>
                                <td>Maria Anders</td>
                            </tr>
                            <tr>
                                <td>Node.js</td>
                                <td>Francisco Chang</td>
                            </tr>
                            <tr>
                                <td>Ernst Handel</td>
                                <td>Roland Mendel</td>
                            </tr>
                            <tr>
                                <td>Island Trading</td>
                                <td>Helen Bennett</td>
                            </tr>
                            <tr>
                                <td>Laughing Bacchus Winecellars</td>
                                <td>Yoshi Tannamuri</td>
                            </tr>
                            <tr>
                                <td>Magazzini Alimentari Riuniti</td>
                                <td>Giovanni Rovelli</td>
                            </tr>
                        </table>
                        <br />
                        <br />
                    </Box>
                    <Flex width="100%" justifyContent="center">
                        <Flex justifyContent="space-between" width="90%">
                            <Text fontSize="40px">
                                Your Courses
                            </Text>
                            <Popover placement="left-start">
                                <PopoverTrigger>
                                    <Button bg="#191919" color="#fff" _hover={{ color: "#fff", bg: "#191919" }}>Add Course</Button>
                                </PopoverTrigger>
                                <PopoverContent width="500px">
                                    <PopoverHeader fontWeight="semibold">Create Course</PopoverHeader>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverBody>
                                        <FormControl>
                                            <Input required placeholder="Course Name" marginBottom="20px"></Input>
                                            <Input required placeholder="Desciprtion about course" marginBottom="20px"></Input>
                                            <Input required placeholder="Course Creater Name" marginBottom="20px"></Input>
                                            <NumberInput required marginBottom="20px">
                                                <NumberInputField placeholder="Enter Price in INR">
                                                </NumberInputField>
                                            </NumberInput>
                                            <Text fontSize="20px" paddingBottom="8px">Course Mode :</Text>
                                            <RadioGroup onChange={setValue} value={value} marginBottom="20px">
                                                <Stack direction="row">
                                                    <Radio value="1">Online</Radio>
                                                    <Radio value="2">Offline</Radio>
                                                </Stack>
                                            </RadioGroup>
                                            {y ?
                                                <Input required placeholder="Course Location" marginBottom="20px"></Input>
                                                :
                                                <Input required placeholder="Course Location" marginBottom="20px"></Input>
                                            }
                                            <Button color="#fff" bg="#191919" _hover={{ color: "#191919", bg: "#f3f3f3" }}>All Set ?!!!</Button>
                                        </FormControl>
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                        </Flex>
                        <Popover placement="left-start">
                            <PopoverContent width="500px">
                                <PopoverHeader fontWeight="semibold">Set Class</PopoverHeader>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverBody>
                                    <FormControl>
                                        <Input required placeholder="Course Id" marginBottom="20px"></Input>
                                        <Input required placeholder="new Date" marginBottom="20px"></Input>
                                        <Button color="#fff" bg="#191919" _hover={{ color: "#191919", bg: "#f3f3f3" }}>All Set ?!!!</Button>
                                    </FormControl>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </Flex>
                    <Flex flexWrap="wrap" justifyContent="center">
                        <Card coursename="Node.js Course" shortdescription="About Node.js technologies and usage" price="20$" realprice="10$" />
                        <Card coursename="Node.js Course" shortdescription="About Node.js technologies and usage" price="20$" realprice="10$" />
                        <Card coursename="Node.js Course" shortdescription="About Node.js technologies and usage" price="20$" realprice="10$" />
                        <Card coursename="Node.js Course" shortdescription="About Node.js technologies and usage" price="20$" realprice="10$" />
                    </Flex>
                </Box>
            </Dashboard>
        </>
    )
}

export default StudentPage
