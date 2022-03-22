import {
  Box,
  Center,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import ProgressBar from "react-animated-progress-bar";
import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaPlus,
  FaReact,
  FaFigma,
  FaSteam,
} from "react-icons/fa";
import { SiJavascript, SiCinema4D } from "react-icons/si";

function Second() {
  return (
    <div>
      <Center>
        <Heading
          as={"h1"}
          fontSize={"5xl"}
          color="white"
          width={300}
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          letterSpacing={"wider"}
          textShadow="5px 5px #000000"
          mb={10}
        >
          About Me
        </Heading>
      </Center>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
        <Box>
          <Box>
            <Center>
              <Heading
                color={"red.400"}
                size={"lg"}
                letterSpacing={"wider"}
                textShadow="3px 3px #000000"
              >
                Favorite Games & Sports
              </Heading>
            </Center>
            <Center>
              <List spacing={5} color={"white"} my={5}>
                <ListItem fontSize={"lg"}>
                  <ListIcon as={ArrowRightIcon} />
                  <b>Minecraft</b>
                </ListItem>
                <ListItem fontSize={"lg"}>
                  <ListIcon as={ArrowRightIcon} />
                  <b>Rainbow Six Siege</b>
                </ListItem>
                <ListItem fontSize={"lg"}>
                  <ListIcon as={ArrowRightIcon} />
                  <b>Red Dead Redemption 2</b>
                </ListItem>
              </List>
            </Center>
          </Box>
        </Box>
        <Box>
          <Box>
            <Center>
              <Heading
                color={"purple.500"}
                size={"lg"}
                letterSpacing={"wider"}
                textShadow="3px 3px #000000"
              >
                Favorite Series & Animangas
              </Heading>
            </Center>
            <Center>
              <List spacing={5} color={"white"} my={5}>
                <ListItem fontSize={"lg"}>
                  <ListIcon as={ArrowRightIcon} />
                  <b>One Piece</b>
                </ListItem>
                <ListItem fontSize={"lg"}>
                  <ListIcon as={ArrowRightIcon} />
                  <b>Star Wars Series</b>
                </ListItem>
                <ListItem fontSize={"lg"}>
                  <ListIcon as={ArrowRightIcon} />
                  <b>Daredevil</b>
                </ListItem>
              </List>
            </Center>
          </Box>
        </Box>
      </SimpleGrid>

      <Box display={"flex"} flexDirection={"column"} mb={10} ml={5} mr={5}>
        <Center>
          <Heading
            as={"h1"}
            fontSize={"5xl"}
            color="white"
            width={300}
            textAlign={"center"}
            display={"flex"}
            justifyContent={"center"}
            letterSpacing={"wider"}
            textShadow="5px 5px #000000"
            mb={5}
          >
            My Skills
          </Heading>
        </Center>
        <Center>
          <FaHtml5 size={"50px"} color={"red"} />
          <FaPlus size={"25px"} color={"white"} />
          <FaCss3Alt size={"50px"} color={"cyan"} />
          <Heading as={"h1"} fontSize={"2xl"} color="white" pr={5} ml={5}>
            HTML & CSS
          </Heading>
          <ProgressBar
            width="400px"
            height="15px"
            rect
            fontColor="gray"
            percentage="85"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackPathColor="transparent"
            bgColor="#333333"
            trackBorderColor="grey"
          />
        </Center>
        <Center>
          <SiJavascript size={"45px"} color={"yellow"} ml={5}/>
          <FaPlus size={"25px"} color={"white"} />
          <FaReact size={"45px"} color={"cyan"} />
          <Heading as={"h1"} fontSize={"2xl"} color="white" pr={5} ml={5}>
            JavaScript & React
          </Heading>
          <ProgressBar
            width="400px"
            height="15px"
            rect
            fontColor="gray"
            percentage="55"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackPathColor="transparent"
            bgColor="#333333"
            trackBorderColor="grey"
          />
        </Center>
        <Center>
          <FaFigma size={"45px"} color={"purple"} />
          <Heading as={"h1"} fontSize={"2xl"} color="white" pr={5} ml={5}>
            UI / UX Design
          </Heading>
          <ProgressBar
            width="400px"
            height="15px"
            rect
            fontColor="gray"
            percentage="35"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackPathColor="transparent"
            bgColor="#333333"
            trackBorderColor="grey"
          />
        </Center>
        <Center>
          <SiCinema4D size={"45px"} color={"white"} />
          <Heading as={"h1"} fontSize={"2xl"} color="white" pr={5} ml={5}>
            3D Animation
          </Heading>
          <ProgressBar
            width="400px"
            height="15px"
            rect
            fontColor="gray"
            percentage="40"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackPathColor="transparent"
            bgColor="#333333"
            trackBorderColor="grey"
          />
        </Center>
        <Center>
          <FaSteam size={"45px"} color={"gray"} />
          <Heading as={"h1"} fontSize={"2xl"} color="white" pr={5} ml={5}>
            Gaming
          </Heading>
          <ProgressBar
            width="400px"
            height="15px"
            rect
            fontColor="gray"
            percentage="90"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackPathColor="transparent"
            bgColor="#333333"
            trackBorderColor="grey"
          />
        </Center>
      </Box>
    </div>
  );
}

export default Second;
