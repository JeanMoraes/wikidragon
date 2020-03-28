import React from 'react';
import ReactDom from 'react-dom';

import '../global.css';
import './index.css';

import logo from '../../assets/logo-wikidragon.png';

function Home(){
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
                    
                    <div className="box-dragon">
                        <section>
                            <p className="title">Nome do Dragão</p>
                            <p className="info">Dragonite</p>
                        </section>
                        <section>
                            <p className="title">Tipo</p>
                            <p className="info">Fogo</p>
                        </section>
                        <section>
                            <p className="title">Descrição</p>
                            <p className="info">Breve descrição ...</p>
                        </section>
                        <section>
                            <button className="btn-details">Ver Detalhes</button>
                        </section>
                    </div>

                    <div className="box-dragon">
                        <section>
                            <p className="title">Nome do Dragão</p>
                            <p className="info">Dragonite</p>
                        </section>
                        <section>
                            <p className="title">Tipo</p>
                            <p className="info">Fogo</p>
                        </section>
                        <section>
                            <p className="title">Descrição</p>
                            <p className="info">Breve descrição ...</p>
                        </section>
                        <section>
                            <button className="btn-details">Ver Detalhes</button>
                        </section>
                    </div>

                    <div className="box-dragon">
                        <section>
                            <p className="title">Nome do Dragão</p>
                            <p className="info">Dragonite</p>
                        </section>
                        <section>
                            <p className="title">Tipo</p>
                            <p className="info">Fogo</p>
                        </section>
                        <section>
                            <p className="title">Descrição</p>
                            <p className="info">Breve descrição ...</p>
                        </section>
                        <section>
                            <button className="btn-details">Ver Detalhes</button>
                        </section>
                    </div>

                    <div className="box-dragon">
                        <section>
                            <p className="title">Nome do Dragão</p>
                            <p className="info">Dragonite</p>
                        </section>
                        <section>
                            <p className="title">Tipo</p>
                            <p className="info">Fogo</p>
                        </section>
                        <section>
                            <p className="title">Descrição</p>
                            <p className="info">Breve descrição ...</p>
                        </section>
                        <section>
                            <button className="btn-details">Ver Detalhes</button>
                        </section>
                    </div>

                </div>
            </main>
        </div>
    );
}

export default Home;