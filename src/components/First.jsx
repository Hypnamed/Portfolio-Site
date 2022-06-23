import {
  SimpleGrid,
  Box,
  Image,
  Center,
  Heading,
  IconButton,
  Tooltip,
  ButtonGroup,
  Link,
} from "@chakra-ui/react";
import React from "react";
import {
  FaTwitch,
  FaYoutube,
  FaInstagram,
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

function First() {
  return (
    <div>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
        <Box display={{ base: "none", md: "block" }}>
          <Center>
            <Image
              src="https://i.pinimg.com/originals/ee/7d/f1/ee7df19e6ebce70427f079b3ddb8af10.png"
              width={400}
              mb={10}
            />
          </Center>
        </Box>
        <Box py={10}>
          <Center>
            <Heading
              as={"h1"}
              fontSize={"6xl"}
              color="white"
              mt={100}
              width={300}
              textAlign={"center"}
              display={"flex"}
              justifyContent={"center"}
              letterSpacing={"wider"}
              textShadow="5px 5px #000000"
            >
              İlke Eren
              <br />
              "Hypnamed"
              <br />
              Demirtaş
            </Heading>
          </Center>
          <Center>
            <Heading
              mt={50}
              fontSize={"2xl"}
              color={"gray.200"}
              textShadow="5px 5px #000000"
              textAlign={"center"}
            >
              Junior Front-End Web Developper
            </Heading>
          </Center>
          <Center>
            <ButtonGroup spacing={5} mt={5}>
              <Tooltip
                hasArrow
                label="My Twitch Account"
                bg="gray.300"
                color="black"
                borderRadius={"md"}
              >
                <Link href="https://twitch.tv/hypnamed" target={"_blank"}>
                  <IconButton
                    mt={5}
                    colorScheme={"whiteAlpha"}
                    icon={<FaTwitch size={31} />}
                    variant={"ghost"}
                  />
                </Link>
              </Tooltip>
              <Tooltip
                hasArrow
                label="My YouTube Account"
                bg="gray.300"
                color="black"
                borderRadius={"md"}
              >
                <Link href="https://youtube.com/c/hypnamed" target={"_blank"}>
                  <IconButton
                    mt={5}
                    colorScheme={"whiteAlpha"}
                    icon={<FaYoutube size={31} />}
                    variant={"ghost"}
                  />
                </Link>
              </Tooltip>
              <Tooltip
                hasArrow
                label="My TikTok Account"
                bg="gray.300"
                color="black"
                borderRadius={"md"}
              >
                <Link href="https://tiktok.com/@hypnamed" target={"_blank"}>
                  <IconButton
                    mt={5}
                    colorScheme={"whiteAlpha"}
                    icon={<FaTiktok size={31} />}
                    variant={"ghost"}
                  />
                </Link>
              </Tooltip>
              <Tooltip
                hasArrow
                label="My Instagram Account"
                bg="gray.300"
                color="black"
                borderRadius={"md"}
              >
                <Link
                  href="https://instagram.com/erenhypnamed"
                  target={"_blank"}
                >
                  <IconButton
                    mt={5}
                    colorScheme={"whiteAlpha"}
                    icon={<FaInstagram size={31} />}
                    variant={"ghost"}
                  />
                </Link>
              </Tooltip>
              <Tooltip
                hasArrow
                label="My Discord Server"
                bg="gray.300"
                color="black"
                borderRadius={"md"}
              >
                <Link href="https://discord.gg/VrwJWNSJfA" target={"_blank"}>
                  <IconButton
                    mt={5}
                    colorScheme={"whiteAlpha"}
                    icon={<FaDiscord size={31} />}
                    variant={"ghost"}
                  />
                </Link>
              </Tooltip>
              <Tooltip
                hasArrow
                label="My GitHub Profile"
                bg="gray.300"
                color="black"
                borderRadius={"md"}
              >
                <Link href="https://github.com/hypnamed" target={"_blank"}>
                  <IconButton
                    mt={5}
                    colorScheme={"whiteAlpha"}
                    icon={<FaGithub size={31} />}
                    variant={"ghost"}
                  />
                </Link>
              </Tooltip>
              <Tooltip
                hasArrow
                label="My LinkedIn Profile"
                bg="gray.300"
                color="black"
                borderRadius={"md"}
              >
                <Link
                  href="https://linkedin.com/in/ilkeeren/"
                  target={"_blank"}
                >
                  <IconButton
                    mt={5}
                    colorScheme={"whiteAlpha"}
                    icon={<FaLinkedin size={31} />}
                    variant={"ghost"}
                  />
                </Link>
              </Tooltip>
            </ButtonGroup>
          </Center>
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <Center>
            <Image
              src="https://i.pinimg.com/originals/ee/7d/f1/ee7df19e6ebce70427f079b3ddb8af10.png"
              width={400}
              mt={125}
              mb={10}
              loading={"lazy"}
              alt={"Monkey D Luffy"}
            />
          </Center>
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default First;
