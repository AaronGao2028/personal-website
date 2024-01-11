import {
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import stockMasterImage from "../../../public/images/projects/stockMasterList.png";
import ProjectBlock from "./ProjectBlock";
import Data from "./Data.json";
import BlogBlock from "./BlogBlock";

const Projects = () => {
  return (
    <VStack marginTop={10} minHeight="100vh">
      <Heading marginBottom={10}>PROJECTS</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {Data.map((data) => (
          <BlogBlock
            path={data.path}
            title={data.title}
            time={data.time}
            description={data.description}
            image={data.image}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default Projects;
