import {
  HStack,
  VStack,
  Image,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import waterloopLogo from "../../images/WaterloopLogo.png";
interface Props {
  title: string;
  location: string;
  time: string;
  description: string[];
  image: string;
}

const ExperienceBlock = ({
  title,
  location,
  time,
  description,
  image,
}: Props) => {
  return (
    <HStack
      marginBottom={3}
      borderRadius={20}
      textColor="black"
      width="70vw"
      background={"white"}
    >
      <VStack>
        <HStack>
          <Image marginLeft={10} src={image} boxSize={"150px"} />
          <VStack marginTop={5} marginBottom={5} marginRight={5}>
            <Heading fontSize={"20px"}>{title}</Heading>
            <Heading fontSize={"15px"}>
              {location} | {time}
            </Heading>
            <UnorderedList marginLeft={10} textAlign={"left"} fontSize="13px">
              {description.map((item) => (
                <ListItem>{item}</ListItem>
              ))}
            </UnorderedList>
          </VStack>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default ExperienceBlock;
