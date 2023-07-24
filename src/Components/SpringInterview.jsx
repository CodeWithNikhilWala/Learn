import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Card, Container } from 'react-bootstrap'

const SpringInterview = () => {
  return (
  <>
  <Header/>
  <Container className='mb-2'>
    <Card className='mt-5'>
        <Card.Header>
      <h3> Here are some common interview questions related to Spring Boot, a popular framework for building production-ready Spring applications:</h3>
        </Card.Header>
        <Card.Body>
        <ul>
    <li>What is Spring Boot, and what are its key features and benefits?</li>
    <li>How does Spring Boot simplify the configuration and setup of a Spring application?</li>
    <li>What is the difference between Spring and Spring Boot?</li>
    <li>How do you create a new Spring Boot project using Spring Initializr or the Spring Boot CLI?</li>
    <li>Explain the role of the "starter dependencies" in a Spring Boot project.</li>
    <li>What is the significance of the SpringApplication class in a Spring Boot application?</li>
    <li>How do you externalize configuration properties in Spring Boot, and what are the different sources for configuration?</li>
    <li>What are the various ways to profile a Spring Boot application based on different environments?</li>
    <li>How do you enable cross-origin resource sharing (CORS) in a Spring Boot application?</li>
    <li>What is the difference between embedded containers (Tomcat, Jetty, Undertow) in Spring Boot, and how can you change the default one?</li>
    <li>How do you implement caching in Spring Boot, and what caching providers does Spring Boot support?</li>
    <li>Explain the purpose of the Actuator in Spring Boot, and how can you use it to monitor and manage your application?</li>
    <li>How do you handle authentication and authorization in a Spring Boot application?</li>
    </ul>
    </Card.Body>
    <Card.Footer>
    <ul>
    <li>What is Spring Boot Auto-configuration, and how does it work?</li>
    <li>How can you customize the behavior of Spring Boot Auto-configuration?</li>
    <li>What is the significance of the @SpringBootApplication annotation in a Spring Boot application?</li>
    <li>How do you run scheduled tasks in a Spring Boot application using @Scheduled annotation?</li>
    <li>How do you handle file uploads in a Spring Boot application?</li>
    <li>Explain the Spring Boot starter testing modules (e.g., spring-boot-starter-test) and how to write unit and integration tests using them.</li>
    <li>What are the different deployment options for a Spring Boot application?</li>
    </ul>
        </Card.Footer>
    </Card>
  </Container>
  <Footer/>
  
  </>
  )
}

export default SpringInterview
