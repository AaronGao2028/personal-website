import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Blogs from "./pages/blogs/Blogs";
import CompetitiveProgramming from "./pages/competitive-programming/CompetitveProgramming";
import Experience from "./pages/experience/Experience";
import { Grid, GridItem, VStack } from "@chakra-ui/react";
import HowIGotIntoWaterlooComputerScience from "./pages/blogs/HowIGotIntoWaterlooComputerScience";
import ReflectionOfMy1ATermAtWaterloo from "./pages/blogs/ReflectionOfMy1ATermAtWaterloo";
import MyTripToChina from "./pages/blogs/MyTripToChina";
import Projects from "./pages/projects/Projects";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div background-color="white">
      <Navbar />

      <VStack paddingTop="10px" paddingBottom="100px">
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route
              path="/competitive-programming"
              element={<CompetitiveProgramming />}
            />
            <Route path="/experience" element={<Experience />} />
            <Route
              path="/blogs/How-I-Got-Into-Waterloo-Computer-Science"
              element={<HowIGotIntoWaterlooComputerScience />}
            />
            <Route
              path="/blogs/Reflection-Of-My-1A-Term-At-Waterloo"
              element={<ReflectionOfMy1ATermAtWaterloo />}
            />
            <Route path="/blogs/My-Trip-To-China" element={<MyTripToChina />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </VStack>

      <Footer />
    </div>
  );
}

export default App;
