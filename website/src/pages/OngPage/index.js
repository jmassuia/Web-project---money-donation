import React, { useState, useEffect } from 'react'

import { FiUpload, FiPower, FiTrash2 } from 'react-icons/fi'
import {Button,Form, Card} from 'react-bootstrap'
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
    useEffect(()=>{
        api.get('/incident?ong_id=1',{headers: {
            authorization: ong_id
        }
        }).then(response=>{
            setIncidents(response.data)
        })

    }, [ong_id])
    console.log(ong_id)
   
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
    
    return(
        <div className="all">
        <div className="formBackground">
            <FiPower className="logOff"size={25}/>
            <div>
                <Form.Label className="imgLabel">Perfil</Form.Label>
                <Form.Group className="imageInput">
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
                        <Form.Label className="label">Banco</Form.Label>
                        <Form.Control type="text" className="input-bank" placeholder="Banco"/>
                    </Form.Group>
                    <Form.Group className="bankInputs">
                        <Form.Label className="label">Tipo de Conta</Form.Label>
                        <Form.Control type="text" className="input-bank" placeholder="Tipo de Conta"/>
                    </Form.Group>
                    <Form.Group className="bankInputs">
                        <Form.Label className="label">Agência</Form.Label>
                        <Form.Control type="text" className="input-bank" placeholder="Agência"/>
                    </Form.Group>
                    <Form.Group className="bankInputs">
                        <Form.Label className="label">Conta</Form.Label>
                        <Form.Control type="text" className="input-bank" placeholder="Conta"/>
                    </Form.Group>
                </div>    
                <Form.Group>
                    <Form.Label className="label">Nome da Organização</Form.Label>
                    <Form.Control type="text" className="input2" placeholder="Nome da Organização"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="label">Link do vídeo</Form.Label>
                    <Form.Control type="text" className="input2" placeholder="Adicione o link de um vídeo da sua ONG"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="label">Texto</Form.Label>
                    <Form.Control type="textarea" className="textInput" placeholder="Insira aqui a descrição da sua ONG"></Form.Control>
                </Form.Group>
                <Button className="saveButton" onClick={fileUploadHandler}>Salvar</Button>
            </Form>
            
        </div>
        
        <div className="casesBG">
                <div className="cases">
                    <ul>
                        {incidents.map(incident => (
                            <li key={incident.id}>
                                <strong>CASO:</strong>
                                <p> {incident.title}</p>

                                <strong>DESCRIÇÃO</strong>
                                <p> {incident.description}</p>
                                
                                <strong>VALOR:</strong>
                                <p>R${incident.valueGol}</p>
                                <FiTrash2 size={20}></FiTrash2>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        
    )
}