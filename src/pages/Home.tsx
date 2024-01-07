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
            height={"300px"}
          />
          <VStack marginLeft={50}>
            <Heading fontSize="40px" marginTop={20} alignItems={"center"}>
              {intro}
            </Heading>
            <Heading fontSize="30px" alignItems={"center"}>
              I am a {text}
              <Cursor cursorStyle="|" />
            </Heading>
          </VStack>
        </HStack>
      </VStack>
    </>
  );
};

export default Home;
