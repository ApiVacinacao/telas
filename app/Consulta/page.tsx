'use client';

import React, { useState } from 'react';
import styles from './tipoConsulta.module.css';
import Navbar from '../components/navbar/page';

interface TipoConsulta {
  id: number;
  nome: string;
  ativo: boolean;
}

let nextId = 4;

const TipoConsultaPage: React.FC = () => {
  const [tipos, setTipos] = useState<TipoConsulta[]>([
    { id: 1, nome: 'Clínico Geral', ativo: true },
    { id: 2, nome: 'Pediatria', ativo: true },
    { id: 3, nome: 'Dermatologia', ativo: false },
  ]);

  const [modalAberto, setModalAberto] = useState(false);
  const [tipoEditando, setTipoEditando] = useState<TipoConsulta | null>(null);
  const [nomeNovo, setNomeNovo] = useState('');

  const abrirModal = (tipo?: TipoConsulta) => {
    if (tipo) {
      setTipoEditando(tipo);
      setNomeNovo(tipo.nome);
    } else {
      setTipoEditando(null);
      setNomeNovo('');
    }
    setModalAberto(true);
  };

  const salvar = () => {
    if (nomeNovo.trim() === '') return;

    if (tipoEditando) {
      setTipos(prev => prev.map(t => t.id === tipoEditando.id ? { ...t, nome: nomeNovo } : t));
    } else {
      const novoTipo: TipoConsulta = {
        id: nextId++,
        nome: nomeNovo,
        ativo: true,
      };
      setTipos(prev => [...prev, novoTipo]);
    }

    setModalAberto(false);
    setTipoEditando(null);
    setNomeNovo('');
  };

  const toggleStatus = (id: number) => {
    setTipos(prev => prev.map(t => t.id === id ? { ...t, ativo: !t.ativo } : t));
  };

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <h1>Tipos de Consulta</h1>
        <button className={styles.addBtn} onClick={() => abrirModal()}>
          + Novo Tipo
        </button>

        <div className={styles.lista}>
          {tipos.map(tipo => (
            <div key={tipo.id} className={styles.card}>
              <div>
                <strong>{tipo.nome}</strong>
                <p>Status: <span className={tipo.ativo ? styles.ativo : styles.inativo}>{tipo.ativo ? 'Ativo' : 'Inativo'}</span></p>
              </div>
              <div className={styles.botoes}>
                <button className={styles.editBtn} onClick={() => abrirModal(tipo)}>Editar</button>
                <button className={styles.toggleBtn} onClick={() => toggleStatus(tipo.id)}>
                  {tipo.ativo ? 'Inativar' : 'Ativar'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalAberto && (
        <div className={styles.modalOverlay} onClick={() => setModalAberto(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <h2>{tipoEditando ? 'Editar Tipo' : 'Novo Tipo'}</h2>

            <label>Nome do Tipo de Consulta</label>
            <input
              type="text"
              value={nomeNovo}
              onChange={(e) => setNomeNovo(e.target.value)}
              autoFocus
            />

            <div className={styles.actions}>
              <button className={styles.cancelButton} onClick={() => setModalAberto(false)}>Cancelar</button>
              <button className={styles.saveButton} onClick={salvar}>Salvar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TipoConsultaPage;
