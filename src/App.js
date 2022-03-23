import "./App.css";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import { Box } from "@chakra-ui/react";
import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Box h={{ base: "100%", lg: "100vh" }} bgColor={"#1c1c1c"}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
