import React from 'react';

import './styles.css';

import {Card, Nav, Navbar,Carousel,CardDeck, Container} from 'react-bootstrap';
//import logo from '../../Assets/Caritas_Brand.png';

export default function Home(){
    return (
        <div className="all">
                    <Navbar className="navbar" expand="xl" collapseOnSelect bg="light" variant="light">
                        <Navbar.Brand href="#home">
                            <img src="" width="150" height="50"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link className="navlink" href="#features">Home</Nav.Link>
                                <Nav.Link className="navlink" href="#pricing">Serviços</Nav.Link>
                                <Nav.Link className="navlink" href="">Orçamentos</Nav.Link>
                                <Nav.Link className="navlink" href="">Contatos</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
            <div className="carousel">
                <Carousel className="video-container">
                    <Carousel.Item>
                        <iframe width="1280" height="620" 
                            src="https://www.youtube.com/embed/WKN701td5mQ" 
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen   
                            alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <iframe width="1280" height="620" 
                        src="https://www.youtube.com/embed/WKN701td5mQ" 
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <iframe width="1280" height="620" 
                        src="https://www.youtube.com/embed/WKN701td5mQ" 
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        alt="Second slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
                <div className="divcard">
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
                        
                    </CardDeck>
                </div>
    </div>
    )
}
