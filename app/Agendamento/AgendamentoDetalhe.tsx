'use client';

import React, { useState } from 'react';
import styles from '../styles/DetalheAgendamento.module.css';

interface Appointment {
  date: string;
  time: string;
  service: string;
  professional: string;
  location: string;
  notes: string;
  patient: string;
}

interface DetalheAgendamentoProps {
  appointment: Appointment | null;
  onClose: () => void;
}

const DetalheAgendamento: React.FC<DetalheAgendamentoProps> = ({ appointment, onClose }) => {
  if (!appointment) return null;

  return (
    <main className={styles.mainContainer} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.detailCard} onClick={(e) => e.stopPropagation()}>
        <div className={styles.detailItem}>
          <strong>Paciente</strong>
          <p>{appointment.patient}</p>
        </div>
        <div className={styles.detailItem}>
          <strong>Data e Hora</strong>
          <p>{appointment.date} - {appointment.time}</p>
        </div>
        <div className={styles.detailItem}>
          <strong>Serviço</strong>
          <p>{appointment.service}</p>
        </div>
        <div className={styles.detailItem}>
          <strong>Profissional</strong>
          <p>{appointment.professional}</p>
        </div>
        <div className={styles.detailItem}>
          <strong>Local</strong>
          <p>{appointment.location}</p>
        </div>
        <div className={styles.detailItem}>
          <strong>Observações</strong>
          <p>{appointment.notes}</p>
        </div>
        <button className={styles.btnSecondary} onClick={onClose}>Fechar</button>
      </div>
    </main>
  );
};

export default DetalheAgendamento;

export const ExemploUso = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const exampleAppointment: Appointment = {
    patient: 'João Silva',
    date: '2025-06-10',
    time: '14:30',
    service: 'Consulta Geral',
    professional: 'Dra. Maria Souza',
    location: 'Clínica Central',
    notes: 'Paciente prefere atendimento pela manhã',
  };

  return (
    <div>
      <button onClick={() => setModalOpen(true)} className={styles.btnSecondary}>
        Abrir Detalhes do Agendamento
      </button>

      {modalOpen && (
        <DetalheAgendamento
          appointment={exampleAppointment}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};
