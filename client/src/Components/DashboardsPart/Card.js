import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import "../../styles/dashboard.css";
const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

export default function ProductSimple(props) {
  //   const [course, setCourse] = useState(null);

  //   useEffect(() => {
  //     await axios
  //       .post(`${API}/signin`, user)
  //       .then((res) => {
  //         this.authenticated = true;
  //         this.usertoken = res.data.token;
  //         User.setFields(res.data.user);
  //         console.log(User);
  //         cb();
  //       })
  //       .catch((error) => {
  //         if (error.response) {
  //           if (error.response.status === 400) {
  //             alert("Please SignUp First");
  //           } else if (error.response.status === 401) {
  //             alert("Invalid Password");
  //           }
  //         }
  //       });
  //   }, []);

  console.log(props);

  return (
    <Center py={12}>
      <Box
        marginLeft="20px"
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={props.course.courseImage}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            <a href="coursename">{props.course.courseName}</a>
          </Text>
          <Heading
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={500}
            textAlign="center"
          >
            {props.course.courseDescription}
          </Heading>
          {props.from === "enrolled" ? (
            <div></div>
          ) : (
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                Rs. {props.course.courseFees}
              </Text>
              <Text textDecoration={"line-through"} color={"gray.600"}>
                {props.course.courseFees * 1.2}
              </Text>
            </Stack>
          )}
        </Stack>
      </Box>
    </Center>
  );
}
