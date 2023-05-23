import React from 'react'
import { Navbar } from '../components/Navbar'
import { Container } from 'react-bootstrap'
import { ListGroup } from '../components/ListGroup'
import Footer from '../components/Footer'
import FoodGridAdmin from '../components/FoodGridAdmin'
import { Divider } from '@chakra-ui/react'



export const Admin = () => {
  return (
    <div>
    <Navbar/>
    <Container>
      <ListGroup/>
    </Container>
    <Container>
    <Divider/>
    </Container>
    <FoodGridAdmin/>
    <Footer/>
    </div>
  )
}
