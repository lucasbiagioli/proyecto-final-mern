import React from 'react'
import { Navbar } from '../components/Navbar'
import  RegisterForm  from '../components/RegisterForm'
import { Container } from 'react-bootstrap'
import Footer from '../components/Footer'
import { Divider } from '@chakra-ui/react'

export const Registro = () => {
  return (
    <div>
    <Navbar/>
    <Divider></Divider>
    <Container as={'div'}>
    <RegisterForm></RegisterForm>
    </Container>
    <Divider></Divider>
    <Footer/>
    </div>
  )
}
