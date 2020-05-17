import React,{useState,useEffect} from 'react';

import './styles.css';

import {Card, Nav, Navbar,Carousel,CardDeck,Container,Row,Col} from 'react-bootstrap';
import logo from '../../Assets/Caritas_Brand.png';
import api from '../../services/api';


import facebookIcon from '../../Assets/Facebook icon.png'; 
import instragramIcon from '../../Assets/Instagram icon.png';
import twitterIcon from '../../Assets/Twitter icon.png'
import donateButton from '../../Assets/Botão.png'

export default function Home(){
    const [incidents, setIncidents] = useState([]);

    useEffect(()=>{
        api.get('incident')
        .then(response=>{
            setIncidents(response.data)
        })

    }, [])

    async function handleDonate(){

    }
    return (
        <div className="all" id="home">
                    <Navbar className="navbar fixed-top" expand="xl" collapseOnSelect variant="light">
                        <Navbar.Brand className="brandImg"href="#home">
                            <img src={logo} width="150" height="50"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link className="navlink" href="/login">Home</Nav.Link>
                                <Nav.Link className="navlink" href="/login">ONG's</Nav.Link>
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
                <h3>Conheça algumas de nossas ONG's</h3>
                <div className="divcard">
                    <CardDeck className="cardDeck">
                        {incidents.map(incident => (
                            <Card className="cards" key={incident.id}>
                                <Card.Img className='carddimg' variant="top" src={logo} />
                                <Card.Body>
                                    <Card.Title><span className='ongtitl'>{incident.name}</span><br/>{incident.title}</Card.Title>
                                    <Card.Text>
                                            <strong>Descrição:</strong>
                                            <p value={incident.description}>{incident.description}</p>
                                            <strong>Valor:</strong>
                                            <p>R${incident.valueGol}</p>
                                    </Card.Text>
                                </Card.Body>
                                <a href=""onClick={handleDonate}>
                                    <img src={donateButton} alt=""/>
                                </a>
                            </Card>
                    ))}
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
