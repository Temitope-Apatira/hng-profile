import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import zurilogo from "../../assets/images/zurilogo.png";
import i4g from "../../assets/images/i4g.png";
import "./Footer.css";

export const Footer = () => {
  return (
    <div>
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
    </div>
  );
};
