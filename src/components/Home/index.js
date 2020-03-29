import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import '../global.css';
import './index.css';

import logo from '../../assets/logo-wikidragon.png';

function Home({ history }){
    const [dragons, setDragons] = useState([]);

    useEffect(() => {
        async function loadDragon(){
            const response = await api.get('/dragon');
            setDragons(response.data);
        }

        loadDragon();
    }, []);

    async function handleDeleteDragon(id){
        try{
            await api.delete(`dragon/${id}`, {
                headers:{
                    "Content-Type":"application/json",
                }
            });

            setDragons(dragons.filter(dragon => dragon.id !== id ));
            alert('Dragão deletado com sucesso!');

        } catch (err){
            alert('Erro ao tentar deletar esse dragão!')
        }

    };

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
                    {dragons.map(dragon => 
                        <div key={dragon.id} className="box-dragon">
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
                            <section className="btn-actions">
                                <Link to={`dragon/${dragon.id}`}><button className="btn-details">Ver Detalhes</button></Link>
                                <button onClick={ () => handleDeleteDragon(dragon.id) }><i className="far fa-trash-alt"></i></button>
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