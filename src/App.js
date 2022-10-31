import React from "react";
import { Flex, Image, Text, Box } from "@chakra-ui/react";
import zurilogo from "./assets/images/zurilogo.png";
import i4g from "./assets/images/i4g.png";
import dp from "./assets/images/profile__img.jpeg";
import share from "./assets/images/share_btn.png";
import share2 from "./assets/images/share2.png";
import camera from "./assets/images/camera.png";
import slack from "./assets/images/slack.png";
import git from "./assets/images/giticon.png";
import "./App.css";
function App() {
  return (
    <Box minH="800px" h="fit-content" px="20px" my={20}>
      <div className="profile">
        <Flex direction="column">
          <Image
            src={share}
            w="40px"
            h="40px"
            className="share"
            alignSelf="flex-end"
            title="Share Link"
            marginRight={150}
            cursor="pointer"
          />

          <Image
            src={share2}
            w="40px"
            h="40px"
            className="share2"
            alignSelf="flex-end"
            cursor="pointer"
          />

          <Flex direction="column" align="center" justify="center">
            <div className="dp_container">
              <Image src={dp} id="profile__img" className="image" w="100%" />
              <div className="overlay">
                <Image src={camera} mt="60px" />
              </div>
            </div>
            <Text id="twitter">patra_tee</Text>
            <Text id="slack">Patra</Text>
          </Flex>
        </Flex>
      </div>
      <div className="contain">
        <Flex direction="column" rowGap="8px" justify="center" align="center">
          {/* <a href="http://twitter.com/patra_tee">Twitter Link</a> */}
          <a href="http://training.zuri.team" id="btn__zuri">
            Zuri Training"
          </a>
          <a
            href="https://books.zuri.team"
            title="This is where you find books about design and coding"
            id="books"
          >
            Zuri Books
            <br />
            <sub>This is where you find books about design and coding</sub>
          </a>
          <a
            href="https://books.zuri.team/python-for-beginners?ref_id=<patra>"
            id="book__python"
          >
            Python Books by Zuri
            <br />
            <sub>Learn python in 3 months</sub>
          </a>
          <a href="https://backgroundcheck.zuri.team" id="pitch">
            Background Check for Coders
            <br />
            <sub>Click here to run background check on coders in one step</sub>
          </a>
          <a
            href="https://books.zuri.team/design-rules"
            title="This is where you pitch the free design book offered by Zuri"
            id="book__design"
          >
            Design Books
            <br />
            <sub>Everything to know about design.</sub>
          </a>
          <Flex direction="row" columnGap="27px" justify="center" mt="24px">
            <Image src={slack} />
            <Image src={git} />
          </Flex>
        </Flex>
      </div>
      <div className="footer">
        <Flex
          pt="42px"
          direction="row"
          rowGap="16px"
          maxW="1152px"
          margin="auto"
          justify="space-between"
          wrap="wrap"
          borderTop="1px solid #e5e5e5"
        >
          <Image src={zurilogo} w="185px" h="25px" />
          <Text
            fontFamily="inter"
            fontWeight="400"
            fontSize="16px"
            lineHeight="24px"
            color="#667085"
            mt="0px"
            align={{ base: "left", md: "center" }}
          >
            HNG Internship 9 Frontend Task
          </Text>
          <Image src={i4g} w="132px" h="32px" />
        </Flex>
      </div>
    </Box>
  );
}

export default App;
