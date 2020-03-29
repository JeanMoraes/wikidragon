import React, { useState, } from 'react';
import {Link} from 'react-router-dom';

import './index.css';

function BoxDragon(props){

    const [name_dragon, setNameDragon] = useState(props.name);
    const [type_dragon, setTypeDragon] = useState(props.type);
    const [histories_dragon, setHistoriesDragon] = useState(props.histories);

    const [visibleFormEdit, setVisibleFormEdit] = useState(false);

    function handleVisibilityFormEdit(){
        setVisibleFormEdit(!visibleFormEdit);
    }

    return(
        <div key={props.id} className="box-dragon">
            <button className="btn-delete" onClick={ () => props.handleDeleteDragon(props.id) }><i className="far fa-trash-alt"></i></button>
            <button className="btn-update" onClick={ () => handleVisibilityFormEdit() }><i className="fas fa-edit"></i></button>
            <section>
                <p className="title">Nome do Dragão</p>
                <p className="info">{props.name}</p>
            </section>
            <section>
                <p className="title">Tipo</p>
                <p className="info">{props.type}</p>
            </section>
            <section>
                <p className="title">Descrição</p>
                <p className="info">{props.histories}</p>
            </section>
            
            <section className={visibleFormEdit ? "form-edit visible" : "form-edit hidden"}>
                <form onSubmit={ () => props.handleUpdateDragon() }>
                    <input
                        type="text"
                        name="name_dragon"
                        value={name_dragon}
                        onChange={e => setNameDragon(e.target.value) } />

                    <input
                        type="text"
                        name="type_dragon"
                        value={type_dragon}
                        onChange={e => setTypeDragon(e.target.value)}/>

                    <input
                        type="text"
                        name="histories_dragon"
                        value={histories_dragon}
                        onChange={e => setHistoriesDragon(e.target.value) }/>

                    
                    <button>Alterar Dragão</button>
                </form>
            </section>
            
            <section className="btn-actions">
                <Link to={`dragon/${props.id}`}>
                    <button className="btn-details">Ver Detalhes</button>
                </Link>
            </section>
        </div>
    )
}

export default BoxDragon;