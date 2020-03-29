import React from 'react';
import {Link} from 'react-router-dom';

import './index.css';

const BoxDragon = (props) => {
    return(
        <div key={props.id} className="box-dragon">
            <button className="btn-delete" onClick={ () => props.handleDeleteDragon(props.id) }><i className="far fa-trash-alt"></i></button>
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
            <section className="btn-actions">
                <Link to={`dragon/${props.id}`}>
                    <button className="btn-details">Ver Detalhes</button>
                </Link>
            </section>
        </div>
    )
}

export default BoxDragon;