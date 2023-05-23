import { ChakraProvider } from "@chakra-ui/react";
import { AppRouter } from "./router/AppRouter";

function App(){
  return (
        <div>
              <ChakraProvider>
              <AppRouter/>
              </ChakraProvider>    
    </div>
  );
}

export default App

