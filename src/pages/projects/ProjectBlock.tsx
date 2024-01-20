import { Heading, VStack, Text, Image } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  title: string;
  description: string;
  image: string;
  path: string;
  skills: string;
}

const ProjectBlock = ({ title, description, image, path, skills }: Props) => {
  const [isOnBlock, setIsOnBlock] = useState(false);

  return (
    <VStack
      cursor="pointer"
      onMouseEnter={() => setIsOnBlock(true)}
      onMouseLeave={() => setIsOnBlock(false)}
      onClick={() => window.open(path)}
      borderRadius={20}
      color="black"
      background={isOnBlock ? "#3f5766" : "#728a99"}
    >
      <Heading
        color={isOnBlock ? "white" : "black"}
        marginTop={3}
        fontSize={"30px"}
      >
        {title}
      </Heading>
      <Heading color={isOnBlock ? "white" : "black"} fontSize={""}>
        {skills}
      </Heading>

      <Image
        marginBottom={5}
        marginLeft={5}
        marginRight={5}
        borderRadius={10}
        src={image}
        width="350px"
      />

      <Text color="white" marginLeft={4} marginRight={4} marginBottom={5}>
        {isOnBlock ? description : ""}
      </Text>
    </VStack>
  );
};

export default ProjectBlock;
