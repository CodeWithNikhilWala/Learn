import React from 'react'
import Header from './Header'
import { Card, Container } from 'react-bootstrap'
import Footer from './Footer'

const LearnReact = () => {
  return (
    <>
    <Header/>
    <Container className="mt-5 pt-4"  >
        <h1>Quick Start</h1>
        <Card>
            <Card.Header>
                <h4>You will learn</h4>
            </Card.Header>
            <Card.Body>
             <ul>
                <li>
                How to create and nest components
                </li>
             </ul>
             <ul>
                <li>
                How to add markup and styles
                </li>
             </ul>
             <ul>
                <li>
                How to display data
                </li>
             </ul>
             <ul>
                <li>
                How to render conditions and lists
                </li>
                </ul>
                <ul>
                    <li>
                    How to respond to events and update the screen
                    </li>
                </ul>
                <ul>
                    <li>
                    How to share data between components
                    </li>
                </ul>
              
            </Card.Body>
        </Card>
        <h2 className='mt-2'>Creating and nesting components </h2>

        <h5 className='mt-4'>React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

           React components are JavaScript functions that return markup:</h5>
          <Card>
           <Card.Header>
           How to create and nest components?
           </Card.Header>
           <Card.Body>
           React is a component-based framework. Therefore, every React app has a root component, built with one or more components that can be nested with other components to any level.
           Nesting components aid in the development of complex User Interfaces by utilizing modular components. Therefore, knowing when and how to nest components correctly is essential in React. Your code will be messy and challenging to reuse if components are not properly nested.
           <h3>Nested components</h3>
           A nested component is any child component linked to a parent component. This relationship between the child and parent components is formed through composition rather than inheritance. This is to say that rather than inheriting one component from another, each component is created by assembling smaller ones.
           Even though component nesting helps you structure your code much cleaner, if you do not do component nesting correctly, you’ll end up with much more complex and less efficient code. Therefore, let’s look at different component nesting styles, when to use them, and the rules to follow.
           <h3>Nesting without child components</h3>
           When developing presentational components, this nesting style is ideal. You can separate UI elements effectively and quickly pass data as props to the nested components in this way. 
           <h3>Nesting with child components</h3>
           When developing components like Sidebar or Dialog that represent generic "boxes," you may not know all of their children in advance. In such cases, passing the components as child elements is preferable.
           The children prop allows you to access these passed child elements in the nested component.
           </Card.Body>
          </Card>
          <Card className='my-3'>
            <Card.Header>
            How to add markup and styles
            </Card.Header>
            <Card.Body>
            Tailwind is a popular CSS framework that makes your User Interface design making the process easier. It provides low-level classes and those classes combine to create styles for various components. Tailwind-CSS comes with a bunch of predefined styling but as a developer, we need more custom styling and the styles offered by tailwind are not enough to fulfill all requirements
           To overcome from limited style issue tailwind allows us to add as many styling as we want to use in two ways:
           Inline StylingConfig StylingColor is the most common thing we need while building a webpage, so we will be taking color to see ways to add custom styling.
           Inline Styling: Tailwind allows to use of inline styling by using square brackets (i.e. [ color code ]). With these square brackets, you can use any CSS property. With inline CSS there are some limitations. It cannot be reused again and again, you have to type the color code every time you want to use it.
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
            How to display data
            </Card.Header>
            <Card.Body>
            To display data in ReactJS, you can use JSX (JavaScript XML) to render UI components and display the data dynamically. JSX allows you to write HTML-like code within your JavaScript code, making it easy to build user interfaces.

            </Card.Body>
          </Card>
          <Card className='my-3'>
            <Card.Header>
                <h1 style={{textAlign:"center"}}>ReactJs In One Video</h1>
            </Card.Header>
            <Card.Body style={{display:"flex",justifyContent:"center"}} >
          <iframe width="560" height="315" src="https://www.youtube.com/embed/RGKi6LSPDLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Card.Body>
          
          </Card>
    </Container>
    <Footer/>
    </>
  )
}

export default LearnReact
