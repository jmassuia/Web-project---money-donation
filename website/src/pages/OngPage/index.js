import React, { useState } from 'react'

import './styles.css'
import { FiUpload } from 'react-icons/fi'
import { Button, Form, Card } from 'react-bootstrap'
import logo from '../../Assets/Caritas_Brand.png'
import Title from '../../Assets/Escrita 1.png'
import logoCard from '../../Assets/LogoCard.png'
import buttonImg from '../../Assets/Botão.png'
import api from '../../services/api'

export default function OngPage() {
    const [image, setImage] = useState();


    async function fileUploadHandler(e) {
        e.preventDefault();

        const result = await api.post('upload', image);
        console.log(result);
    }
    return (
            <div className="formBackground">
                <Form className="Form" method="post">
                    <div className="flexInputs">
                        <Form.Group className="bankInputs">

                            <Form.Label className="label">Banco</Form.Label>
                            <Form.Control type="text" className="input-bank" placeholder="Banco"></Form.Control>

                        </Form.Group>

                        <Form.Group className="bankInputs">
                            <Form.Label className="label">Tipo de Conta</Form.Label>
                            <Form.Control type="text" className="input-bank" placeholder="Tipo de Conta"></Form.Control>

                        </Form.Group>

                        <Form.Group className="bankInputs">

                            <Form.Label className="label">Agência</Form.Label>
                            <Form.Control type="text" className="input-bank" placeholder="Agência"></Form.Control>

                        </Form.Group>

                        <Form.Group className="bankInputs">

                            <Form.Label className="label">Conta</Form.Label>
                            <Form.Control type="text" className="input-bank" placeholder="Conta"></Form.Control>

                        </Form.Group>
                    </div>
                    <Form.Label className="label">Nome da Organização</Form.Label>
                    <Form.Control type="text" className="input2" placeholder="Nome da Organização"></Form.Control>

                    <Form.Label className="label">Link do vídeo</Form.Label>
                    <Form.Control type="text" className="input2" placeholder="Adicione o link de um vídeo da sua ONG"></Form.Control>


                    <Form.Label className="imgLabel">Logotipo</Form.Label>
                    <Form.Group className="imageInput">
                        <div className="icon">
                            <FiUpload className="fiIcon"></FiUpload>
                        </div>
                        <Form.Control
                            name="inputimg"
                            value={image}
                            type="file"
                            className="inputimg"
                            onChange={e => setImage(e.target.value)}>

                        </Form.Control>

                    </Form.Group>
                    <Button onClick={fileUploadHandler}>upload</Button>
                    <Form.Label className="label">Texto</Form.Label>
                    <Form.Control type="textarea" className="textInput" placeholder="Insira aqui a descrição da sua ONG"></Form.Control>
                    <Card className="ongCard">
                        <Card.Body>
                            <div className="ongImgDiv">
                                <Card.Img className="cardImg" src={logoCard} />

                            </div>
                            <Card.Title>OngName</Card.Title>
                            <Card.Text>
                                Escreva na caixa "Texto" o que deseja que apareça aqui.
                            </Card.Text>

                        </Card.Body>
                        <div className="doediv"></div>
                        <Card.Img className="doeButton" src={buttonImg} />
                    </Card>
                    <div className="buttonDiv">
                        <Button className="saveButton">Salvar</Button>
                    </div>
                </Form>

            </div>
    )
}