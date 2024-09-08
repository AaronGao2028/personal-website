import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { VStack } from "@chakra-ui/react";
import Home from "./Home";

function App() {
  return (
    <div background-color="white">
      <VStack paddingTop="10px" paddingBottom="100px">
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </VStack>
    </div>
  );
}

export default App;
