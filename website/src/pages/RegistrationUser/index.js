import React from 'react'

import './styles.css';
import {Button,Form} from 'react-bootstrap';
import logo from '../../Assets/Caritas_Brand.png'
import Title from '../../Assets/Escrita 1.png'

export default function RegistrationUser(){
    return(
         <div className="container-Registration">
            <div className="header">
                <img src={logo} alt="Brand"/>
                <img src={Title} alt=""/>
            </div>
            <Form className="form">
                <Form.Group className="block-1 block-registration">
                            <Form.Label>Nome completo</Form.Label>
                            <Form.Control className="input" type="text" placeholder="Insira seu nome completo aqui"/>
                </Form.Group>
                <Form.Group className="block-2 block-registration">
                            <Form.Label>Email</Form.Label>
                            <Form.Control className="input" type="text" placeholder="Insira seu email aqui"/>
                </Form.Group>
                <Form.Group className="block-5 block-registration">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control className="input" type="password" placeholder="Insira uma senha de acesso"/>
                </Form.Group>
                <Form.Group className="block-5 block-registration">
                            <Form.Label>Confirmar senha</Form.Label>
                            <Form.Control className="input" type="password" placeholder="Insira a senha novamente"/>
                </Form.Group>
                <Button className="button" variant="">
                    Cadastrar
                </Button>
            </Form>
        </div>       
    );
}