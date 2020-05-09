import React from 'react';


import {Card,Button, Form,Nav,Navbar,FormControl,Carousel,Container,CardDeck } from 'react-bootstrap'
import logo from '../../Assets/Caritas_Brand.png';
import './styles.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default function Home(){
    return (
        
            
        <div>
                <div  >
                          
                    
                    <Navbar bg="light" fluid variant="light">
                <Navbar.Brand href="#home">Caritas</Navbar.Brand>
                <Nav className="mr-auto">
                 <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Todas as ONG's</Nav.Link>
               <Nav.Link href="#pricing">Seja um Parceiro</Nav.Link>
                </Nav>
        <Form inline>
      
              <Button variant="outline-secondary">Login</Button>
      </Form>
                                </Navbar>


                    
                   
              
                     </div>

            <div>
            <Carousel>
  <Carousel.Item>
  <iframe width="100%" height="620" src="https://www.youtube.com/embed/WKN701td5mQ" frameborder="0"
             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen   
             
             alt="Second slide" />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <iframe width="100%" height="620" src="https://www.youtube.com/embed/WKN701td5mQ" frameborder="0"
             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen   
             
             alt="Second slide" />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <iframe width="100%" height="620" src="https://www.youtube.com/embed/WKN701td5mQ" frameborder="0"
             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen   
             
             alt="Second slide" />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

            </div>
            <br></br>
<div>

<CardDeck>
  <Card>
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
  <Card>
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
  <Card>
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
<br></br>
<div>

<CardDeck>
  <Card>
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
  <Card>
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
  <Card>
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

<div>

<MDBFooter color= "success-color"  className="font-small pt-4 mt-4">
      <MDBContainer color="success-color" fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Não consigo por cor!! 
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
           
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>

</div>

        </div>
        
    )
}
