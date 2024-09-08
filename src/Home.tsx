import { Button, HStack, Heading, Image, Text } from "@chakra-ui/react";
import profile from "../images/profile_pic.png";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const openResume = () => {
  window.open("images/Resume.pdf");    
}

const openLinkedIn = () => {
  window.open("https://www.linkedin.com/in/gao-aaron/");
}

const openGitHub = () => {
  window.open("https://github.com/AaronGao2028");
}

const Home = () => {
  const [text] = useTypewriter({
    words: ["Quantitative Developer", "Competitive Programmer", "Powerlifter"],
    loop: 0,
  });

  return (
    <>
      <HStack>
        <Image
          borderRadius={50}
          src={profile}
          height={{ sm: "50px", md: "70px", lg: "100px", xl: "100px" }}
        />
        <Heading fontSize={{ sm: "10px", md: "20px", lg: "30px", xl: "40px" }}>
          Hi, my name is Aaron!
        </Heading>
      </HStack>
      
      <Heading marginTop={5}
        fontSize={{ sm: "10px", md: "20px", lg: "30px", xl: "40px" }}
      >
        I am a {text}
        <Cursor cursorStyle="|" />
      </Heading>

      <Text
        marginTop={5}
        fontSize={{ sm: "10px", md: "20px", lg: "15px", xl: "15px" }}
        textAlign={"left"}
        width={500}
      >
        Hi there, thanks for visiting my personal website! I am a
        student at the University of Waterloo pursuing a degree in
        Computer Science currently on my 2A study term. I enjoy building
        financial models, competitive programming, and
        powerlifting. Perhaps you would like to see my resume, 
        connect with me on LinkedIn, or check out my projects on
        Github. All of which you can find below 🙂
      </Text>

      <button onClick={openResume}>Resume</button>
      <button onClick={openLinkedIn}>LinkedIn</button>
      <button onClick={openGitHub}>GitHub</button>
    </>
  );
};

export default Home;
