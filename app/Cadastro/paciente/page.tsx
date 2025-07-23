'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/navbar/page';
import styles from '../paciente/paciente.module.css';

const CadastroPaciente: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cns, setCns] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    if (!nome.trim() || !email.trim() || !senha.trim() || !cns.trim()) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    const pacienteData = { nome, email, senha, cns };

    try {
      const response = await fetch('/api/pacientes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pacienteData),
      });

      if (response.ok) {
        alert('Paciente cadastrado com sucesso!');
        router.push('/');
      } else {
        alert('Erro ao cadastrar paciente.');
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao cadastrar paciente.');
    }
  };

  return (
    <>
      <Navbar />
      <main className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.title}>Cadastro de Paciente</h1>

          <div className={styles.formGroup}>
            <label htmlFor="nome">Nome *</label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={e => setNome(e.target.value)}
              placeholder="Digite o nome completo"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail *</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="exemplo@email.com"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="cpf">CPF *</label>
            <input
              id="cpf"
              type="cpf"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="exemplo@email.com"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="cns">CNS *</label>
            <input
              id="cns"
              type="text"
              value={cns}
              onChange={e => setCns(e.target.value)}
              placeholder="Número do Cartão Nacional de Saúde"
              className={styles.input}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="senha">Senha *</label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              placeholder="Crie uma senha segura"
              className={styles.input}
              required
            />
          </div>


          <button className={styles.button} onClick={handleSubmit}>
            Cadastrar Paciente
          </button>
        </div>
      </main>

    </>
  );
};

export default CadastroPaciente;
