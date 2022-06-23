import {
  Box,
  Center,
  Heading,
  IconButton,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  FaHtml5,
  FaReact,
  FaStar,
} from "react-icons/fa";
import { SiAdobeindesign } from "react-icons/si";
import ProgressBar from "react-animated-progress-bar";

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
                  <ListIcon as={FaStar} />
                  <b>Minecraft</b>
                </ListItem>
                <ListItem fontSize={"lg"}>
                  <ListIcon as={FaStar} />
                  <b>Rainbow Six Siege</b>
                </ListItem>
                <ListItem fontSize={"lg"}>
                  <ListIcon as={FaStar} />
                  <b>Red Dead Redemption 2</b>
                </ListItem>
                <ListItem fontSize={"lg"}>
                  <ListIcon as={FaStar} />
                  <b>Football</b>
                </ListItem>
                <ListItem fontSize={"lg"}>
                  <ListIcon as={FaStar} />
                  <b>Swimming</b>
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
                  <ListIcon as={FaStar} />
                  <b>One Piece</b>
                </ListItem>
                <ListItem fontSize={"lg"}>
                  <ListIcon as={FaStar} />
                  <b>Star Wars Series</b>
                </ListItem>
                <ListItem fontSize={"lg"}>
                  <ListIcon as={FaStar} />
                  <b>Daredevil</b>
                </ListItem>
                <ListItem fontSize={"lg"}>
                  <ListIcon as={FaStar} />
                  <b>Moon Knight</b>
                </ListItem>
                <ListItem fontSize={"lg"}>
                  <ListIcon as={FaStar} />
                  <b>Naruto & Naruto Shippuuden</b>
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
          <IconButton
            aria-label="HTML / CSS"
            icon={<FaHtml5 />}
            size={"md"}
            colorScheme={"blackAlpha"}
          />
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
          <IconButton
            aria-label="JavaScript / React"
            icon={<FaReact />}
            size={"md"}
            colorScheme={"blackAlpha"}
          />
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
          <IconButton
            aria-label="UI / UX Design"
            icon={<SiAdobeindesign />}
            size={"md"}
            colorScheme={"blackAlpha"}
          />
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
      </Box>
    </div>
  );
}

export default Second;
