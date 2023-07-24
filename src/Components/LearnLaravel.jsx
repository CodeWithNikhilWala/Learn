import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Container,Card } from 'react-bootstrap'
import { Typography } from '@mui/material'
const LearnLaravel = () => {
  return (
   <>
   <Header/>
   <Container className='mt-5'>
     <Card>
        <Card.Header>
           <h2>Quick Start</h2> 
        </Card.Header>
        <Card.Body>
          <h4> What is Laravel?</h4> 
            </Card.Body>
        <Card.Footer>
         <Typography>
         Laravel is a free, open-source PHP web application framework that follows the Model-View-Controller (MVC) architectural pattern. It was created by Taylor Otwell and was first released in 2011. Laravel aims to simplify and accelerate the development of web applications by providing an elegant and expressive syntax along with a rich set of features.
         </Typography>
        </Card.Footer>
     </Card>
     <Card className='my-2'>
        <Card.Header>
       <h3>Key features of Laravel include:</h3> 
        </Card.Header>
        <Card.Body>
            <Typography>
            Eloquent ORM: Laravel comes with Eloquent, an Object-Relational Mapping (ORM) system that allows developers to interact with databases using PHP syntax rather than writing raw SQL queries. It makes database operations more intuitive and reduces the need for manual SQL queries.
            </Typography>
            <Typography>
            Artisan CLI: Laravel provides a powerful command-line interface called Artisan. It offers a set of pre-built commands for tasks such as creating controllers, models, migrations, and more. Developers can also create custom Artisan commands to automate repetitive tasks.
            </Typography>
            <Typography>
            Routing: Laravel's routing system allows developers to define clean and expressive routes for handling HTTP requests. It simplifies the process of mapping URLs to specific actions in the application.
            </Typography>
        </Card.Body>
        <Card.Footer>
            <Typography>
            Middleware: Middleware in Laravel acts as a filter for incoming HTTP requests, allowing developers to perform actions before or after the request is handled. It provides a flexible way to handle tasks like authentication, logging, and CORS configuration.
            </Typography>
            <Typography>
            Blade Templating Engine: Laravel uses Blade, a lightweight and powerful templating engine, to separate the presentation layer from the application logic. Blade templates are easy to write and allow for reusable components.
            </Typography>
        </Card.Footer>
        <Card.Body>
        Authentication and Authorization: Laravel provides built-in authentication and authorization functionalities, making it simple to implement user authentication and access control for web applications.
        </Card.Body>
     </Card>
     <Card className='mb-2'>
        <Card.Body>
        Testing Support: Laravel supports unit testing out of the box with PHPUnit. It encourages developers to write test cases to ensure application stability and prevent regressions.

Laravel's ecosystem is extensive and includes a large number of third-party packages and extensions, making it easy to integrate additional functionality into applications. Due to its features, documentation, and active community, Laravel has become one of the most popular PHP frameworks for web development.
        </Card.Body>
     </Card>
   </Container>
   <Footer/>
   
   </>
  )
}

export default LearnLaravel
