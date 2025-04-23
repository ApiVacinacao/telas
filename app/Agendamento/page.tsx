import React from 'react';
import AgendamentosList from '../Agendamento/ListaAgendamento';
import Sidebar from '../components/navbar/page';

const AgendamentosPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <AgendamentosList />
      </div>
    </div>
  );
};

export default AgendamentosPage;
