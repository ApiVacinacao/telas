'use client';

import React, { useState } from 'react';
import Navbar from '../../components/navbar/page';
import styles from '../agendamento/agendamento.module.css';
import { useRouter } from 'next/navigation';

const CadastroAgendamento: React.FC = () => {
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [local, setLocal] = useState('');
  const [profissional, setProfissional] = useState('');
  const [tipoAgendamento, setTipoAgendamento] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    // Validar se todos os campos estão preenchidos
    if (!data || !hora || !local || !profissional || !tipoAgendamento) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // Preparar os dados para envio
    const agendamentoData = {
      data,
      hora,
      local,
      profissional,
      tipoAgendamento,
    };

    try {
      // Enviar os dados para a API (substitua a URL pela sua rota de backend)
      const response = await fetch('/api/agendamentos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(agendamentoData),
      });

      if (response.ok) {
        alert('Agendamento cadastrado com sucesso!');
        router.push('/'); // Navegar para a página inicial ou onde necessário
      } else {
        alert('Erro ao cadastrar agendamento!');
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      alert('Erro ao cadastrar agendamento!');
    }
  };

  return (
    <>
      <Navbar />
      <main className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.title}>Cadastrar Agendamento</h1>

          {/* Seletor de tipo de agendamento */}
          <div className={styles.formGroup}>
            <label htmlFor="tipoAgendamento">Tipo de Agendamento</label>
            <select
              id="tipoAgendamento"
              value={tipoAgendamento}
              onChange={(e) => setTipoAgendamento(e.target.value)}
              className={styles.input}
            >
              <option value="">Selecione o tipo de agendamento</option>
              <option value="Atendimento Especializado">Atendimento Especializado</option>
              <option value="Consulta">Consulta</option>
              <option value="Vacina">Vacina</option>
              <option value="Exame">Exame</option>
              <option value="Emergência">Emergência</option>
            </select>
          </div>

          {/* Campo de data */}
          <div className={styles.formGroup}>
            <label htmlFor="data">Data</label>
            <input
              type="date"
              id="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className={styles.input}
            />
          </div>

          {/* Campo de hora */}
          <div className={styles.formGroup}>
            <label htmlFor="hora">Hora</label>
            <input
              type="time"
              id="hora"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              className={styles.input}
            />
          </div>

          {/* Campo de local de atendimento */}
          <div className={styles.formGroup}>
            <label htmlFor="local">Local de Atendimento</label>
            <input
              type="text"
              id="local"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
              placeholder="Digite o local de atendimento"
              className={styles.input}
            />
          </div>

          {/* Campo de nome do profissional */}
          <div className={styles.formGroup}>
            <label htmlFor="profissional">Profissional</label>
            <input
              type="text"
              id="profissional"
              value={profissional}
              onChange={(e) => setProfissional(e.target.value)}
              placeholder="Nome do profissional"
              className={styles.input}
            />
          </div>

          {/* Botão para submeter o formulário */}
          <button className={styles.button} onClick={handleSubmit}>
            Cadastrar Agendamento
          </button>
        </div>
      </main>
    </>
  );
};

export default CadastroAgendamento;
