import { HStack, Text, VStack, Image } from "@chakra-ui/react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa";

const Footer = () => {
  const logoSize = 25;
  const [isOnGithubLogo, setIsOnGithubLogo] = useState(false);
  const [isOnLinkedinLogo, setIsOnLinkedinLogo] = useState(false);
  const [isOnMailLogo, setIsOnMailLogo] = useState(false);

  return (
    <VStack background="gray" position="absolute" right="0" left="0" bottom="0">
      <HStack marginTop={3}>
        <FaGithub
          onClick={() => window.open("https://github.com/AaronGao2028")}
          cursor="pointer"
          size={logoSize}
          onMouseEnter={() => setIsOnGithubLogo(true)}
          onMouseLeave={() => setIsOnGithubLogo(false)}
          color={isOnGithubLogo ? "black" : "white"}
        />
        <FaLinkedin
          onClick={() => window.open("https://www.linkedin.com/in/gao-aaron/")}
          cursor="pointer"
          size={logoSize}
          onMouseEnter={() => setIsOnLinkedinLogo(true)}
          onMouseLeave={() => setIsOnLinkedinLogo(false)}
          color={isOnLinkedinLogo ? "black" : "white"}
        />
        <FaEnvelope
          onClick={() => window.open("mailto:a43gao@uwaterloo.ca")}
          cursor="pointer"
          size={logoSize}
          onMouseEnter={() => setIsOnMailLogo(true)}
          onMouseLeave={() => setIsOnMailLogo(false)}
          color={isOnMailLogo ? "black" : "white"}
        />
      </HStack>
      <Text fontSize={12}>Copyright © Aaron Gao 2023</Text>
    </VStack>
  );
};

export default Footer;
