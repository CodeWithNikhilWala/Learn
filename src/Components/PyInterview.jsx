import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Container,Card } from 'react-bootstrap'

const PyInterview = () => {
  return (
   <>
   <Header/>
   <Container className='mb-2'>
    <Card className='mt-5'>
        <Card.Header>
            <h3>Here are some common Python interview questions:</h3>
        </Card.Header>
        <Card.Body>
      <ul>
      <li>What is Python, and what are its key features?</li>
    <li>How is Python different from other programming languages like Java and C++?</li>
    <li>What are the different data types in Python?</li>
    <li>Explain the differences between lists, tuples, and sets in Python.</li>
    <li>How do you create and use dictionaries in Python?</li>
    <li>What are the different ways to handle exceptions in Python?</li>
    <li>What is PEP 8, and why is it important in Python development?</li>
    <li>How do you open and read/write files in Python?</li>
    <li>Explain the concept of list comprehensions in Python.</li>
    <li>What is the purpose of the "self" keyword in Python class methods?</li>
    <li>How do you implement inheritance in Python, and what are the different types of inheritance?</li>
    <li>What are decorators in Python, and how do you use them?</li>
    </ul>
    </Card.Body>
    <Card.Footer>
    <ul>
    <li>Explain the difference between generators and iterators in Python.</li>
    <li>What is the Global Interpreter Lock (GIL) in Python, and how does it impact multi-threaded programming?</li>
    <li>How do you handle modules and packages in Python?</li>
    <li>What are lambda functions in Python, and how are they used?</li>
    <li>How do you work with virtual environments in Python, and why are they important?</li>
    <li>Explain the purpose of the "if __name__ == '__main__':" construct in Python scripts.</li>
    <li>What are the differences between deep copy and shallow copy in Python?</li>
    <li>How do you handle asynchronous programming in Python using asyncio?</li>
    </ul>
      </Card.Footer>
    </Card>
   </Container>
   <Footer/>
   
   </>
  )
}

export default PyInterview
