'use client';

import React from 'react';
import styles from '../styles/DetalheAgendamento.module.css';

interface Appointment {
  date: string;
  time: string;
  service: string;
  professional: string;
  location: string;
  notes: string;
  patient: string;  // Adicionado o paciente
}

interface DetalheAgendamentoProps {
  appointment: Appointment | null;
  onClose: () => void;
}

const DetalheAgendamento: React.FC<DetalheAgendamentoProps> = ({ appointment, onClose }) => {
  if (!appointment) return null;

  return (
    <main className={styles.mainContainer}>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.detailCard} onClick={(e) => e.stopPropagation()}>
          <div className={styles.detailItem}>
            <strong>Paciente</strong>  {/* Exibindo o nome do paciente */}
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
          <button onClick={onClose} className={styles.btnSecondary}>Fechar</button>
        </div>
      </div>
    </main>
  );
};

export default DetalheAgendamento;
