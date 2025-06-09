'use client';

import React, { useState } from 'react';
import Navbar from '../components/navbar/page';
import styles from './paciente.module.css';
import modalStyles from './EditModal.module.css';

interface Paciente {
  id: number;
  nome: string;
  email: string;
  cns: string;
  ativo: boolean;
}

const Pacientes: React.FC = () => {
  const [pacientes, setPacientes] = useState<Paciente[]>([
    { id: 1, nome: 'João Silva', email: 'joao@example.com', cns: '12345678900', ativo: true },
    { id: 2, nome: 'Maria Souza', email: 'maria@example.com', cns: '98765432100', ativo: true },
    { id: 3, nome: 'Carlos Oliveira', email: 'carlos@example.com', cns: '45678912300', ativo: true },
  ]);

  const [pacienteEditando, setPacienteEditando] = useState<Paciente | null>(null);

  const editarPaciente = (id: number) => {
    const paciente = pacientes.find(p => p.id === id);
    if (paciente) {
      setPacienteEditando(paciente);
    }
  };

  const salvarEdicao = (atualizado: Paciente) => {
    setPacientes(prev => prev.map(p => (p.id === atualizado.id ? atualizado : p)));
    setPacienteEditando(null);
  };

  const inativarPaciente = (id: number) => {
    setPacientes(prev =>
      prev.map(p =>
        p.id === id ? { ...p, ativo: !p.ativo } : p
      )
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (pacienteEditando) {
      setPacienteEditando({ ...pacienteEditando, [e.target.name]: e.target.value });
    }
  };

  return (
    <>
      <Navbar />
      <main className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.title}>Lista de Pacientes</h1>
          <div className={styles.lista}>
            {pacientes.map(paciente => (
              <div key={paciente.id} className={styles.card}>
                <div className={styles.info}>
                  <strong>{paciente.nome}</strong>
                  <p>Email: {paciente.email}</p>
                  <p>CNS: {paciente.cns}</p>
                  <p>Status: <span className={paciente.ativo ? styles.ativo : styles.inativo}>{paciente.ativo ? 'Ativo' : 'Inativo'}</span></p>
                </div>
                <div className={styles.botoes}>
                  <button className={styles.editButton} onClick={() => editarPaciente(paciente.id)}>Editar</button>
                  <button className={styles.deleteButton} onClick={() => inativarPaciente(paciente.id)}>
                    {paciente.ativo ? 'Inativar' : 'Ativar'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {pacienteEditando && (
        <div className={modalStyles.modalOverlay}>
          <div className={modalStyles.modalContent}>
            <h2>Editar Paciente</h2>

            <label>Nome</label>
            <input type="text" name="nome" value={pacienteEditando.nome} onChange={handleInputChange} />

            <label>Email</label>
            <input type="email" name="email" value={pacienteEditando.email} onChange={handleInputChange} />

            <label>CNS</label>
            <input type="text" name="cns" value={pacienteEditando.cns} onChange={handleInputChange} />

            <div className={modalStyles.actions}>
              <button onClick={() => setPacienteEditando(null)}>Cancelar</button>
              <button onClick={() => salvarEdicao(pacienteEditando)} className={modalStyles.saveButton}>Salvar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Pacientes;
