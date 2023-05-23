import React from 'react'
import  NavbarHome  from '../components/NavbarHome'
import { Container } from 'react-bootstrap'
import { ListGroup } from '../components/ListGroup'
import Footer from '../components/Footer'
import FoodGridAdmin from '../components/FoodGridAdmin'
import { Divider } from '@chakra-ui/react'



export const Admin = () => {
  return (
    <div>
    <NavbarHome/>
    <Divider/>
    <div style={{ backgroundColor: "#00bcd4" }}>
    <Container>
      <ListGroup/>
    </Container>
    <Container>
    </Container>
    </div>
    <FoodGridAdmin/>
    <Footer/>
    </div>
  )
}
