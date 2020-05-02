import React from 'react'

import './styles.css';
import {Button,Form,Col} from 'react-bootstrap';
import logo from '../../Assets/Caritas_Brand.png'
import Title from '../../Assets/Escrita 1.png'

import api from '../../services/api';

export default function Registration(){
    return(
        <div className="container-Registration">
            <div className="header">
                <img src={logo} alt="Brand"/>
                <img src={Title} alt=""/>
            </div>
            <Form className="form">
                <Form.Group className="block-1 block-registration">
                            <Form.Label>Nome da ONG</Form.Label>
                            <Form.Control className="input" type="text" placeholder="Insira o nome da ONG"
                            
                            />
                </Form.Group>
                <Form.Group className="block-2 block-registration">
                            <Form.Label>Email</Form.Label>
                            <Form.Control className="input" type="text" placeholder="Insira o email da ONG"
                            
                            />
                </Form.Group>
                <Form.Row className="row">
                    <Col className="col">
                        <Form.Group className="block-3 block-registration">
                            <Form.Label>CNPJ</Form.Label>
                            <Form.Control className="input" type="text" placeholder="Insira o CNPJ da ONG"
                            
                            />
                        </Form.Group>
                    </Col>
                    <Col className="col">
                        <Form.Group className="block-4 block-registration">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control className="input" type="text" placeholder="Insira o telefone da ONG"
                            
                            />
                        </Form.Group>
                    </Col>
                    <Col className="col">
                        <Form.Group className="block-5 block-registration">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control className="input" type="password" placeholder="Insira uma senha de acesso"
                            
                            />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Button className="button" variant="">
                    Cadastrar
                </Button>
            </Form>
        </div>       
    )
};