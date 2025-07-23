'use client';

import React, { useState } from 'react';
import styles from '../styles/Login.module.css';

const LoginPage: React.FC = () => {
  const [cns, setCns] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    alert(`CNS: ${cns}\nSenha: ${password}\nLembrar-me: ${remember}`);
    // Aqui você pode fazer a lógica de autenticação com o backend
  };

  return (
    <>
    <div className={styles.loginContainer}>
      <img src="/aa.png" alt="Logo" className={styles.logo} />
      <h1 className={styles.title}>Acesse sua conta</h1>

      <div className={styles.inputGroup}>
        <label htmlFor="cns">CNS (Cartão SUS)</label>
        <input
          type="text"
          id="cns"
          value={cns}
          placeholder="Digite seu CNS"
          onChange={(e) => setCns(e.target.value)}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className={styles.rememberForgot}>
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            id="remember"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <label htmlFor="remember">Lembrar-me</label>
        </div>
        <a href="/Senha" className={styles.forgotLink}>Esqueceu a senha?</a>
      </div>

      <button className={styles.btnLogin} onClick={handleLogin}>
        Acessar
      </button>
    </div>
    </>
  );
};

export default LoginPage;
