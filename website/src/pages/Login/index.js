import React,{useState} from 'react'

import {Button,Form} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

import logo from '../../Assets/Caritas_Brand.png';
import Title from '../../Assets/Escrita 1.png';
import api from '../../services/api';

import './styles.css';


export default function Login(){
    let ongid = ""
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    let history = useHistory();


    async function handleLogin(e){
        e.preventDefault();


        const ongData = {
            email,
            password
        };

        try{
            const response = await api.post('session',ongData);
            ongid = response.data.ong.id
            localStorage.setItem('ong_id',response.data.ong.id);
            localStorage.setItem('name',response.data.ong.name);
            localStorage.setItem('email',response.data.ong.email);
            localStorage.setItem('phone',response.data.ong.phone);
            localStorage.setItem('bankAgency',response.data.ong.bankAgency);
            localStorage.setItem('bankAccount',response.data.ong.bankAccount);
            localStorage.setItem('imgProfile',response.data.ong.ImageUrl);
            history.push('/profile');
        }
        catch(err){
            alert('O email e/ou senha inserida não existem!!');
            console.log("Houve um erro: " + err);
        }
        URLImage();
    }
    async function URLImage(){
        
        const image = await api.get('upload',{
            headers:{
                authorization:ongid
            }
        })
        try{
        if(image.data.src.url.length){
            localStorage.setItem("url",image.data.src.url);
            console.log(image)
    }}
    catch(err){
        localStorage.setItem("url", logo)
        console.log(`Usuário sem imagem.`)
    }
    }
    
    
    return(
         <div className="container-login">
            <div className="header">
                <img src={logo} alt="Brand"/>
                <img src={Title} alt=""/>
            </div>
            <Form className="form">
                <Form.Group className="block-login">
                    <Form.Label className="label">Email</Form.Label>
                    <Form.Control type="email" className="inputs" placeholder="Insira o e-mail da ONG"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="block-login">
                    <Form.Label className="label">Senha:</Form.Label>
                    <Form.Control className="inputs" type="password" placeholder="Insira sua senha" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button className="block-login button-login" variant="" onClick={handleLogin}>
                    Entrar
                </Button>
            </Form>
            <a href="/newONG">Ou, clique aqui caso ainda não tenha um cadastro</a>
        </div>       
    );
}

