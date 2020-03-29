import React, { useState, useEffect } from 'react';
import api from '../../services/api';


import Sidebar from '../Sidebar';

import '../global.css';
import './index.css';

function SingleDragon(props){
    const [dragon, setDragon] = useState([]);
    const createdAt = "" + dragon.createdAt;
    const date = createdAt.split("T");
    const date_simple = date[0];

    useEffect(() => {
        async function loadDragon(){
            const response = await api.get(props.location.pathname);
            setDragon(response.data);
        }

        loadDragon();
    }, []);
    
    return(
        <div className="container">
            <Sidebar />
            
            <main>
                <h1>DETALHES DO DRAGÃO</h1>
                <div className="box-single-dragon">
                <h1>Nome: {dragon.name}</h1>
                <p>Data de Criação: {date_simple}</p>
                <p>Tipo do Dragão: {dragon.type}</p>
                </div>
            </main>
        </div>
    );
}

export default SingleDragon;