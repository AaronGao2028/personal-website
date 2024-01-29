import React from "react";
import { Link, NavLink } from "react-router-dom";
import IconYellowImg from "../../static/img/logos/Logo.svg";
import Blogs from "../pages/blogs/Blogs";
import { Box, Flex, HStack, Heading, LinkBox, Spacer } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack
      color="white"
      justify={"space-between"}
      position="absolute"
      background={"#add8e6"}
      right="0"
      left="0"
      top="0"
    >
      <Heading marginLeft="200px" fontSize={"30px"} fontFamily={"Arial"}>
        AARON GAO
      </Heading>
      <HStack
        spacing={5}
        marginRight="50px"
        fontSize={"20px"}
        fontFamily={"Arial"}
      >
        <a href="/blogs">Blogs</a>
        <a href="/experience">Experience</a>
        <a href="/projects">Projects</a>
        <a href="https://drive.google.com/file/d/1HGI9gYRvSfAPXm1mKNoI8yKH5ZPcdZP5/view?usp=sharing">
          Resume
        </a>
      </HStack>
    </HStack>
  );
};

export default Navbar;
