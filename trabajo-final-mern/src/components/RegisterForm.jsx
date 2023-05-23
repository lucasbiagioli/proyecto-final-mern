import { FormControl, FormLabel, FormHelperText, Select, InputGroup, Button, InputRightElement, Divider } from '@chakra-ui/react'
import { HStack, Stack } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import {FaFacebook, FaTwitter, FaGoogle, FaGithub, FaTelegram} from 'react-icons/fa'
import React from 'react'
import { Container } from 'react-bootstrap'


    
function RegisterForm (){
        const [show, setShow] = React.useState(false)
        const handleClick = () => setShow(!show)
     return (
        <Container justifyContent={'center'}>
        <FormControl isRequired maxW={'lg'} minW={'md'} border={'solid black 1px'} p={2} borderRadius={10}>
            <h1>Registro</h1>
            <FormLabel>Nombres</FormLabel>
            <Input as={''} placeholder='First name' />
            <FormLabel>Apellidos</FormLabel>
            <Input placeholder='Last name' required='true' />
            <FormLabel>Pais</FormLabel>
                <Select placeholder='Select country'>
                    <option>Argentina</option>
                    <option>Brasil</option>
                    <option>Chile</option>
                    <option>Uruguay</option>
                    <option>Paraguay</option>
                    <option>Bolivia</option>
                    <option>Peru</option>
                </Select>
                <Divider></Divider>
            <FormControl isRequired>
            <FormLabel>Ingresa tu Email</FormLabel>
            <Input type='email' />
            <FormHelperText>Ingresa tu Contraseña</FormHelperText>
            </FormControl>  
            <InputGroup>
                <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Ingresa tu Contraseña'
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
            <FormHelperText>Repite tu Contraseña</FormHelperText>
            <InputGroup>
                <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Ingresa tu Contraseña'
                />
                <InputRightElement width='4.5rem'>
                </InputRightElement>
            </InputGroup>
            <Stack  justifyContent={'center'} m={3} direction='row' spacing={4} align='center'>
                <Button colorScheme='teal' variant='solid'>
                    Registrate
                </Button>
            </Stack>
            <Divider></Divider>
            <Container>
            <FormHelperText>O Registrate con</FormHelperText>
            <HStack justifyContent={'center'} wrap={'wrap'} margin={3}>
                <Button  p={1} m={3} size={'sm'} colorScheme='facebook' leftIcon={<FaFacebook/>}>
                    Facebook
                </Button>
                <Button  p={1} m={3} size={'sm'} colorScheme='twitter' leftIcon={<FaTwitter/>}>
                    Twitter
                </Button>
                <Button  p={1} m={3} size={'sm'} colorScheme='red' leftIcon={<FaGoogle/>}>
                    Google
                </Button>
                <Button  p={1} m={3} size={'sm'} colorScheme='gray' leftIcon={<FaGithub/>}>
                    Github
                </Button>
                <Button  p={1} m={3} size={'sm'} colorScheme='facebook' leftIcon={<FaTelegram/>}>
                    Telegram
                </Button>
            </HStack>
            </Container>
        </FormControl>
        </Container>
  );
}

export default RegisterForm;

