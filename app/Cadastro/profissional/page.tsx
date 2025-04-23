'use client';

import React, { useState } from 'react';
import Navbar from '../../components/navbar/page';
import styles from '../../styles/FormulariosCadastro.module.css';

const CadastroProfissional: React.FC = () => {
  const [nome, setNome] = useState('');
  const [especialidade, setEspecialidade] = useState('');

  const handleSubmit = () => {
    alert('Profissional cadastrado!');
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h2>Cadastrar Profissional</h2>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Especialidade"
          value={especialidade}
          onChange={(e) => setEspecialidade(e.target.value)}
          className={styles.input}
        />
        <button className={styles.button} onClick={handleSubmit}>
          Salvar
        </button>
      </div>
    </>
  );
};

export default CadastroProfissional;
