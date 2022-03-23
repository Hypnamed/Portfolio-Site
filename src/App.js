import "./App.css";
import Home from "./pages/Home";
import { Box } from "@chakra-ui/react";

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
