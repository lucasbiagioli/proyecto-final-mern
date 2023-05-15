import Button from 'react-bootstrap/Button';
import {FormControl, FormLabel, FormHelperText,} from '@chakra-ui/react'
import { Input, InputRightElement } from '@chakra-ui/react';
import { InputGroup } from '@chakra-ui/react';
import React from 'react';
import { Container } from '@chakra-ui/react';
import { Checkbox } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'

function FormLogin() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  return (
    <Container bg={'purple'} p={5} borderRadius={'15px'}>  
    <FormControl maxW={'lg'} minW={'md'}>
        <h1 className='text-white'>Login</h1>
    <FormLabel className='text-white'>Email address</FormLabel>
    <Input type='email' />
    <FormHelperText className='text-white'>We'll never share your password.</FormHelperText>
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show? 'text' : 'password'}
        placeholder='Enter password'
        />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    <Container p={'10px'} centerContent maxW={'600px'}>
    <Checkbox mt={'10px'} className='text-white' colorScheme='green' defaultChecked>Recúerdame</Checkbox>
    <Button variant="outline-primary">Login</Button>{' '}
    </Container>
    <Divider orientation='horizontal'/>
    </FormControl>
    </Container>
  );
}

export default FormLogin;