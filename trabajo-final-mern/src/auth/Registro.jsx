import React from 'react'
import NavbarHome from '../components/NavbarHome'
import  RegisterForm  from '../components/RegisterForm'
import { Container } from 'react-bootstrap'
import Footer from '../components/Footer'
import { Divider } from '@chakra-ui/react'

export const Registro = () => {
  return (
    <div>
    <NavbarHome/>
    <Divider></Divider>
    <div style={{ backgroundColor: "#00bcd4" }}>
    <Container as={'div'}>
    <RegisterForm></RegisterForm>
    </Container>
  </div>
    <Divider></Divider>
    <Footer/>
    </div>
  )
}
