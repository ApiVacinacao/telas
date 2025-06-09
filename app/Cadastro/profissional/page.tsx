'use client';

import React, { useState } from 'react';
import Navbar from '../../components/navbar/page';
import styles from './medico.module.css';

const CadastroMedico: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    crm: '',
    especialidade: '',
  });

  const [mensagem, setMensagem] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.senha || !formData.crm) {
      setMensagem('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Aqui você pode fazer o POST para o backend
    console.log('Dados do médico:', formData);
    setMensagem('Médico cadastrado com sucesso!');
    setFormData({ nome: '', email: '', senha: '', crm: '', especialidade: '' });
  };

  return (
    <>
      <Navbar />
      <main className={styles.content}>
        <div className={styles.formContainer}>
          <h1>Cadastro de Médico / Profissional</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>Nome*</label>
            <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />

            <label>Email*</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Senha*</label>
            <input type="password" name="senha" value={formData.senha} onChange={handleChange} required />

            <label>CRM*</label>
            <input type="text" name="crm" value={formData.crm} onChange={handleChange} required />

            <label>Especialidade</label>
            <input type="text" name="especialidade" value={formData.especialidade} onChange={handleChange} />

            <button type="submit">Cadastrar</button>
            {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
          </form>
        </div>
      </main>
    </>
  );
};

export default CadastroMedico;
