import {
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import Data from "./Data.json";
import ProjectBlock from "./ProjectBlock";

const Projects = () => {
  return (
    <VStack marginTop={10} minHeight="100vh">
      <Heading marginBottom={10}>PROJECTS</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {Data.map((data) => (
          <ProjectBlock
            title={data.title}
            description={data.description}
            image={data.image}
            path={data.path}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default Projects;
