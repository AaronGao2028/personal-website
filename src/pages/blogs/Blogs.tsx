import { Heading, VStack } from "@chakra-ui/react";
import Data from "./Data.json";
import BlogBlock from "./BlogBlock";

const Blogs = () => {
  return (
    <VStack marginTop={10} minHeight="100vh">
      <Heading marginBottom={10}>BLOGS</Heading>
      {Data.map((data) => (
        <BlogBlock
          path={data.path}
          title={data.title}
          time={data.time}
          description={data.description}
          image={data.image}
        />
      ))}
    </VStack>
  );
};

export default Blogs;
