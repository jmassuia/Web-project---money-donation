import React,{useState} from 'react'

import {useHistory} from 'react-router-dom';

import {Button,Form,Col} from 'react-bootstrap';
import logo from '../../Assets/Caritas_Brand.png'
import Title from '../../Assets/Escrita 1.png'
import api from '../../services/api';

import './styles.css';

export default function Registration(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [CNPJ, setCNPJ] = useState('');
    const [phone, setPhone] = useState('');
    const [bankAgency, setBankAcency] = useState('');
    const [bankAccount, setBankAccount] = useState('');
    const [password, setPassword] = useState('');

    var history = useHistory();

    async function handleResgiter(e){
        e.preventDefault();

        const data = {
            name,
            CNPJ,
            email,
            phone,
            bankAgency,
            bankAccount,
            password
        }


        try{
            const response = api.post('ongs',data);
            history.push('/login');
        }
        catch(err){
            alert('Ong já cadastrada!!');
            console.log(err);
        }
    }


    return(
        <div className="container-Registration">
            <div className="header">
                <img src={logo} alt="Brand"/>
                <img src={Title} alt=""/>
            </div>
            <Form className="form" onSubmit={handleResgiter}>
                <Form.Group className="block-1 block-registration">
                            <Form.Label>Nome da ONG</Form.Label>
                            <Form.Control className="input" type="text" placeholder="Insira o nome da ONG"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required    
                            />
                </Form.Group>
                <Form.Group className="block-2 block-registration">
                            <Form.Label>Email</Form.Label>
                            <Form.Control className="input" type="email" placeholder="Insira o email da ONG"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                </Form.Group>
                <Form.Row className="row row-1">
                    <Col className="col">
                        <Form.Group className="block-3 block-registration">
                            <Form.Label>CNPJ</Form.Label>
                            <Form.Control className="input" type="text" placeholder="Insira o CNPJ da ONG"
                                value={CNPJ}
                                onChange={e => setCNPJ(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col className="col">
                        <Form.Group className="block-4 block-registration">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control className="input" type="text" placeholder="Insira o telefone da ONG"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="row row-2">
                        <Form.Group className="block-5 block-registration">
                                <Form.Label>Agencia Bancária</Form.Label>
                                <Form.Control className="input" type="text" placeholder="Insira a agencia bancaria"
                                    value={bankAgency}
                                    onChange={e => setBankAcency(e.target.value)}
                                    required
                                />
                        </Form.Group>
                        <Form.Group className="block-6 block-registration">
                                <Form.Label>Conta Bancária</Form.Label>
                                <Form.Control className="input" type="text" placeholder="Insira a Conta Bancária"
                                    value={bankAccount}
                                    onChange={e => setBankAccount(e.target.value)}
                                    required
                                />
                        </Form.Group>
                </Form.Row>
                <Form.Group className="block-7 block-registration">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control className="input" type="password" placeholder="Insira uma senha de acesso"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                </Form.Group>
                <Button className="button" variant="" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </div>       
    )
};