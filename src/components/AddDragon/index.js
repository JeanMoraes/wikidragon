import React, { useState } from 'react';
import api from '../../services/api';

import Sidebar from '../Sidebar';

import '../global.css';
import './index.css';

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
            alert('Erro ao tentar cadastrar o Dragão. Tente novamente.')
        }
    }

    return(
        <div className="container">
            
            <Sidebar />
            
            <main>
                <h1>ADICIONAR UM DRAGÃO</h1>

                <div className="container-dragon">
                    
                    <div className="form-box">
                    <span className="success-message">{status_message}</span>
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