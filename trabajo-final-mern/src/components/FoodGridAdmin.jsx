import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Button } from '@chakra-ui/react';

export default function FoodGridAdmin() {
  return (
    <MDBRow className='row-cols-1 row-cols-md-6 g-4 p-5'>
      <MDBCol>
        <MDBCard>
          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top'/>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
            <Button colorScheme='teal' size={'xs'} m={1}>Add</Button>
            <Button colorScheme='red' size={'xs'} m={1}>Delete</Button>
            <Button colorScheme='yellow' size={'xs'} m={1}>Edit</Button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top'/>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
            <Button colorScheme='teal' size={'xs'} m={1}>Add</Button>
            <Button colorScheme='red' size={'xs'} m={1}>Delete</Button>
            <Button colorScheme='yellow' size={'xs'} m={1}>Edit</Button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top'/>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
            <Button colorScheme='teal' size={'xs'} m={1}>Add</Button>
            <Button colorScheme='red' size={'xs'} m={1}>Delete</Button>
            <Button colorScheme='yellow' size={'xs'} m={1}>Edit</Button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
            <Button colorScheme='teal' size={'xs'} m={1}>Add</Button>
            <Button colorScheme='red' size={'xs'} m={1}>Delete</Button>
            <Button colorScheme='yellow' size={'xs'} m={1}>Edit</Button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
            <Button colorScheme='teal' size={'xs'} m={1}>Add</Button>
            <Button colorScheme='red' size={'xs'} m={1}>Delete</Button>
            <Button colorScheme='yellow' size={'xs'} m={1}>Edit</Button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
            <Button colorScheme='teal' size={'xs'} m={1}>Add</Button>
            <Button colorScheme='red' size={'xs'} m={1}>Delete</Button>
            <Button colorScheme='yellow' size={'xs'} m={1}>Edit</Button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}