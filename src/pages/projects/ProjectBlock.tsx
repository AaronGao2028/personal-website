import { Heading, VStack, Text, Image } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  title: string;
  description: string;
  image: string;
  path: string;
}

const ProjectBlock = ({ title, description, image, path }: Props) => {
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
      <Heading marginTop={5} fontSize={"30px"}>
        {title}
      </Heading>
      <Text>{description}</Text>
      <Image
        marginBottom={5}
        marginLeft={5}
        marginRight={5}
        borderRadius={10}
        src={image}
        height="150px"
      />
    </VStack>
  );
};

export default ProjectBlock;
