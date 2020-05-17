import React, {useState} from 'react';

import {Form, Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

import logo from '../../Assets/Caritas_Brand.png';
import TitleLogo from '../../Assets/Escrita 1.png';
import api from '../../services/api';

import './styles.css';


export default function Incident(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [valueGol, setValue] = useState(0);

    let history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();
        
        const ong_id =1;

        const data={
            title,
            description,
            valueGol
        }

        try{
            const request = api.post('incident',data,{
             headers:{
                authorization:ong_id,
            }
        })
            if(Error){
                alert('Insira as informações necessarias');
            }
            else{
                history.push('/profile');
                console.log(request)
            }

        }
        catch(err){
            console.log(err)
        }

    }
    
    return(
        <div className="container-incidents">
            <div className="header">
                <img src={logo} alt="Brand"/>
                <img src={TitleLogo} alt=""/>
            </div>
            <Form className="form">
                <Form.Group className="block-1 block-registration">
                            <Form.Label>Titulo do Caso</Form.Label>
                            <Form.Control className="input" type="text" placeholder="Insira o titulo do caso"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                required    
                            />
                </Form.Group>
                <Form.Group className="block-2 block-registration">
                            <Form.Label>Descrição do caso</Form.Label>
                            <Form.Control className="input" type="text" placeholder="Insira a descrição do caso"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                required
                            />
                </Form.Group>
                <Form.Group className="block-3 block-registration">
                    <Form.Label>Valor</Form.Label>
                    <Form.Control className="input" type="text" placeholder="Insira um valor (R$)"
                        value={valueGol}
                        onChange={e=>setValue(e.target.value)}
                        required
                     />
                </Form.Group>
                  
                <Button className="button-incidents" variant="" type="submit" onClick={handleSubmit}>
                    Cadastrar
                </Button>
            </Form>
        </div>
    )
};