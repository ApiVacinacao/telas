'use client';

import React, { useState } from 'react';
import Navbar from '../components/navbar/page';
import styles from '../styles/Configuracoes.module.css';

const Configuracoes: React.FC = () => {
  const [clinicName, setClinicName] = useState('Clínica Exemplo');
  const [defaultLocation, setDefaultLocation] = useState('UBS Central - Sala 5');

  const handleSave = () => {
    alert('Configurações salvas!');
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h2>Configurações Básicas</h2>

        <div className={styles.section}>
          <label className={styles.label}>Nome da Clínica:</label>
          <input
            className={styles.input}
            type="text"
            value={clinicName}
            onChange={(e) => setClinicName(e.target.value)}
          />
        </div>

        <div className={styles.section}>
          <label className={styles.label}>Local Padrão:</label>
          <select
            className={styles.selectInput}
            value={defaultLocation}
            onChange={(e) => setDefaultLocation(e.target.value)}
          >
            <option value="UBS Central - Sala 5">UBS Central - Sala 5</option>
            <option value="UBS Jardim das Flores - Sala 12">UBS Jardim das Flores - Sala 12</option>
            <option value="Clínica Olhar Certo - Sala 3">Clínica Olhar Certo - Sala 3</option>
          </select>
        </div>

        <button className={styles.buttonSave} onClick={handleSave}>
          Salvar Configurações
        </button>
      </div>
    </>
  );
};

export default Configuracoes;
