import { HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import profile from "../../public/images/profile.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const [intro] = useTypewriter({
    words: ["Hi, My name is Aaron!"],
    loop: 1,
  });
  const [text] = useTypewriter({
    words: ["Software Developer", "Competitive Programmer", "Bodybuilder"],
    loop: 10,
  });

  return (
    <>
      <VStack minHeight="100vh">
        <HStack marginTop={100}>
          <Image
            marginLeft={10}
            borderRadius={50}
            src={profile}
            height={{ sm: "200px", md: "400px", lg: "400px", xl: "500px" }}
          />
          <VStack marginLeft={50}>
            <Heading
              fontSize={{ sm: "20px", md: "30px", lg: "40px", xl: "60px" }}
              marginTop={20}
              alignItems={"center"}
            >
              {intro}
            </Heading>
            <Heading
              fontSize={{ sm: "10px", md: "20px", lg: "30px", xl: "40px" }}
              alignItems={"center"}
            >
              I am a {text}
              <Cursor cursorStyle="|" />
            </Heading>

            <VStack marginTop={10}>
              <Text
                fontSize={{ sm: "10px", md: "20px", lg: "15px", xl: "20px" }}
                textAlign={"left"}
              >
                Hi there, thanks for visiting my personal website! I am a
                student at the University of Waterloo pursuing a degree in
                Computer Science currently in my 1B term. I enjoy programming
                innovative applications, competitive programming, and
                powerlifting.
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </VStack>
    </>
  );
};

export default Home;
