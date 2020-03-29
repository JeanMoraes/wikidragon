import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import '../global.css';
import './index.css';

import logo from '../../assets/logo-wikidragon.png';

function SingleDragon(props, { history }){
    const [dragon, setDragon] = useState([]);

    useEffect(() => {
        async function loadDragon(){
            const response = await api.get(props.location.pathname);
            setDragon(response.data);
        }

        loadDragon();
    }, []);
    
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
                <h1>DETALHES DO DRAGÃO</h1>
                <div className="box-single-dragon">
                <h1>Nome: {dragon.name}</h1>
                <p>Data de Criação: {dragon.createdAt}</p>
                <p>Tipo do Dragão: {dragon.type}</p>
                </div>
            </main>
        </div>
    );
}

export default SingleDragon;