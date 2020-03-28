import React from 'react';
import ReactDom from 'react-dom';

import '../global.css';
import './index.css';

import logo from '../../assets/logo-wikidragon.png';


function Login(){
    return(
        <div className="container box-login">
            <div className="col col-l">
                <img src={logo} alt="WikiDragon" className="logo-login" />
            </div>
            <div className="col">
                <h1>Login</h1>
                <p>A WikiDragon é uma enciclopédia on-line gratuita, criada e editada por voluntários em todo o mundo, que curtem dragões.</p>
                <div className="form-login">
                    <form>
                        <input type="text" name="user" placeholder="Usuário" />
                        <input type="pass" name="password" placeholder="Senha" />
                        <button className="form-btn">ENTRAR</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;