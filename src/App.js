import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Home } from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
function App() {
  return (
    <Box minH="800px" h="fit-content" px="20px" py="20px" my={20}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
