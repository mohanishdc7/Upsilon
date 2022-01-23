import React from "react";
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
  Text,
  FormHelperText,
  InputRightElement,
  ChakraProvider,
} from "@chakra-ui/react";
import Dashboard from "../../Pages/Dashboard";

const HelpCenter = () => {
  return (
    <Dashboard>
      <Flex justifyContent="center">
        <Text fontSize="35px" color="green">
          FAQs
        </Text>
      </Flex>
      <Flex flexWrap="wrap" justifyContent="center" paddingTop="50px">
        <Flex
          width="43%"
          marginRight="4%"
          marginBottom="5%"
          flexDirection="column"
        >
          <Text
            color="#lightgreen"
            fontSize="25px"
            color="green"
            paddingBottom="20px"
          >
            Is my payment safe and secure?
          </Text>
          <Text fontSize="15px" color="#000">
            Yes! Your payments are completed secured by RazorPay and all
            transactions on the app are monitored on manual basis to ensure this
            fact.
          </Text>
        </Flex>
        <Flex
          width="43%"
          marginRight="4%"
          marginBottom="5%"
          flexDirection="column"
        >
          <Text
            color="#lightgreen"
            fontSize="25px"
            color="green"
            paddingBottom="20px"
          >
            How to register for a course?
          </Text>
          <Text fontSize="15px" color="#000">
            To register a course, simply select it and click on register. It
            shows the price of the course, if it is not a free course and then
            takes you to the fee payment portal on clicking 'proceed to pay'.
            Make the payment, if the course is not free and you are instantly
            registered with the course.
          </Text>
        </Flex>
        <Flex
          width="43%"
          marginRight="4%"
          marginBottom="5%"
          flexDirection="column"
        >
          <Text
            color="#lightgreen"
            fontSize="25px"
            color="green"
            paddingBottom="20px"
          >
            Can I teach a course?
          </Text>
          <Text fontSize="15px" color="#000">
            Yes! Anyone registered with Upsilon can teach a course. For teaching
            a paid course, you must fill out your payment details. You will be
            prompted if you have not done that the first time you offer a paid
            course.
          </Text>
        </Flex>
        <Flex
          width="43%"
          marginRight="4%"
          marginBottom="5%"
          flexDirection="column"
        >
          <Text
            color="#lightgreen"
            fontSize="25px"
            color="green"
            paddingBottom="20px"
          >
            Can I get a refund in a course?
          </Text>
          <Text fontSize="15px" color="#000">
            Yes! You can get a refund if applied for within 7 days of the course
            commencement. You must fill out a specific reason for a refund. You
            will be refunded back within two days into your Upsilon wallet.
          </Text>
        </Flex>
        <Flex
          width="43%"
          marginRight="4%"
          marginBottom="5%"
          flexDirection="column"
        >
          <Text
            color="#lightgreen"
            fontSize="25px"
            color="green"
            paddingBottom="20px"
          >
            How to withdraw money from the Upsilon wallet?
          </Text>
          <Text fontSize="15px" color="#000">
            Simply go to your wallet and click the withdraw button. Your
            withdraw request will be registered and the specific money will be
            transferred to your bank account within less than 7 days.
          </Text>
        </Flex>
      </Flex>
    </Dashboard>
  );
};

export default HelpCenter;
