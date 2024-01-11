import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import averageDistribution from "../../../public/images/HowIGotIntoWaterlooComputerScience/averageDistribution.png";
import PhotoBooth from "../../components/PhotoBooth";
import PhotoData from "./photoData/HowIGotIntoWaterlooComputerScience.json";

const HowIGotIntoWaterlooComputerScience = () => {
  return (
    <>
      <VStack marginTop={10}>
        <VStack textAlign={"left"} width="60vw">
          <Heading fontSize="30px" marginBottom={5}>
            How I Got Into Waterloo Computer Science
          </Heading>
          <Text>
            "Congratulations, you have been accepted into the University of
            Waterloo for Computer Science!"
          </Text>
          <Text>
            I stared at the screen in disbelief as the message rang in my head.
            Four years of hard work, stress, and discipline had paid off. I had
            entered my dream school!
          </Text>
          <Text>
            Looking back at the admission season, I remember spending a vast
            amount of time combing through the web for any tips and tricks on
            how to enter this prestigious institution. I found personal blogs
            written by others who had walked this path before me to be the most
            helpful. Thus, I made a promise to myself that if, just if, I was
            accepted, I would write a blog to detail my journey in the hopes of
            helping future generations to come.
          </Text>
          <Text>
            Waterloo's admission process can be divided into three categories:
            grades, contests, and extracurriculars. With only a 4.3% admission
            rate, having a strong and balanced ranking among the three
            categories is imperative to maximizing your chances of admission.
          </Text>
          <Text>
            Finishing high school with a 98.8% top six average, I was in the
            middle-upper range of Waterloo acceptances. My friends who received
            an offer had averages that ranged from 98.0% to 99.5%. Utilizing the
            data from the 2023 Waterloo Computer Science Discord Server, I made
            a normal distribution curve showing the admission averages of 59
            first year Computer Science students:
          </Text>
          <Image src={averageDistribution} />
          <Text>
            Reaching a 98.0% top six will put you in the top 50% of admission
            averages, ensuring that your marks won't hurt your application.
          </Text>
          <Text>
            When it comes to contests, participation in Euclid and the Canadian
            Computing Competition (CCC) is imperative. In your Admission
            Information Form (AIF), Waterloo will specifically ask for your
            score in these two contests. Participation can help an applicant
            while strong performance can almost guarantee an offer. In an
            education system without standardized testing, contests are the only
            way for Waterloo to equally assess everyone's academic performance.
          </Text>
          <Text>
            I received a 39/75 in the Senior Division of the CCC and a 68/100 on
            Euclid. My contest scores were not impressive compared to many of my
            peers. Most applicants had a 45+ on the Senior CCC and a 80+ on the
            Euclid. I would suggest reaching these levels to ensure that your
            contest scores are competitive within the applicant pool.
          </Text>
          <Text>
            As an upper year once said, "Waterloo wants a nerd, but not a
            complete nerd". This is where extracurriculars come in. Your grades
            and contest scores display your technical skills. Whereas,
            extracurriculars are an opportunity to showcase your soft skills and
            create an image of a well-rounded person.
          </Text>
          <Text>
            During high school, I was the President of Business SHSM, Senior
            Lecturer of Coding Club, and volunteered as a Math and Computer
            Science Tutor. In my AIF, I was able to expand on the leadership,
            public speaking, and time management skills I gained through these
            experiences. I would suggest becoming the President of at least one
            club so you can adequately answer questions regarding leadership and
            interpersonal skills. Having an executive position in a
            computer-related club will show your passion for the subject and
            your ability to connect with like-minded people. Through
            volunteering, you display your willingness to help others and
            generosity. Being involved in multiple extracurricular activities
            solidifies your time management skills which are essential during
            university.
          </Text>
          <Text>
            There you have it! My journey to Waterloo is complete. I hope my
            blog has shed some light on the application process and helped you
            as much as previous blogs have helped me. Best of luck with your
            applications!
          </Text>
        </VStack>
      </VStack>

      <PhotoBooth photos={PhotoData} date="June 31" />
    </>
  );
};

export default HowIGotIntoWaterlooComputerScience;
