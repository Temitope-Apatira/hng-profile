import React from "react";
import { Flex, FormLabel, Box, Textarea, Checkbox } from "@chakra-ui/react";
import "./Contact.css";
export const Contact = () => {
  const name = "patra";
  const changePlaceholder = () => {
    document.getElementById("message").placeholder =
      "Hey there, hope you're doing great. Let us collaborate.";
  };
  const validate = (e) => {
    e.preventDefault();
    const firstName = document.getElementById("first_name");
    const lastName = document.getElementById("last_name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const messageError = document.getElementById("messageError");
    if (firstName.value === "") {
      alert("Please provide your first name!");
      firstName.focus();
      return false;
    }
    if (lastName.value === "") {
      alert("Please provide your last name!");
      lastName.focus();
      return false;
    }
    if (email.value === "") {
      alert("Please provide your email!");
      email.focus();
      return false;
    }
    if (message.value === "") {
      messageError.classList.add("visible");
      message.classList.add("invalid");
      messageError.setAttribute("aria-hidden", false);
      messageError.setAttribute("aria-invalid", true);
      document.getElementById("message").focus();
      return true;
    } else alert("Thank you! Your response has been submitted successfully.");
    window.location.reload();
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
        <p
          role="alert"
          id="messageError"
          aria-hidden="true"
          style={{ color: "red", fontFamily: "inter" }}
        >
          Please enter a message
        </p>
        <Checkbox colorScheme="blue" id="chk" mt="26px">
          You agree to providing your data to {name} who may contact you.
        </Checkbox>
        <button id="btn__submit" type="submit" name="submit" value="submit">
          Send message
        </button>
      </form>
    </div>
  );
};
