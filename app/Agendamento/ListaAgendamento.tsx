'use client';

import React, { useState } from 'react';
import styles from '../styles/ListaAgendamento.module.css';
import DetalheAgendamento from '../Agendamento/AgendamentoDetalhe';
import NovoAgendamento from '../Agendamento/NovoAgendamento';

interface Appointment {
  date: string;
  time: string;
  service: string;
  professional: string;
  location: string;
  notes: string;
  patient: string;
  ativo: boolean;
}

const AgendamentosList: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      date: '25/10/2023',
      time: '14:30',
      service: 'Consulta Clínica Geral',
      professional: 'Dr. Ana Silva',
      location: 'UBS Jardim das Flores - Sala 12',
      notes: 'Trazer exames recentes e carteirinha do SUS.',
      patient: 'Paciente 1',
      ativo: true,
    },
    {
      date: '28/10/2023',
      time: '10:00',
      service: 'Exames de Sangue',
      professional: 'Enf. Roberto Souza',
      location: 'UBS Central - Sala 5',
      notes: 'Jejum de 8 horas.',
      patient: 'Paciente 2',
      ativo: true,
    },
    {
      date: '29/10/2023',
      time: '16:00',
      service: 'Consulta Oftalmológica',
      professional: 'Dr. João Lima',
      location: 'Clínica Olhar Certo - Sala 3',
      notes: 'Levar óculos se possuir.',
      patient: 'Paciente 3',
      ativo: true,
    },
  ]);

  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewAppointmentModalOpen, setIsNewAppointmentModalOpen] = useState(false);

  const handleShowDetails = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAppointment(null);
  };

  const handleAddAppointment = (appointment: Appointment) => {
    setAppointments((prevAppointments) => [...prevAppointments, appointment]);
  };

  const toggleAtivo = (index: number) => {
    setAppointments(prev =>
      prev.map((appointment, i) =>
        i === index ? { ...appointment, ativo: !appointment.ativo } : appointment
      )
    );
  };

  return (
    <main className={styles.mainContent}>
      <div className={styles.header}>
        <h2>Lista de Agendamentos</h2>
      </div>

      <div className={styles.searchBar}>
        <input type="text" placeholder="Buscar agendamentos..." />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Paciente</th>
            <th className={styles.th}>Data</th>
            <th className={styles.th}>Hora</th>
            <th className={styles.th}>Serviço</th>
            <th className={styles.th}>Profissional</th>
            <th className={styles.th}>Status</th>
            <th className={styles.th}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index} className={styles.tr}>
              <td className={styles.td}>{appointment.patient}</td>
              <td className={styles.td}>{appointment.date}</td>
              <td className={styles.td}>{appointment.time}</td>
              <td className={styles.td}>{appointment.service}</td>
              <td className={styles.td}>{appointment.professional}</td>
              <td className={styles.td}>
                <span
                  className={
                    appointment.ativo ? styles.ativo : styles.inativo
                  }
                >
                  {appointment.ativo ? 'Ativo' : 'Inativo'}
                </span>
              </td>
              <td className={styles.td}>
                <button
                  onClick={() => handleShowDetails(appointment)}
                  className={styles.btnDetails}
                >
                  Ver Detalhes
                </button>
                <button
                  className={styles.btnToggle}
                  onClick={() => toggleAtivo(index)}
                >
                  {appointment.ativo ? 'Inativar' : 'Ativar'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        className={styles.floatingBtn}
        onClick={() => setIsNewAppointmentModalOpen(true)}
      >
        <i className="fas fa-plus"></i> Novo Agendamento
      </button>

      {isNewAppointmentModalOpen && (
        <NovoAgendamento
          onAddAppointment={handleAddAppointment}
          onClose={() => setIsNewAppointmentModalOpen(false)}
        />
      )}

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <DetalheAgendamento appointment={selectedAppointment} onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </main>
  );
};

export default AgendamentosList;
