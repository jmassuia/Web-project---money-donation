import React, { useState, useEffect } from 'react'

import { FiPower, FiTrash2 } from 'react-icons/fi'
import { Button, Form, Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';


import {Avatar} from '@material-ui/core';
import api from '../../services/api'

import './styles.css'


export default function OngPage() {

    const ong_id = localStorage.getItem('ong_id'); //overwrite with localStorage.getItem('ong_id');
    const [incidents, setIncidents] = useState([]);
    let history = useHistory();
    var url = localStorage.getItem('imgProfile');

    
    useEffect(() => {
        api.get('session', {
            headers: {
                authorization: ong_id
            }
        }).then(response => {
            setIncidents(response.data.incident)
        })

    }, [ong_id])
    async function deleteIncidentHandler(id) {
        try {
            const response = api.delete(`incident/${id}`, {
                headers: {
                    authorization: ong_id
                }
            }

            )
            setIncidents(incidents.filter(incident => incident.id != id))
        } catch (err) {
            alert('Erro ao deletar caso, tente novamente')
        }
    }
    async function dataUpdate(e) {
        const oname = document.getElementById('name').value
        const oemail = document.getElementById('email').value
        const ophone = document.getElementById('phone').value
        const obankAgency = document.getElementById('bankAgency').value
        const obankAccount = document.getElementById('bankAccount').value

        const ongdata = {
        name: oname,
        email: oemail,
        phone: ophone,
        bankAgency: obankAgency,
        bankAccount: obankAccount,
    }
        try {
            await api.post('ongdataupdate', ongdata, {
                headers: {
                    authorization: ong_id
                }
            }
            )
            localStorage.setItem('name', ongdata.name)
            localStorage.setItem('email', ongdata.email)
            localStorage.setItem('phone', ongdata.phone)
            localStorage.setItem('bankAgency', ongdata.bankAgency)
            localStorage.setItem('bankAccount', ongdata.bankAccount)
            window.location.reload(false)
        } catch (err) {
            console.log(`Houve um erro: ${err}`)
        }
        /*fileUploadHandler(e)*/
    }

    function handleLogOff() {
        const ong_id = "" //overwrite to localStorage.clear("ong_id");
        localStorage.clear();
        history.push('/');
    }
    function handleNewIncident() {
        history.push('/incident')
    }

    return(
        <div className="all">

            <div className="formBackground">
                <header className="utils">
                    <Button className="logOffButton buttonUtils" onClick={handleLogOff}>
                        <FiPower className="logOffIcon" />
                    </Button>
                    <Button className="ongUtil buttonUtils" onClick={handleNewIncident}> Novo Caso</Button>
                </header>
                <div className="edit">
                    <Form.Group>
                        <Avatar src={url} alt="" className="imageInput"></Avatar>
                        <Form.Label className="imgLabel">Perfil</Form.Label>
                    </Form.Group>
                    <Form className="Form" method="post">
                        <div className="flexInputs">
                            <Form.Group className="bankInputs">
                                <Form.Label className="label">Email</Form.Label>
                                <Form.Control id='email' type="text" className="input-bank"
                                    placeholder={localStorage.getItem('email')}
                                />
                            </Form.Group>
                            <Form.Group className="bankInputs">
                                <Form.Label className="label">Telefone</Form.Label>
                                <Form.Control id='phone' type="text" className="input-bank" placeholder={localStorage.getItem('phone')} />
                            </Form.Group>
                            <Form.Group className="bankInputs">
                                <Form.Label className="label">Agência</Form.Label>
                                <Form.Control id='bankAgency' type="text" className="input-bank" placeholder={localStorage.getItem('bankAgency')} />
                            </Form.Group>
                            <Form.Group className="bankInputs">
                                <Form.Label className="label">Conta</Form.Label>
                                <Form.Control id='bankAccount' type="text" className="input-bank" placeholder={localStorage.getItem('bankAccount')} />
                            </Form.Group>
                        </div>
                        <Form.Group>
                            <Form.Label className="label">Nome da Organização</Form.Label>
                            <Form.Control id='name' type="text" className="input2"
                                placeholder={localStorage.getItem('name')}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="label">Link do vídeo</Form.Label>
                            <Form.Control type="text" className="input2" placeholder="Adicione o link de um vídeo da sua ONG"></Form.Control>
                        </Form.Group>
                        <Button className="buttonUtils ongUtil" onClick={dataUpdate}>Salvar</Button>
                    </Form>

                </div>
            </div>
            <div className="casesBG">
                <h3>Casos cadastrados</h3>
                <ul className="incidents">
                    {incidents.map(incident => (
                        <div className='cardDiv' key={incident.id}>
                            <Card className="ongCard">
                                <Card.Header>{incident.title}</Card.Header>
                                <Card.Body className="card-body">

                                    <Card.Text>
                                        <strong>Descrição:</strong>
                                        <p>{incident.description}</p>
                                        <strong>Valor:</strong>
                                        <p>R${incident.valueGol}</p>
                                    </Card.Text>

                                </Card.Body>
                                <FiTrash2 onClick={() => deleteIncidentHandler(incident.id)} className='deleteBtn' size={20} />
                            </Card>

                        </div>
                    ))}
                </ul>
            </div>
        </div>

    )
}