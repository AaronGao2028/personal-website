import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import githubLogo from "./github-logo.png";
import ExperienceBlock from "./ExperienceBlock";
import Data from "./Data.json";

const Experience = () => {
  return (
    <VStack marginTop={10} minHeight="100vh">
      <Heading marginBottom={10}>EXPERIENCE</Heading>
      {Data.map((data) => (
        <div>
          <ExperienceBlock
            title={data.title}
            location={data.location}
            time={data.time}
            description={data.description}
            image={data.image}
          />
        </div>
      ))}
    </VStack>
  );
};

export default Experience;
