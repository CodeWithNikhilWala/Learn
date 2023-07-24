import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Card, Container } from 'react-bootstrap'

const Cinterview = () => {
  return (
   <>
   <Header/>
   <Container className='mb-2'>
    <Card className='mt-5'>
      <Card.Header>
       <h3>Here are some common C++ interview questions:</h3>
      </Card.Header>
      <Card.Body>
      <ul>
    <li>What is C++? Explain its key features.</li>
    <li>What is the difference between C and C++?</li>
    <li>What are the basic data types in C++?</li>
    <li>How do you declare and define a class in C++?</li>
    <li>What is an object in C++, and how do you create one?</li>
    <li>Explain the concept of constructor and destructor in C++.</li>
    <li>What are access specifiers, and how are they used in C++ classes?</li>
    <li>What is function overloading and operator overloading in C++?</li>
    <li>How do you implement inheritance in C++? What are the different types of inheritance?</li>
    <li>What is a virtual function, and why is it used in C++?</li>
    <li>Explain the difference between compile-time polymorphism and runtime polymorphism.</li>
    <li>What is a template in C++? How do you create and use a template class or function?</li>
    <li>How do you handle exceptions in C++ using try, catch, and throw blocks?</li>
    </ul>
    </Card.Body>
    <Card.Footer>
    <ul>
    <li>What are smart pointers in C++? How do they differ from raw pointers?</li>
    <li>What is the Standard Template Library (STL) in C++? Mention some of its containers and algorithms.</li>
    <li>How do you read and write files in C++?</li>
    <li>Explain the concept of static members in a C++ class.</li>
    <li>What is the difference between pass by value, pass by reference, and pass by pointer in function arguments?</li>
    <li>How do you prevent a class from being inherited in C++?</li>
    <li>What are lambda expressions in C++11? How do you use them?</li>
    <li>Explain the concept of RAII (Resource Acquisition Is Initialization) in C++.</li>
    </ul>
      </Card.Footer>
    </Card>
   </Container>
   <Footer/>
   
   
   </>
  )
}

export default Cinterview
