import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Card, Container } from 'react-bootstrap'

const LaraInterview = () => {
  return (
    <>
  <Header/>
   <Container className='mb-2'>
    <Card className='mt-5'>
    <Card.Header>
       <h3>Here are some common Laravel interview questions:</h3>
      </Card.Header>
      <Card.Body>
      <ul>
      <li>What is Laravel, and what are its key features?</li>
    <li>Explain the concept of the MVC (Model-View-Controller) architecture in Laravel.</li>
    <li>How do you create and define routes in Laravel?</li>
    <li>What are Eloquent models, and how do you define and use them in Laravel?</li>
    <li>Explain the purpose of middleware in Laravel. How do you create and use custom middleware?</li>
    <li>What is Laravel Blade, and how do you use it for templating?</li>
    <li>How do you handle form validation in Laravel?</li>
    <li>Explain the concept of database migrations in Laravel.</li>
    <li>What are the different session drivers supported by Laravel, and how do you manage sessions?</li>
    <li>How do you handle file uploads in Laravel?</li>
    </ul>
    </Card.Body>
    <Card.Footer>
    <ul>
    <li>What are service providers in Laravel, and how are they used?</li>
    <li>Explain the purpose of Artisan in Laravel.</li>
    <li>What is the role of the config directory in Laravel applications?</li>
    <li>How do you implement authentication and authorization in Laravel?</li>
    <li>What is the purpose of Eager Loading in Laravel's Eloquent ORM?</li>
    <li>How do you work with environment configuration in Laravel?</li>
    <li>Explain the concept of events and listeners in Laravel.</li>
    <li>What are traits in Laravel, and how are they used?</li>
    <li>How do you handle caching in Laravel applications?</li>
    <li>Explain the differences between the first(), find(), and findOrFail() methods in Laravel's Eloquent ORM.</li>
    </ul>
      </Card.Footer>

    </Card>
   </Container>
  <Footer/>
  </>
  )
}

export default LaraInterview
