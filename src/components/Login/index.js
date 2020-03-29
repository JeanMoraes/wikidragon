import React, { useState } from 'react';

import '../global.css';
import './index.css';

import logo from '../../assets/logo-wikidragon.png';

function Login({ history }){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    function handleLogin(e){
        e.preventDefault();

        if((username === 'admin') && (password === 'admin'))
            {history.push('/home');}
        else{
            setErrorMessage('Usuário e/ou senha incorretos.');
        }
    }

    return(
        <div className="container box-login">
            <div className="col col-l">
                <img src={logo} alt="WikiDragon" className="logo-login" />
            </div>
            <div className="col">
                <h1>Login</h1>
                <p>A WikiDragon é uma enciclopédia on-line gratuita, criada e editada por voluntários em todo o mundo, que curtem dragões.</p>
                <div className="form-login">
                    <form onSubmit={ handleLogin }>
                        <input 
                            type="text"
                            name="username"
                            placeholder="Usuário (admin)"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            autoComplete="off"
                        />
                        
                        <input
                            type="password"
                            name="password"
                            placeholder="Senha (admin)"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            autoComplete="off"
                        />
                        
                        <span className="error-message">{errorMessage}</span>

                        <button className="form-btn">ENTRAR</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;