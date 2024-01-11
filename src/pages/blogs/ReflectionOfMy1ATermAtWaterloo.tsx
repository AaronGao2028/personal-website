import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import PhotoBooth from "../../components/PhotoBooth";
import PhotoData from "./photoData/ReflectionOfMy1ATermAtWaterloo.json";

const ReflectionOfMy1ATermAtWaterloo = () => {
  return (
    <>
      <VStack marginTop={10}>
        <VStack textAlign={"left"} width="60vw">
          <Heading fontSize="30px" marginBottom={5}>
            Reflection Of My 1A Term At Waterloo
          </Heading>
          <Text>
            "Hi, my name is Aaron. What is yours?". This question filled the
            campus during the first two weeks of orientation. It was an
            opportunity to meet the people I would be studying with for the next
            5 years without the burden of schoolwork. From Nerf wars in the math
            building to parties in the parking lot, it was an exciting time to
            be a freshman.
          </Text>
          <Text>
            Alas, orientation rolled to an end and classes officially began. As
            a computer science student, I was required to take three compulsory
            courses and two electives. My core courses included Math 137
            (Calculus), Math 135 (Algebra), and CS 135 (Computer Science). My
            electives were Econ 101 (Economics) and COMMST 223 (Public
            Speaking).
          </Text>
          <Text>
            Compared to high school, I had much more free time as there were
            only 2-3 hours of lectures every day. Assignments were less
            time-sensitive and weighed only a small portion of the overall mark.
            Other than the weekly quizzes for Calculus, there was no measurement
            of your performance until midterms. Such a long buildup of classes
            without any tests of your performance was quite a new experience.
          </Text>
          <Text>
            As the midterm season rolled around, I found that I was playing
            catch up with my courses as I stopped all things to focus on one
            midterm at a time. While this ensured that my midterms went
            smoothly, I found the following months to be quite difficult as I
            had to cover the material I missed while the courses took a steep
            learning curve for the finals.
          </Text>
          <Text>
            The final month was the hardest. With the final exams closing in, it
            was time to sit down and review everything that I had learned.
            Complex numbers, Taylor polynomials, and graph theory were the name
            of the game for the core courses. Having done competitive
            programming and AP Calculus in high school, the CS 135 and Math 137
            finals went quite smoothly. However, my neglect of math contests had
            left me underprepared for Math 135 where many questions resembled
            those from Euclid. Luckily, the marking scheme was quite generous
            and I received part marks for my solutions. Overall, my 1A term was
            an exciting, difficult, and fulfilling journey that left me very
            grateful for the winter break I have in front of me.
          </Text>
        </VStack>
      </VStack>
      <PhotoBooth photos={PhotoData} date="December 14" />
    </>
  );
};

export default ReflectionOfMy1ATermAtWaterloo;
