import React from 'react'
import { Navbar } from '../components/Navbar'
import FormLogin from '../components/FormLogin'
import { Container } from 'react-bootstrap'
import Footer from '../components/Footer'

export const Login = () => {
  return (
    <div>
    <Navbar/>
    <Container as='div'>
    <FormLogin></FormLogin>
    </Container>
    <Footer/>
    </div>
  )
}
