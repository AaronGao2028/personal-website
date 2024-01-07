import { HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import profile from "../../public/images/profile.jpg";

const Home = () => {
  return (
    <>
      <VStack height="100vh">
        <Heading alignItems={"center"}>Hi, My name is Aaron</Heading>
        <HStack>
          <Image borderRadius={50} src={profile} height={"300px"} />;
          <VStack textAlign={"left"} fontSize="20px">
            <Text>
              I am a first year student at the University of Waterloo pursuing a
              degree in Computer Science. I am currently in my 1B term and
              seeking summer internships.
            </Text>
            <Text>
              I enjoy creating full stack web applications using a variety of
              libraries, frameworks, and developer tools.
            </Text>
            <Text>
              When I am not programming, I enjoy weightlifting, exploring the
              stock market, and reading history!
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </>
  );
};

export default Home;
