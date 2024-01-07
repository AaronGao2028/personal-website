import { HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

interface Photo {
  image: string;
  description: string;
}

interface Props {
  photos: Photo[];
  date: string;
}

const PhotoBooth = ({ date, photos }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex == photos.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousSlide = () => {
    if (currentIndex == 0) {
      setCurrentIndex(photos.length - 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <VStack>
        <Heading marginBottom={2} marginTop={5} fontSize={"20px"}>
          Photobooth: {date}
        </Heading>
        <HStack>
          <Text
            cursor="pointer"
            fontSize="40px"
            onClick={() => previousSlide()}
          >
            ❰
          </Text>
          <Image src={photos[currentIndex].image} height="300px" />
          <Text cursor="pointer" fontSize="40px" onClick={() => nextSlide()}>
            ❱
          </Text>
        </HStack>
        <Text>{photos[currentIndex].description}</Text>

        <HStack>
          {photos.map((photo, index) => (
            <div>
              <Text
                color={index === currentIndex ? "black" : "white"}
                cursor="pointer"
                fontSize={"20px"}
                onClick={() => goToSlide(index)}
              >
                ●
              </Text>
            </div>
          ))}
        </HStack>
      </VStack>
    </>
  );
};

export default PhotoBooth;
