'use client';

import React, { useState } from 'react';
import Navbar from '../../components/navbar/page';
import styles from '../../styles/FormulariosCadastro.module.css';

const CadastroLocal: React.FC = () => {
  const [nomeLocal, setNomeLocal] = useState('');
  const [sala, setSala] = useState('');

  const handleSubmit = () => {
    alert('Local de atendimento cadastrado!');
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h2>Cadastrar Local de Atendimento</h2>
        <input
          type="text"
          placeholder="Nome do local"
          value={nomeLocal}
          onChange={(e) => setNomeLocal(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Sala"
          value={sala}
          onChange={(e) => setSala(e.target.value)}
          className={styles.input}
        />
        <button className={styles.button} onClick={handleSubmit}>
          Salvar
        </button>
      </div>
    </>
  );
};

export default CadastroLocal;
