import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import {
  Box,
  Center,
  Button,
} from "@chakra-ui/react";
import First from "../components/First.jsx";
import Second from "../components/Second.jsx";
import Third from "../components/Third.jsx";

function Home() {
  return (
    <ReactFullpage
      scrollOverflow={true}
      navigation
      navigationTooltips={["<b>Home</b>", "<b>About Me</b>", "<b>Projects & Portfolio</b>"]} 
      render={({ state, fullpageApi }) => {
        return (
          <div id="fullpage-wrapper">
            <div className="section First">
              <First />
            </div>
            <div className="section Second">
              <Second />
            </div>
            <div className="section Third">
              <Third />
            </div>
          </div>
        );
      }}
    />
  );
}

export default Home;
