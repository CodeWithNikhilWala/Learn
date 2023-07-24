import React from 'react';
import Header from './Header';
import {  Container, Form, FormControl, Button, Row, Col,Card,} from 'react-bootstrap';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { IoMdMail, IoLogoWhatsapp } from 'react-icons/io';

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [showEmail, setShowEmail] = React.useState(false);
  const email = 'devjeetacharya003@gmail.com';

  const handleShowEmail = () => {
    setShowEmail(!showEmail);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSearch = () => {
    console.log(searchQuery);
    if (searchQuery) {
      const search = searchQuery.replace(/\s/g, '+');
      window.location.href = `https://www.google.com/search?q=${searchQuery}`;
    
    }

    
  };
  const renderCard = (imgSrc, footerContent, componentTo) => {
    const handleShareEmail = () => {
      window.location.href = `mailto:?subject=Check%20this%20out!&body=I%20found%20this%20interesting:%20${window.location.origin}${componentTo}`;
    };

    const handleShareWhatsApp = () => {
      const message = `I found this interesting: ${window.location.origin}${componentTo}`;
      const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
      window.location.href = url;
    };
    
   
    return (
      <Col  md={4}>
        
        <Card className="mb-4 " >
        <Link to={componentTo} style={{ textDecoration: 'none', color: 'inherit' }}> 
      <Card.Img variant="top" src={imgSrc} height={200} width={150}/>
          <Card.Body>
          
          <Card.Text style={{color:"red"}}>{footerContent}</Card.Text>
         
          </Card.Body>
          </Link>
          <Card.Footer>
            <Row>
              <Col xs={6}>
                <Button variant="outlined" onClick={handleShareEmail}>
                  <IoMdMail size={30} style={{ marginRight: 8,color:"red" }} />
                  
                </Button>
              </Col>
              <Col xs={6}>
                <Button variant="outlined" onClick={handleShareWhatsApp}>
                  <IoLogoWhatsapp size={30} style={{ marginRight: 8,color:"#06d6a0" }} />
                 
                </Button>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
       
       
      </Col>
    );
  };

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col md={8}></Col>
          <Col md={4}>
            <Form className="my-4">
              <FormControl
                type="text"
                placeholder="Type your search query here"
                className="mr-sm-2"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <Button style={{background:"#e9c46a",color:"black"}} onClick={handleSearch} className="my-2" >
                Search
              </Button>
             
            </Form>
          </Col>
        </Row>
        <h5>
          This Site has been developed to help programmers learn and share knowledge.
          Efforts have been taken to attach a screenshot and provide hands-on implementation details.
          Any feedback is welcome. Hope it helps people learn.
          For any queries, please reach us at our Email id <ArrowDownwardIcon />
        </h5>
        {showEmail ? (
          <Typography variant="body1" className="mb-3">
            My Email Is <a href={`mailto:${email}`}>{email}</a>
          </Typography>
        ) : (
      
       <Button variant="outlined" style={{ marginLeft: "30px",background:"#e9c46a" }} className='mb-3' onClick={handleShowEmail}>
            Show Email
          </Button>
        )}
        {showEmail && (
          <Typography variant="body1">
            Thank You For Contacting Via Email
          </Typography>
        )}

        <Row>
          {renderCard(
            'react.jpeg',
            'Learn ReactJs',
             '/react'
          )}
          {renderCard(
            'java.jpeg',
            'Learn Java',
            '/java'
           
          )}
          {renderCard(
            'spring.jpeg',
            'Learn SpringBoot',
            '/spring'

            
          )}
        </Row>
        <Row>
          {renderCard(
            'c++.jpeg',
            'Learn C++',
            '/c++'
           
          )}
          {renderCard(
            'python.jpeg',
            'Learn Python',
            '/python'
          
          )}
          {renderCard(
            'lara.jpeg',
            'Learn Laravel',
            '/lara'
          
          )}
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default Home;
