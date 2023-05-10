import _default from "react-bootstrap/esm/Accordion";
import FoodCard from "./FoodCard";
import Navbar from "./Navbar";
import React from 'react'
import { Container } from "@chakra-ui/react";




export function App() {
  return (
    <>
    <Container>
    <Navbar/>
    </Container>
    <Container>
      <FoodCard/>
    </Container>
    </>
  );
}
export default App;
console.log("Helo world from Backend");
