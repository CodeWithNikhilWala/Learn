import React from 'react'
import Header from './Header'
import { Card, Container } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap';
import Footer from './Footer'
import { Typography } from '@mui/material'
const LearnC = () => {
  return (
   <>
    <Header/>
   <Container className='mt-5'>
    <Card>
      <Card.Header>
       <h1>Quick Learn</h1> 
      </Card.Header>
      <Card.Body>
        <h3>What is C++</h3>
        <Typography>
        C++ is a general-purpose programming language that was developed as an extension of the C programming language. It was created by Bjarne Stroustrup in the early 1980s at Bell Labs and has since become one of the most widely used programming languages, particularly for systems programming, game development, and other performance-critical applications.
        </Typography>
      </Card.Body>
    </Card>
    <Card className='my-3'>
      <Card.Header>
        <h3>Key features of C++ include:</h3>
      </Card.Header>
      <Card.Body>
        <h4>Object-Oriented Programming (OOP) :</h4>
        <h6>C++ supports the principles of object-oriented programming, allowing developers to create classes and objects, encapsulate data and behavior, and use inheritance, polymorphism, and abstraction.</h6>
        <h4>Mid-level Language :</h4>
        <h6>C++ is often referred to as a "mid-level" language because it combines both high-level abstractions and low-level memory manipulation. It allows direct memory access through pointers, making it suitable for system-level programming.</h6>
        <h4>Efficiency and Performance :</h4>
        <h6>C++ is known for its efficiency and performance. It gives programmers control over memory management and provides features like inline functions, templates, and low-level memory manipulation, which can lead to faster execution times.</h6>
        <h4>Standard Template Library (STL) :</h4>
        <h6>C++ includes a rich set of standard libraries, including the Standard Template Library (STL), which provides a collection of classes and functions for common data structures (like vectors, lists, and maps) and algorithms (like sorting and searching).</h6>
        <h4>Platform Independence :</h4>
        <h6> Like C, C++ is a platform-independent language, allowing developers to write code that can be compiled and executed on different platforms with minimal modifications.</h6>
        <h4>Extensibility:</h4>
        <h6>C++ allows developers to create user-defined data types and extend the language through features like operator overloading and custom class implementations.</h6>

      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <h4>Multiple Paradigms:</h4>
        <h6>In addition to OOP, C++ supports procedural programming, generic programming (through templates), and functional programming (to some extent).</h6>
        <h5>C++ is widely used in various domains, including systems programming, game development, embedded systems, desktop applications, and high-performance computing. While it provides significant power and control to developers, it also demands careful memory management and is considered more complex than some other modern programming languages. As a result, C++ is a popular choice for experienced programmers who prioritize performance and low-level control over ease of use and simplicity.</h5>
      </Card.Body>
    </Card>
    <Card className='my-2'>
      <Card.Header>
        <h5>
           Advanced C++ programming involves delving into more complex language features and techniques that go beyond the basics. Here are some advanced C++ concepts and theories:</h5>
        <Card.Body>
            
        </Card.Body>
      </Card.Header>
    </Card>
    <Card>
      <Card.Body>
     <h4>Templates and Generic Programming:</h4> 
      <h6> C++ templates allow for generic programming, enabling you to write functions and classes that work with different data types. This powerful feature is widely used in the Standard Template Library (STL) and allows you to create customizable and reusable code.</h6>
      </Card.Body>
    </Card >
    <Card className='my-2'>
            <Card.Header>
                <h1 style={{textAlign:"center"}}>C++ In One Video</h1>
            </Card.Header>
            <Card.Body style={{display:"flex",justifyContent:"center"}} >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/yGB9jhsEsr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Card.Body>
          
          </Card>

   </Container>
    <Footer/>
   
   </>
  )
}

export default LearnC
