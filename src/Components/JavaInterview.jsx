import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Container,Card } from 'react-bootstrap'

const JavaInterview = () => {
  return (
   <>
   <Header/>
   <Container className='mb-2'>
    <Card className='mt-5'>
        <Card.Header>
         <h2>Here are some common Java interview questions that can help you prepare for your interview:</h2>
        </Card.Header>
        <Card.Body>
        <ul>
    <li>What is Java?</li>
    <li>What are the main features of Java?</li>
    <li>Explain the differences between JDK, JRE, and JVM.</li>
    <li>What is the difference between primitive data types and reference data types in Java?</li>
    <li>How does garbage collection work in Java?</li>
    <li>What is the Java Virtual Machine (JVM) and why is it important?</li>
    <li>How do you create an object in Java, and what is the significance of the "new" keyword?</li>
    <li>What are the access modifiers in Java, and what do they do?</li>
    <li>Explain the concept of method overloading and method overriding in Java.</li>
    <li>What is the difference between checked and unchecked exceptions in Java?</li>
    <li>How does multithreading work in Java, and how do you synchronize threads?</li>
    <li>What is the difference between an abstract class and an interface in Java?</li>
    <li>How does Java support multiple inheritance through interfaces?</li>
    <li>Explain the "static" keyword in Java and its usage.</li>
    </ul>
    </Card.Body>
    
    <Card.Footer>
    <ul>
    <li>What are lambda expressions, and how do they simplify coding in Java?</li>
    <li>How does Java handle the issue of multiple inheritance through default methods in interfaces?</li>
    <li>What are the various access levels for a Java class, and how do they differ?</li>
    <li>How can you achieve runtime polymorphism in Java?</li>
    <li>What is the purpose of the "final" keyword in Java, and where can it be used?</li>
    <li>How does Java handle string manipulation and immutability?</li>
    <li>What is the Java Collections Framework, and why is it essential?</li>
    <li>Explain the difference between ArrayList and LinkedList in Java.</li>
    <li>How do you handle exceptions using try-catch blocks in Java?</li>
    <li>What are the different types of loops available in Java, and how do they work?</li>
    <li>How can you implement inheritance in Java, and what are its advantages?</li>
  </ul>
  </Card.Footer> 
    </Card>
   </Container>
   <Footer/>
   
   </>
  )
}

export default JavaInterview
