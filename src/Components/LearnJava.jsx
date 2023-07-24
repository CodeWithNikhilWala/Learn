import React from 'react'
import Header from './Header'
import { Card, Container } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap';
import Footer from './Footer'
import { Typography } from '@mui/material'
const LearnJava = () => {
    const features = [
        "It is one of the easy-to-use programming languages to learn.",
        "Write code once and run it on almost any computing platform.",
        "Java is platform-independent. Some programs developed on one machine can be executed on another machine.",
        "It is designed for building object-oriented applications.",
        "It is a multithreaded language with automatic memory management.",
        "It is created for the distributed environment of the Internet.",
        "Facilitates distributed computing as it's network-centric."
      ];
  return (
   <>
   <Header/>
    <Container className="mt-5 pt-4"  >
        <h1>Quick Start</h1>
        <Card>
            <Card.Header>
                <h3 style={{color:"#2a9d8f"}}>Core Java</h3>
                <h5>This Java tutorial for beginners is taught in a practical GOAL-oriented way. It is recommended you practice the code assignments given after each core Java tutorial to learn Java from scratch. This Java programming for beginners course will help you learn basics of Java and advanced concepts.</h5>
            </Card.Header>
            <Card.Body>
                <h5>What is Java?</h5>
         <Typography>Java is a class-based object-oriented programming language for building web and desktop applications. It is the most popular programming language and the language of choice for Android programming.</Typography>
         <h5>What is Java Platform?</h5>
         <Typography>Java Platform is a collection of programs that help programmers to develop and run Java programming applications efficiently. It includes an execution engine, a compiler, and a set of libraries in it. It is a set of computer software and specifications. James Gosling developed the Java platform at Sun Microsystems, and the Oracle Corporation later acquired it.</Typography>
           <h5>What is Java used for?</h5>
           <Typography>Here are some important Java applications:</Typography>
           <ul>
            <li>
            It is used for developing Android Apps
            </li>
           </ul>
           <ul>
            <li>
            Helps you to create Enterprise Software

            </li>
           </ul>
           <ul>
            <li>
            Wide range of Mobile java Applications
            </li>
           </ul>
           <ul>
            <li>
            Scientific Computing Applications
            </li>
           </ul>
           <ul>
            <li>
            Use for Big Data Analytics
            </li>
            </ul>
            <ul>
                <li>
                Java Programming of Hardware devices
                </li>
            </ul>
            <ul>
                <li>
                Used for Server-Side Technologies like Apache, JBoss, GlassFish, etc.
                </li>
            </ul>
            </Card.Body>
        </Card>
        <h2 className='mt-2'>What is Java used for? </h2>

        <h5 className='mt-4'>Here are some important Java applications:</h5>
        <Card className='my-3'>
            <Card.Body>
            <Typography>
            The Java language was initially called OAK.
            </Typography>
            <Typography>
            Originally, it was developed for handling portable devices and set-top boxes. Oak was a massive failure.
            </Typography>
            <Typography>
            Wide range of Mobile java Applications
            </Typography>
            <Typography>
            Scientific Computing Applications
            </Typography>
            <Typography>
            Use for Big Data Analytics
            </Typography>
            <Typography>
            Java Programming of Hardware devices
            </Typography>
            <Typography>
            Used for Server-Side Technologies like Apache, JBoss, GlassFish, etc.
            </Typography>
            </Card.Body>
        </Card>
          <Card>
           <Card.Header>
          <h2> Java Features</h2>
           </Card.Header>
         
           <Card.Body>
           <h4>Here are some important Java features:</h4>
           <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <ol>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ol>
        </Col>
      </Row>
           </Card.Body>
          </Card>
          <Card className='my-3'>
            <Card.Header>
            <h4>Components Of Java Programming Language</h4>
            </Card.Header>
            <Card.Body>
            A Java Programmer writes a program in a human-readable language called Source Code. Therefore, the CPU or Chips never understand the source code written in any programming language.
           These computers or chips understand only one thing, which is called machine language or code. These machine codes run at the CPU level. Therefore, it would be different machine codes for other models of CPU.
           However, you need to worry about the machine code, as programming is all about the source code. The machine understands this source code and translates them into machine understandable code, which is an executable code.
            All these functionalities happen inside the following 3 Java platform components:
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
            <h4>What are Assembler and Compiler?</h4>
            </Card.Header>
            <Card.Body>
            With the advancement in technology, i/o devices were invented. You could directly type your program into the PC using ASSEMBLER. It converts it into the corresponding machine code (110001..) and feeds it to your processor. Coming back to our example addition of (1+2), the assembler will convert this code into machine code and output.
            What are Assembler and Compiler
            That apart, you will also have to make calls to create Operating System provided functions to display the code’s output.
            But alone the assembler is not involved in this process; it also requires the compiler to compile the long code into a small chunk of codes. With the advancement in software development languages, this entire assembly code could shrink into just one line print f 1+2 A with the software called COMPILER. It is used to convert your c language code into assembly code. The assembler converts it into corresponding machine code. This machine code will be transmitted to the processor. The most common processor used in PC or Computers are the Intel processor.
              What are Assembler and Compiler
             Though present-day compilers come bundled with assembler can directly convert your higher language code into machine code.

            </Card.Body>
          </Card>
          <Card className='my-3'>
            <Card.Header>
                <h1 style={{textAlign:"center"}}>Java In One Video</h1>
            </Card.Header>
            <Card.Body style={{display:"flex",justifyContent:"center"}} >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/UmnCZ7-9yDY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Card.Body>
          
          </Card>
    </Container>
    <Footer/>
   
   
   </>
  )
}

export default LearnJava
