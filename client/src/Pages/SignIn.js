import React, { useEffect, useState } from "react";
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
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

import Auth from "../Components/Auth/Auth";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const App = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target.values);
    Auth.login(
      () => {
        props.history.push("/dashboard");
      },
      email,
      password
    );
  };

  useEffect(() => {
    if (Auth.isAuthenticated() === true) {
      props.history.push("/dashboard");
    }
  }, []);

  return (
    <React.Fragment>
      <Flex
        flexDirection='column'
        width='100wh'
        height='100vh'
        backgroundColor='gray.200'
        justifyContent='center'
        alignItems='center'
      >
        <Stack
          flexDir='column'
          mb='2'
          justifyContent='center'
          alignItems='center'
        >
          <Avatar bg='teal.500' />
          <Heading color='teal.400'>Upsilon</Heading>
          <Box minW={{ base: "90%", md: "408px" }}>
            <form onSubmit={handleSubmit}>
              <Stack
                spacing={4}
                p='1rem'
                backgroundColor='whiteAlpha.900'
                boxShadow='md'
              >
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<CFaUserAlt color='gray.300' />}
                    />
                    <Input
                      type='email'
                      placeholder='email address'
                      onChange={(event) => setEmail(event.currentTarget.value)}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      color='gray.300'
                      children={<CFaLock color='gray.300' />}
                    />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder='Password'
                      onChange={(event) =>
                        setPassword(event.currentTarget.value)
                      }
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText textAlign='right'>
                    <Link>forgot password?</Link>
                  </FormHelperText>
                </FormControl>
                <Button
                  borderRadius={0}
                  type='submit'
                  variant='solid'
                  colorScheme='teal'
                  width='full'
                >
                  Login
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
        <Box>
          New to us?{" "}
          <Link color='teal.500' href='/signup'>
            Sign Up
          </Link>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default App;
