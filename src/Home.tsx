import { Button, HStack, Heading, Image, Text } from "@chakra-ui/react";
import profile from "../images/profile_pic.png";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const openResume = () => {
  window.open("https://drive.google.com/file/d/1Cf-5SjBb2imhXcOGCrmxeWtc_HftxZaM/view?usp=sharing");    
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
        <img
          src={profile}
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

      <p>
        Hi there, thanks for visiting my personal website! I am a
        student at the University of Waterloo pursuing a degree in
        Computer Science currently on my 2A study term. I enjoy building
        financial models, competitive programming, and
        powerlifting. Perhaps you would like to see my resume, 
        connect with me on LinkedIn, or check out my projects on
        Github. All of which you can find below 🙂
      </p>

      <button onClick={openResume}>Resume</button>
      <button onClick={openLinkedIn}>LinkedIn</button>
      <button onClick={openGitHub}>GitHub</button>
    </>
  );
};

export default Home;
