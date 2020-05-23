import React from 'react'

import './styles.css';
import {Button,Form} from 'react-bootstrap';
import logo from '../../Assets/Caritas_Brand.png'
import Title from '../../Assets/Escrita 1.png'

export default function LoginUser(){
    return(
         <div className="container-login">
            <div className="header">
                <img src={logo} alt="Brand"/>
                <img src={Title} alt=""/>
            </div>
            <Form className="form">
                <Form.Group className="block-login">
                    <Form.Label className="label">E-mail</Form.Label>
                    <Form.Control type="email" className="inputs" placeholder="Insira seu e-mail aqui" />
                </Form.Group>
                <Form.Group className="block-login">
                    <Form.Label className="label">Senha:</Form.Label>
                    <Form.Control className="inputs" type="password" placeholder="Insira sua senha aqui" />
                </Form.Group>
                <Button className="button-login" variant="">
                    Entrar
                </Button>
            </Form>
            <a href="/newUser">Ou, clique aqui caso ainda não tenha um cadastro</a>
        </div>       
    );
}

