import React, { useState, useEffect } from 'react'

import { FiUpload, FiPower, FiTrash2 } from 'react-icons/fi'
import {Button,Form,Card} from 'react-bootstrap'
import {useHistory} from 'react-router-dom';

import logo from '../../Assets/Caritas_Brand.png'
import Title from '../../Assets/Escrita 1.png'
import logoCard from '../../Assets/LogoCard.png'
import buttonImg from '../../Assets/Botão.png'
import api from '../../services/api'

import './styles.css'

export default function OngPage(){
    const ong_id = 1; //overwrite with localStorage.getItem('ong_id');
    const [picture, setPicture] = useState([]);
    const [url, setUrl] = useState([]);
    const [incidents, setIncidents] = useState([]);

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [bankAgency,setAgency] = useState('');
    const [bankAccount,setAccount] = useState('');


    let history = useHistory();

    useEffect(()=>{
        api.get('incident',{headers: {
            authorization: ong_id
        }
        }).then(response=>{
            setIncidents(response.data)
        })

    }, [ong_id])
    async function deleteIncidentHandler(id){
        try{
            const response = api.delete(`incident/${id}`,{
                headers:{
                    authorization: ong_id
                }
            }
            
            )
            setIncidents(incidents.filter(incident => incident.id != id))
        }catch(err){
            alert('Erro ao deletar caso, tente novamente')
        }
    }
   
    function onChangeHandler(e){
       setPicture([...picture, e.target.files[0]]);
       setUrl([...url,URL.createObjectURL(e.target.files[0])]);
   }
   async function fileUploadHandler(e){
       e.preventDefault();

        
        const data = new FormData()
        data.append('file',picture[0])
        try{
            const result = await api.post('upload',data,{
                headers:{
                    authorization:ong_id,
                }
            });
            console.log(result);
        }
        catch(err){
            alert('Imagem muito grande');
            console.log(err);
        }
    }
    function handleLogOff(){
        const ong_id = "" //overwrite to localStorage.clear("ong_id");
        history.push('/');
    }
    function handleNewIncident(){
        history.push('/incident')
    }
    return(
        <div className="all">
            
            <div className="formBackground">
                <header className="utils">
                    <Button className="logOffButton buttonUtils"onClick={handleLogOff}>
                        <FiPower className="logOffIcon"/>
                    </Button>
                    <Button className="ongUtil buttonUtils" onClick={handleNewIncident}> Novo Caso</Button>
                </header>
                <div className="edit">
                    <div className="uploadImage">
                        <Form.Group className="imageInput">
                            <Form.Label className="imgLabel">Perfil</Form.Label>
                            <FiUpload className="fiIcon"/>
                            <Form.Control 
                            name="inputimg"
                            type="file" 
                            className="inputimg"
                            onChange={onChangeHandler}>
                            </Form.Control>
                            <div className="imgPreview">
                                <img src={url} alt=""/>
                            </div>

                        </Form.Group>
                    </div>
                    <Form className="Form" method="post">
                        <div className="flexInputs">
                            <Form.Group className="bankInputs">
                                <Form.Label className="label">Email</Form.Label>
                                <Form.Control type="text" className="input-bank"
                                    placeholder={localStorage.getItem('email')}
                                />
                            </Form.Group>
                            <Form.Group className="bankInputs">
                                <Form.Label className="label">Telefone</Form.Label>
                                <Form.Control type="text" className="input-bank" placeholder={localStorage.getItem('phone')}/>
                            </Form.Group>
                            <Form.Group className="bankInputs">
                                <Form.Label className="label">Agência</Form.Label>
                                <Form.Control type="text" className="input-bank" placeholder={localStorage.getItem('bankAgency')}/>
                            </Form.Group>
                            <Form.Group className="bankInputs">
                                <Form.Label className="label">Conta</Form.Label>
                                <Form.Control type="text" className="input-bank" placeholder={localStorage.getItem('bankAccount')}/>
                            </Form.Group>
                        </div>    
                    <Form.Group>
                        <Form.Label className="label">Nome da Organização</Form.Label>
                        <Form.Control type="text" className="input2"
                            placeholder={localStorage.getItem('name')}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="label">Link do vídeo</Form.Label>
                        <Form.Control type="text" className="input2" placeholder="Adicione o link de um vídeo da sua ONG"></Form.Control>
                    </Form.Group>
                    <Button className="buttonUtils ongUtil" onClick={fileUploadHandler}>Salvar</Button>

                </Form>
                
                </div>
            </div>
        <div className="casesBG">
            <h3>Casos cadastrados</h3>
                    <ul>
                        {incidents.map(incident => (
                            <div className='cardDiv' key={incident.id}>
                                <Card  className="ongCard">
                                    <Card.Header>{incident.title}</Card.Header>
                                    <Card.Body>
                                        
                                        <Card.Text>
                                            <strong>Descrição:</strong>
                                            <p>{incident.description}</p>
                                            <strong>Valor:</strong>
                                            <p>R${incident.valueGol}</p>
                                        </Card.Text>
                                        
                                    </Card.Body>
                                    <FiTrash2 onClick={()=>deleteIncidentHandler(incident.id)} className='deleteBtn' size={20}/>
                                </Card>
                             
                            </div>
                        ))}
                    </ul>
            </div>
        </div>
        
    )
}