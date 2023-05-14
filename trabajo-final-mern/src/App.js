import React from 'react'
import Grid from './components/Grid';
import NavBar from "./components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";


export function App() {
  return (
    <React.StrictMode>
        <ChakraProvider>
          <NavBar />
          <Grid />
        </ChakraProvider>
    </React.StrictMode>
  );
}
export default App;

