import React, { ReactNode } from "react";
import {
  Flex,
  Link,
  Button,
  VStack,
  Input,
} from "@chakra-ui/react";

function Footer() {
  return (
    <>
      <Flex bg="#003022" width="100%" className="footer-response">
        <Flex className="footer-links">
          <VStack paddingTop="60px" paddingLeft="20px">
            <Link className="footer" color="#fff">
              Teach Here
            </Link>
            <Link className="footer" color="#fff">
              Be part
            </Link>
            <Link className="footer" color="#fff">
              Business
            </Link>
            <Link className="footer" color="#fff">
              Blogs
            </Link>
            <Link className="footer" color="#fff">
              Help Center
            </Link>
          </VStack>
          <VStack paddingTop="60px" paddingLeft="20px">
            <Link className="footer" color="#fff">
              About Us
            </Link>
            <Link className="footer" color="#fff">
              Contact Us
            </Link>
            <Link className="footer" color="#fff">
              Download App
            </Link>
            <Link className="footer" color="#fff">
              Register
            </Link>
          </VStack>
          <VStack paddingTop="60px" paddingLeft="20px">
            <Link className="footer" color="#fff">
              Terms
            </Link>
            <Link className="footer" color="#fff">
              Privacy Policy
            </Link>
            <Link className="footer" color="#fff">
              Send Us Mail
            </Link>
          </VStack>
        </Flex>
        <Flex justifyContent="space-around" padding="10% 5%">
          <Input
            placeholder="Send Your Feedback"
            color="#fff"
            width="70%"
          ></Input>
          <Button width="20%">Send</Button>
        </Flex>
      </Flex>
    </>
  );
}

export default Footer;
