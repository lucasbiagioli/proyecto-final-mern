import { Box, Button, Flex, HStack, Heading, Spacer, Text } from "@chakra-ui/react";

export default function NavBar() {
    return (
        <Flex as="nav" p="10px" alignItems="center">
            <Heading as="h1">Rolling Code</Heading>
            <Spacer/>


            <HStack spacing="20px">
            <Box bg="gray.200" p="10px">M</Box>
            <Text>Rollingcode@Trabajofinal.dev</Text>
            <Button colorScheme="purple">LogOut</Button>
            </HStack>
        </Flex>
    )
}

