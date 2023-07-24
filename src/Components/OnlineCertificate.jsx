import React from 'react'
import Header from './Header'
import { Card, Container } from 'react-bootstrap'

const OnlineCertificate = () => {
  return (
    <>
    <Header/>
   <Container style={{marginTop:"80px"}}>
    <Card style={{textAlign:"center"}}>
        <Card.Body>
            Thank You For Completing Our Course
        </Card.Body>
    </Card>
   </Container>
    
    
    </>
  )
}

export default OnlineCertificate
