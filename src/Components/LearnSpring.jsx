import React from 'react'
import Header from './Header'
import { Card, Container } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap';
import Footer from './Footer'
import { Typography } from '@mui/material'
const LearnSpring = () => {
  return (
   <>
    <Header/>
    <Container className="mt-5 "  >
        <h1>Quick Start</h1>
        <Card>
            <Card.Header>
                <h3 style={{color:"#2a9d8f"}}>Learn Spring Boot</h3>
                <h5>Get started with Spring 5 and Spring Boot 2, through the Learn Spring course:</h5>
            </Card.Header>
            <Card.Body>
                <h5>Spring Boot is an opinionated, easy to get-started addition to the Spring platform</h5>
         <Typography> highly useful for creating stand-alone, production-grade applications with minimum effort.</Typography>
         <Typography>Then we'll cover some selected advanced topics like persistence, DevOps tools, and a few other useful topics which can be useful to get started with Spring Boot</Typography>
         <h2>spring - iconSpring Boot - Basics</h2>
         <Typography>Spring Boot is an opinionated addition to the Spring platform, focused on convention over configuration — highly useful for getting started with minimum effort and creating standalone, production-grade applications.
             This tutorial is a starting point for Boot, in other words, a way to get started in a simple manner with a basic web application.
             We'll go over some core configuration, a front-end, quick data manipulation, and exception handling.</Typography>
            </Card.Body>
        </Card>
        <Card className='my-3'>
            <Card.Body>
            <Typography>
            Spring Boot is an open-source Java-based framework that simplifies the development of stand-alone, production-grade applications with minimal effort. It is built on top of the Spring Framework and aims to provide a robust and opinionated way to create and deploy Spring applications. Here's an overview of some key aspects and concepts related to Spring Boot:
            </Typography>
            <Typography>
            Opinionated Convention over Configuration: Spring Boot follows the principle of "convention over configuration," meaning it provides sensible defaults and pre-configurations, reducing the need for developers to make many decisions. This approach allows developers to focus more on writing business logic rather than spending time on boilerplate configurations.

Auto-Configuration: One of the essential features of Spring Boot is its auto-configuration capability. It automatically configures various components based on the dependencies present in the classpath. For example, if Spring Boot finds an embedded database driver on the classpath, it will automatically configure a data source.

Standalone Executable JARs: Spring Boot applications can be packaged as standalone executable JAR files, including an embedded Tomcat, Jetty, or Undertow server. This makes deployment and distribution of applications easy since you only need to run a single JAR file.

Starters: Spring Boot starters are dependency descriptors that simplify the inclusion of specific sets of dependencies. Each starter provides a set of pre-configured dependencies related to a particular functionality, such as web applications, security, data access, etc. Including a starter in your project enables the related features without the need for manual configuration.

Actuator: Spring Boot Actuator provides various production-ready features to monitor and manage applications. It offers endpoints for health checks, metrics, logging, environment details, and more, allowing you to gain insights into the application's health and performance.

Spring Boot CLI: The Spring Boot Command Line Interface (CLI) allows developers to quickly prototype and develop Spring Boot applications using Groovy scripts. It simplifies the development process by providing features like automatic dependency resolution, configuration, and running the application.

DevTools: Spring Boot DevTools is a set of development-time features that enhance the developer experience. It includes features like automatic application restarts, remote debugging support, and LiveReload to refresh browser pages automatically.

Integration with Spring Ecosystem: Spring Boot seamlessly integrates with other components of the Spring ecosystem, such as Spring Data, Spring Security, Spring Cloud, etc. This integration makes it easier to build complex enterprise applications using the Spring framework.

To create a Spring Boot application, you can start by defining a main class with the @SpringBootApplication annotation, which enables auto-configuration and component scanning. From there, you can add various dependencies using Maven or Gradle, and Spring Boot will automatically configure those components for you.

Spring Boot has gained significant popularity due to its ease of use and ability to streamline the development process, making it an excellent choice for building modern Java applications.
            </Typography>
            </Card.Body>
        </Card>
         
         
          <Card className='my-3'>
            <Card.Header>
            <h4>Components Of SpringBoot Programming Language</h4>
            </Card.Header>
            <Card.Body>
            Spring Boot is a powerful framework that consists of various components and modules. Below are some key components of Spring Boot:
            <Typography>
            Spring Framework: Spring Boot is built on top of the core Spring Framework. It leverages many features of the Spring ecosystem, such as dependency injection, aspect-oriented programming, data access, and more.

Auto-Configuration: Spring Boot's auto-configuration is a significant component that automatically configures the application based on the presence of specific dependencies on the classpath. It aims to minimize manual configuration and provide sensible defaults.

Starters: Spring Boot starters are pre-configured dependency descriptors. They are designed to simplify the inclusion of specific sets of dependencies for common use cases like web applications, security, data access, messaging, etc.

Embedded Web Server: Spring Boot allows you to create standalone web applications by embedding servlet containers like Tomcat, Jetty, or Undertow directly into the application. This feature eliminates the need for deploying applications in separate containers.

Actuator: The Spring Boot Actuator provides production-ready features to monitor and manage the application. It exposes various endpoints that offer insights into the application's health, metrics, logging, and more.

Spring Boot CLI: The Spring Boot Command Line Interface (CLI) is a development tool that enables rapid prototyping and development of Spring Boot applications using Groovy scripts.

DevTools: Spring Boot DevTools is a set of development-time features that enhance the developer experience. It includes features like automatic application restarts, remote debugging support, and LiveReload.

Configuration Properties: Spring Boot allows you to externalize the configuration of your application using properties or YAML files. It provides easy binding of configuration properties to Java objects.

Spring Data: Spring Boot seamlessly integrates with Spring Data, which simplifies data access by providing a consistent, easy-to-use data access layer with support for various data sources, including relational databases, NoSQL databases, etc.

Spring Security: Spring Boot can be easily integrated with Spring Security, which provides authentication, authorization, and other security features to secure your applications.

Testing: Spring Boot provides testing support with various annotations and utilities, making it easy to write unit and integration tests for your applications.

Spring Boot Actuator: The Actuator module provides endpoints that allow you to monitor and manage your Spring Boot application in production. It provides information about application health, metrics, environment properties, and more.
            </Typography>
            </Card.Body>
          </Card>
          <Card className='my-3'>
            <Card.Header>
                <h1 style={{textAlign:"center"}}>Java In One Video</h1>
            </Card.Header>
            <Card.Body style={{display:"flex",justifyContent:"center"}} >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/35EQXmHKZYs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Card.Body>
          
          </Card>
    </Container>
    <Footer/>
   
   </>
  )
}

export default LearnSpring
