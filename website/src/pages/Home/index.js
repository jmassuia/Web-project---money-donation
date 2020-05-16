import React from 'react';

import './styles.css';

import {Card, Nav, Navbar,Carousel,CardDeck,Container,Row,Col, Button} from 'react-bootstrap';
import logo from '../../Assets/Caritas_Brand.png';

import facebookIcon from '../../Assets/Facebook icon.png'; 
import instragramIcon from '../../Assets/Instagram icon.png';
import twitterIcon from '../../Assets/Twitter icon.png'


export default function Home(){
    return (
        <div className="all">
                    <Navbar className="navbar" expand="xl" collapseOnSelect bg="light" variant="light">
                        <Navbar.Brand className="brandImg"href="#home">
                            <img src={logo} width="150" height="50"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link className="navlink" href="#features">Home</Nav.Link>
                                <Nav.Link className="navlink" href="#pricing">ONG's</Nav.Link>
                                <Nav.Link className="navlink" href="">Seja um parceiro</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
            <div className="carousel">
                <Carousel className="video-container">
                    <Carousel.Item className="carousel-item">
                        <iframe width="1280" height="620" 
                            src="https://www.youtube.com/embed/WKN701td5mQ" 
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen   
                            alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item">
                        <iframe width="1280" height="620" 
                        src="https://www.youtube.com/embed/WKN701td5mQ" 
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item">
                        <iframe width="1280" height="620" 
                        src="https://www.youtube.com/embed/WKN701td5mQ" 
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        alt="Second slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="cards-container">
                <h3>Conheça algumas de nossas ONG's</h3>
                <CardDeck className="cardDeck">
                    <Card className="cards">
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card className="cards">
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card className="cards">
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card className="cards">
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
            <Container className="footer-container">
                <Row className="row">
                    <Col className="col col1">
                        <p>Copyright © 2020 | Caritas</p>
                    </Col>
                    <Col className="col col2">
                        <a href="">
                            <img src={facebookIcon} alt="facebook icon"/>
                        </a>
                        <a href="">
                            <img src={instragramIcon} alt="facebook icon"/>
                        </a>
                        <a href="">
                            <img src={twitterIcon} alt="facebook icon"/>
                        </a>
                    </Col>
                </Row>
            </Container>
    </div>
    )
}
