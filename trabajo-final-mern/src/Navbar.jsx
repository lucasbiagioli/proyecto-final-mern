import React from "react";
import {
    Box,
    Flex,
    IconButton,
    Link,
    Stack,
    useColorMode,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={colorMode === "light" ? "gray.100" : "gray.800"}
      color={colorMode === "light" ? "gray.800" : "gray.100"}
    >
      <Flex align="center" mr={5}>
        <Link href="/">
          <Box fontWeight="bold" fontSize="xl">
            My Website
          </Box>
        </Link>
      </Flex>

      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          variant="ghost"
        />
      </Box>

      <Box
        display={{ base: "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack direction="row" spacing={4}>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </Stack>
      </Box>

      <Box
        display={{ base: "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <IconButton
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          variant="ghost"
        />
      </Box>
    </Flex>
  );
};

export default Navbar;