import React, { useState } from 'react';
import './Login.css';

import api from '../services/api';

import logo from '../assets/logo.svg';

export default function Login({ history }) {

  const [username, setUsername] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/devs', {
      username
    });

    const { _id } = response.data;

    history.push(`/dev/${_id}`);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Timdev" />
        <input 
          placeholder="Digite seu usuário no Github"
          value={username} 
          onChange={event => setUsername(event.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>

  );
}