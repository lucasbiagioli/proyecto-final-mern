import React from 'react'
import  NavbarHome  from '../components/NavbarHome'
import FormLogin from '../components/FormLogin'
import { Container } from 'react-bootstrap'
import Footer from '../components/Footer'
import { Divider } from '@chakra-ui/react'

export const Login = () => {
  return (
    <div>
    <NavbarHome/>
    <Divider></Divider>
    <div style={{ backgroundColor: "#00bcd4" }}>
    <Container as='div'>
    <FormLogin></FormLogin>
    </Container>
    </div>
    <Divider></Divider>
    <Footer/>
    </div>
  )
}
