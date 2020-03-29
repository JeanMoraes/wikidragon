import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import logo from '../../assets/logo-wikidragon.png';

export default function Sidebar() {
  return (
    <aside>
        <img src={logo} alt="WikiDragon" />

        <h2>Menu</h2>
        <nav>
            <Link to="/home"><button className="btn-nav">Todos os Dragões</button></Link>
            <Link to="/add-dragon"><button className="btn-nav">Adicionar Dragão</button></Link>           
        </nav>
    </aside>
  );
}
