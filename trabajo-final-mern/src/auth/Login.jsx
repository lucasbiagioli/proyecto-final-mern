import React from 'react'
import { Navbar } from '../components/Navbar'
import FormLogin from '../components/FormLogin'
import { Container } from 'react-bootstrap'
import Footer from '../components/Footer'
import { Divider } from '@chakra-ui/react'

export const Login = () => {
  return (
    <div>
    <Navbar/>
    <Divider></Divider>
    <Container as='div'>
    <FormLogin></FormLogin>
    </Container>
    <Divider></Divider>
    <Footer/>
    </div>
  )
}
