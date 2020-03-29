import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import '../global.css';
import './index.css';

import logo from '../../assets/logo-wikidragon.png';

function AddDragon(){

    const [name_dragon, setNameDragon] = useState('');
    const [type_dragon, setTypeDragon] = useState('');
    const [histories_dragon, setHistoriesDragon] = useState('');
    const [status_message, setStatusMessage] = useState('');

    async function handleNewDragon(e){
        e.preventDefault();

        const data = {
            name: name_dragon,
            type: type_dragon,
            histories: histories_dragon
        };

        try{
            await api.post('dragon', data, {
                headers:{
                    "Content-Type":"application/json",
                }
            });

            setStatusMessage('Dragão cadastrado com sucesso!');
            setNameDragon('');
            setTypeDragon('');
            setHistoriesDragon('');

        
        } catch (err){
            setStatusMessage('Erro ao tentar cadastrar, tente novamente.');
        }
    }

    return(
        <div className="container">
            <aside>
                <img src={logo} alt="WikiDragon" />

                <h2>Menu</h2>
                <nav>
                    <Link to="/home"><button className="btn-nav">Todos os Dragões</button></Link>
                    <Link to="/add-dragon"><button className="btn-nav">Adicionar Dragão</button></Link>           
                </nav>
            </aside>
            
            <main>
                <h1>LISTA DE DRAGÕES</h1>

                <div className="container-dragon">
                    
                    <div className="form-box">
                    <span>{status_message}</span>
                    <form onSubmit={ handleNewDragon }>
                        <input
                            type="text"
                            name="name_dragon"
                            placeholder="Nome do Dragão"
                            value={name_dragon}
                            onChange={e => setNameDragon(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            name="type_dragon"
                            placeholder="Tipo do Dragão"
                            value={type_dragon}
                            onChange={e => setTypeDragon(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            name="histories_dragon"
                            placeholder="Descrição do Dragão"
                            value={histories_dragon}
                            onChange={e => setHistoriesDragon(e.target.value)}
                            required
                        />
                        <button className="form-btn">CADASTRAR</button>
                    </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AddDragon;