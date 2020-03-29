import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Sidebar from '../Sidebar';
import BoxDragon from '../BoxDragon';

import '../global.css';
import './index.css';

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

    //função para ordenar os dragões
    const dragonsList = dragons.sort((a, b) => {
        return a.name.localeCompare(b.name)
    });

    return(
        <div className="container">

            <Sidebar />
            
            <main>
                <h1>LISTA DE DRAGÕES</h1>

                <div className="container-dragon">
                    {dragonsList.map(dragon => 
                        <BoxDragon
                            key={dragon.id}
                            id={dragon.id}
                            name={dragon.name}
                            type={dragon.type}
                            histories={dragon.histories}
                            handleDeleteDragon={() => handleDeleteDragon(dragon.id)}
                        />
                        )
                    }
                </div>
            </main>
        </div>
    );
}

export default Home;