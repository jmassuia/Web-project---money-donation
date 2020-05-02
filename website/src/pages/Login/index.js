import React,{useState} from 'react'

import './styles.css';
import {Button,Form} from 'react-bootstrap';
import logo from '../../Assets/Caritas_Brand.png';
import Title from '../../Assets/Escrita 1.png';

import api from '../../services/api';

export default function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    

    async function handleLogin(e){
        e.preventDefault();

        const ongData = {
            email,
            password
        };

        console.log(ongData);

        try{
            const response = await api.post('session',ongData);
            localStorage.setItem('auth',response.data.id.id);
        }
        catch(err){
            alert('O email e/ou senha inserida não existem!!');
            console.log(err);
        }
    }
    return(
         <div className="container-login">
            <div className="header">
                <img src={logo} alt="Brand"/>
                <img src={Title} alt=""/>
            </div>
            <Form className="form" onSubmit={handleLogin}>
                <Form.Group className="block-login">
                    <Form.Label className="label">Email</Form.Label>
                    <Form.Control type="email" className="inputs" placeholder="Insira o e-mail da ONG"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="block-login">
                    <Form.Label className="label">Senha:</Form.Label>
                    <Form.Control className="inputs" type="password" placeholder="Insira sua senha" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button className="block-login button-login" variant="" type="submit">
                    Entrar
                </Button>
            </Form>
            <a href="/newONG">Ou, clique aqui caso ainda não tenha um cadastro</a>
        </div>       
    );
}

