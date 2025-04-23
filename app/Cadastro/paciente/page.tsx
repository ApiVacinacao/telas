'use client';

import React, { useState } from 'react';
import Navbar from '../../components/navbar/page';
import styles from '../../styles/FormulariosCadastro.module.css';

const CadastroPaciente: React.FC = () => {
  const [nome, setNome] = useState('');
  const [cns, setCns] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = () => {
    // Aqui você pode adicionar a lógica para salvar ou enviar os dados
    alert('Paciente cadastrado!');
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h2>Cadastrar Paciente</h2>
        
        {/* Campo Nome */}
        <input
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className={styles.input}
        />
        
        {/* Campo CNS */}
        <input
          type="text"
          placeholder="CNS"
          value={cns}
          onChange={(e) => setCns(e.target.value)}
          className={styles.input}
        />

        {/* Campo Endereço */}
        <input
          type="text"
          placeholder="Endereço"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          className={styles.input}
        />
        
        {/* Campo Telefone */}
        <input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          className={styles.input}
        />
        
        <button className={styles.button} onClick={handleSubmit}>
          Salvar
        </button>
      </div>
    </>
  );
};

export default CadastroPaciente;
