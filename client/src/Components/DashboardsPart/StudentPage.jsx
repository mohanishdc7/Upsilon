import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  ChakraProvider,
  Button,
  Popover,
  PopoverBody,
  PopoverTrigger,
  NumberInput,
  PopoverContent,
  Input,
  PopoverArrow,
  FormControl,
  NumberInputField,
  PopoverHeader,
  PopoverCloseButton,
} from "@chakra-ui/react";
import Dashboard from "../../Pages/Dashboard";
import Card from "./Card";
import Card1 from "./Card1";

const StudentPage = () => {
  const courses = [
    {
      quiz: "1",
      date: "hello",
      topic: "fsafa",
    },
  ];
  const x = courses.map((course) => {
    <li>{course.quiz}</li>;
  });

  return (
    <>
      <Dashboard>
        <Text color="#fff" fontSize="30px">
          Your Assignment List And Quiz are here
        </Text>
        <ui>{x}</ui>
        <Popover placement="left-start">
          <PopoverTrigger>
            <Button
              bg="#fff"
              color="#191919"
              _hover={{ color: "#fff", bg: "#191919" }}
              float="right"
            >
              Rate Course
            </Button>
          </PopoverTrigger>
          <PopoverContent width="500px">
            <PopoverHeader fontWeight="semibold" color="#fff">
              Create Course
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <FormControl>
                <Input
                  required
                  placeholder="Course Name"
                  marginBottom="20px"
                ></Input>
                <NumberInput required marginBottom="20px">
                  <NumberInputField placeholder="Enter Rating out of 5"></NumberInputField>
                </NumberInput>
                <Button
                  color="#fff"
                  bg="#191919"
                  _hover={{ color: "#191919", bg: "#f3f3f3" }}
                >
                  Rate Now
                </Button>
              </FormControl>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Dashboard>
    </>
  );
};

export default StudentPage;
