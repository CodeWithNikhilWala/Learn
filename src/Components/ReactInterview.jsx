import React from 'react'
import Header from './Header'
import { Container,Card } from 'react-bootstrap'
import Footer from './Footer'
const ReactInterview = () => {
  return (
   <>
   <Header/>
   <Container className='mb-2'>
    <Card className='mt-5' >
        <Card.Header>
            <h2>Here are some common ReactJS interview questions that can help you prepare for your interview:</h2>
        </Card.Header>
        <Card.Body>
        <ul>
    <li>What is ReactJS?</li>
    <li>What are the key features of ReactJS?</li>
    <li>What is JSX in React? How does it differ from HTML?</li>
    <li>Explain the virtual DOM and how it enhances React's performance.</li>
    <li>What are the differences between React components and HTML elements?</li>
    <li>How do you create a React component? Provide examples of both class and functional components.</li>
    <li>What are the lifecycle methods of React class components? Explain each phase briefly.</li>
    <li>What are hooks in React? How do they differ from class component lifecycle methods?</li>
    <li>How wolid you optimize the performance of a React application?</li>
    <li>What is state in React? How is it different from props?</li>
    </ul>
    </Card.Body>
    <Card.Footer>
    <ul>
    <li>What are controlled components in React?</li>
    <li>Explain the concept of "lifting state up" in React.</li>
    <li>What is the significance of keys in React lists?</li>
    <li>How can you pass data from a parent component to a child component in React?</li>
    <li>What are React fragments, and why are they usefli?</li>
    <li>How do you handle events in React?</li>
    <li>What is the purpose of the "setState" method, and why sholid you never modify state directly?</li>
    <li>Explain the concept of conditional rendering in React.</li>
    <li>What is the role of the "useEffect" hook in React?</li>
    <li>How does React Router work, and how can you implement routing in a React application?</li>
    <li>What are Higher-Order Components (HOCs), and how do they work?</li>
    <li>What is context in React, and how can it be used to share data between components?</li>
    <li>How do you handle forms in React?</li>
    <li>What are the different ways of styling React components?</li>
    <li>How can you perform server-side rendering (SSR) with React?</li>
  </ul>
       
        </Card.Footer>
    </Card>
   </Container>
   <Footer/>
   
   </>
  )
}

export default ReactInterview
