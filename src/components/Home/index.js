import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import '../global.css';
import './index.css';

import logo from '../../assets/logo-wikidragon.png';

function Home(){
    const [dragons, setDragons] = useState([]);

    useEffect(() => {
        async function loadDragon(){
            const response = await api.get('/dragon');
            setDragons(response.data);
        }

        loadDragon();
    }, []);

    return(
        <div className="container">
            <aside>
                <img src={logo} alt="WikiDragon" />

                <h2>Menu</h2>
                <nav>
                    <button className="btn-nav">Todos os Dragões</button>
                    <button className="btn-nav">Adicionar Dragão</button>                
                </nav>
            </aside>
            
            <main>
                <h1>LISTA DE DRAGÕES</h1>

                <div className="container-dragon">
                {dragons.map(dragon => 
                    <div className="box-dragon" key={dragon.id}>
                        <section>
                            <p className="title">Nome do Dragão</p>
                            <p className="info">{dragon.name}</p>
                        </section>
                        <section>
                            <p className="title">Tipo</p>
                            <p className="info">{dragon.type}</p>
                        </section>
                        <section>
                            <p className="title">Descrição</p>
                            <p className="info">{dragon.histories}</p>
                        </section>
                        <section>
                            <button className="btn-details">Ver Detalhes</button>
                        </section>
                    </div>
                        )
                }

                    
                </div>
            </main>
        </div>
    );
}

export default Home;