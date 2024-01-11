import {
  HStack,
  VStack,
  Image,
  Heading,
  Text,
  background,
} from "@chakra-ui/react";
import { useState } from "react";
import { useHref, useNavigate } from "react-router-dom";

interface Props {
  title: string;
  time: string;
  description: string;
  image: string;
  path: string;
}

const BlogBlock = ({ title, time, description, image, path }: Props) => {
  const [isOnBlock, setIsOnBlock] = useState(false);
  const navigate = useNavigate();

  return (
    <HStack
      id="block"
      cursor={"pointer"}
      onMouseEnter={() => setIsOnBlock(true)}
      onMouseLeave={() => setIsOnBlock(false)}
      onClick={() => navigate(path)}
      marginBottom={3}
      borderRadius={20}
      textColor="black"
      width="70vw"
      background={isOnBlock ? "gray" : "white"}
    >
      <VStack>
        <HStack>
          <Image marginLeft={10} src={image} boxSize={"150px"} />
          <VStack marginTop={5} marginBottom={5} marginRight={5} marginLeft={5}>
            <Heading fontSize={"20px"}>{title}</Heading>
            <Heading fontSize={"15px"}>{time}</Heading>
            <Text textAlign={"left"}>{description}</Text>
          </VStack>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default BlogBlock;
