import React from 'react'

import './styles.css';
import logo from '../../Logo.jpeg'

export default function Login(){
    return(
        <div className="logon-container">
        <section className="form">
            <form>
                <h1>Faça seu login</h1>
                <input 
                    type="text" 
                    placeholder="Seu id"
                />
                <button className="button" type="submit">Entrar</button>
            </form>
        </section>

        <img src={logo} width="100" height="100"alt="logo"/>
    </div>
    );
}

