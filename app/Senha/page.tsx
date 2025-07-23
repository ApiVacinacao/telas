'use client';

import React, { useState } from 'react';
import styles from '../styles/Login.module.css'; // Usando mesmo estilo da tela de login

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    alert(`Instruções enviadas para: ${email}`);
    // Aqui você pode integrar com o backend
  };

  return (
    <div className={styles.loginContainer}>
      <img src="/aa.png" alt="Logo" className={styles.logo} />
      <h1 className={styles.title}>Recuperar Senha</h1>

      <div className={styles.inputGroup}>
        <label htmlFor="email">E-mail cadastrado</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button className={styles.btnLogin} onClick={handleSubmit}>
        Enviar instruções
      </button>

      <a href="/" className={styles.backLink}>Voltar para o login</a>
    </div>
  );
};

export default ForgotPasswordPage;
