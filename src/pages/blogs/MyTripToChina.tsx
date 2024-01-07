import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import averageDistribution from "../../../public/images/averageDistribution.png";
import PhotoBooth from "../../components/PhotoBooth";
import PhotoData from "./photoData/MyTripToChina.json";

const MyTripToChina = () => {
  return (
    <>
      <VStack marginTop={10}>
        <VStack textAlign={"left"} width="60vw">
          <Heading fontSize="30px" marginBottom={5}>
            My Trip To China
          </Heading>
          <Text>
            “This is your captain speaking. We will be arriving in Shanghai in
            15 minutes”. It had been 8 years since I last saw my grandparents.
            Due to the coronavirus, our trip had been postponed from the March
            Break of 2020 to the Summer of 2023. Perfect. Just in time for the
            hot China summer.
          </Text>
          <Text>
            While I can speak and understand Mandarin fluently, I am completely
            illiterate. Thus, the fear of getting lost among the street signs
            was a real concern. Luckily, the major streets all came with an
            English translation and I traveled alongside relatives every step of
            the way. Growing up in Canada, I rarely see my extended family who
            majorly reside in China. This trip allowed me to visit cousins,
            uncles, aunts, and grandparents who I haven’t seen since I was a
            little boy.
          </Text>
          <Text>
            Visiting the historical sites alongside the famous Nanjing Road, I
            saw the evolution of architecture and culture since China first
            opened its doors to foreign trade in the 19th century. The road was
            a mosaic of different cultures and periods as modern shopping malls
            stood next to 19th century Victorian Era buildings which once served
            as the British Custom Office.
          </Text>
          <Text>
            On the way back, we visited Taiwan and stayed in the Grand Hotel,
            which once used to accommodate foreign ambassadors staying in Tapei
            (President Eisenhower lived there in 1960!). I also visited the
            Taiwan National Museum which stored ancient artifacts spanning
            thousands of years.
          </Text>
          <Text>
            Flying back across the globe, I landed in Toronto once more. While
            it was a fun journey, I can without a doubt, that nowhere is as good
            as home.
          </Text>
        </VStack>
      </VStack>
      <PhotoBooth photos={PhotoData} date="July 1 - August 2" />
    </>
  );
};

export default MyTripToChina;
