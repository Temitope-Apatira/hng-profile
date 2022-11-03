import React from "react";
import { Flex, FormLabel, Box, Textarea, Checkbox } from "@chakra-ui/react";
import "./Contact.css";
export const Contact = () => {
  const changePlaceholder = () => {
    document.getElementById("message").placeholder =
      "Hey there, hope you're doing great. Let us collaborate.";
  };
  const validate = () => {
    if (document.getElementById("first_name").value === "") {
      alert("Please provide your first name!");
      document.getElementById("first_name").focus();
      return false;
    }
    if (document.getElementById("last_name").value === "") {
      alert("Please provide your last name!");
      document.getElementById("last_name").focus();
      return false;
    }
    if (document.getElementById("email").value === "") {
      alert("Please provide your email!");
      document.getElementById("email").focus();
      return false;
    }
    if (document.getElementById("message").value === "") {
      alert("Please leave a message");
      document.getElementById("message").focus();
      return false;
    } else alert("Thank you! Your response has been submitted successfully.");
  };
  return (
    <div className="contact">
      <p className="p1">Contact Me</p>
      <p className="p2">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <form onSubmit={validate}>
        <Flex
          columnGap="24px"
          rowGap="24px"
          direction="row"
          wrap="wrap"
          mt="48px"
        >
          <Box maxW="380px" w="100%">
            <FormLabel className="label">First name</FormLabel>
            <input
              type="text"
              name="name"
              placeholder="Enter your first name"
              maxW="380px"
              id="first_name"
            />
          </Box>
          <Box maxW="380px" w="100%">
            <FormLabel className="label">Last name</FormLabel>
            <input
              type="text"
              name="name"
              placeholder="Enter your last name"
              maxW="380px"
              id="last_name"
            />
          </Box>
        </Flex>
        <FormLabel mt="24px" className="label">
          Email
        </FormLabel>
        <input
          type="text"
          name="email"
          placeholder="yourname@email.com"
          id="email"
        />

        <FormLabel mt="24px" className="label">
          Message
        </FormLabel>
        <Textarea
          type="text"
          placeholder="Send me a message and I'll reply you as soon as possible..."
          id="message"
          onClick={changePlaceholder}
        />
        <Checkbox colorScheme="blue" id="chk" mt="26px">
          You agree to providing your data to patra who may contact you.
        </Checkbox>
        <button
          id="btn__submit"
          type="submit"
          name="submit"
          value="submit"
          // onClick={submit}
        >
          Send message
        </button>
      </form>
    </div>
  );
};
