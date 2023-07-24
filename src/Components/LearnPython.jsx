import React from 'react'
import Header from './Header'
import { Card, Container } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap';
import Footer from './Footer'
import { Typography } from '@mui/material'

const LearnPython = () => {
  return (
   <>
   <Header/>
   <Container className='mt-5'>
    <Card>
      <Card.Header>
       <h1>Quick Learn</h1> 
      </Card.Header>
      <Card.Body>
        <h3>What is Python?</h3>
        <Typography>
        Python is a high-level, interpreted, and general-purpose programming language. It was created by Guido van Rossum and first released in 1991. Python is known for its simplicity, readability, and versatility, making it a popular choice among developers for a wide range of applications.
        </Typography>
      </Card.Body>
    </Card>
    <Card className='my-2'>
     <Card.Header>
    <h3> Key features of Python include:</h3>
     </Card.Header>
     <Card.Body>
        <Typography>
        Readable and Expressive Syntax: Python emphasizes readability and uses a clean, straightforward syntax, which makes it easier for developers to write and understand code.
        </Typography>
        <Typography>
        Interpreted Language: Python is an interpreted language, meaning that the code is executed line-by-line by an interpreter rather than being compiled into machine code.
        </Typography>
        <Typography>
        Dynamically Typed: Python is dynamically typed, which means you don't need to specify the data type of a variable explicitly. The interpreter infers the data type at runtime.
        </Typography>
        <Typography>
        Large Standard Library: Python comes with a vast standard library that provides modules and packages for various tasks, such as file I/O, networking, web development, data manipulation, and more, making it highly capable right out of the box.
        </Typography>
        <Typography>
     Object-Oriented Programming (OOP): Python supports object-oriented programming principles, allowing developers to create classes and objects, encapsulate data and behavior, and implement inheritance and polymorphism.
     </Typography>
     </Card.Body>
    </Card>
    <Card className='my-2'>
        <Card.Body>
        Cross-platform: Python code can be run on various platforms, including Windows, macOS, and Linux, without any modifications.
        </Card.Body>
        <Card.Footer>
        Community and Ecosystem: Python has a vibrant and supportive community, contributing to its extensive ecosystem of third-party libraries and frameworks that enhance its capabilities even further.
        Python is commonly used in web development, scientific computing, data analysis, artificial intelligence (AI), machine learning, automation, scripting, and more. Its versatility and ease of use have contributed to its widespread adoption across different domains and industries.
        </Card.Footer>
    </Card>
   
   </Container>
   <Footer/>
   
   </>
  )
}

export default LearnPython
