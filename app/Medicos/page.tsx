"use client";

import { useState } from "react";
import Navbar from "../components/navbar/page";
import styles from "./medico.module.css";

type Medico = {
  id: number;
  nome: string;
  crm: string;
  ativo: boolean;
};

const medicosMock: Medico[] = [
  { id: 1, nome: "Dr. João Silva", crm: "123456", ativo: true },
  { id: 2, nome: "Dra. Maria Souza", crm: "654321", ativo: true },
  { id: 3, nome: "Dr. Carlos Oliveira", crm: "987654", ativo: false },
];

export default function MedicosList() {
  const [medicos, setMedicos] = useState<Medico[]>(medicosMock);
  const [medicoEditando, setMedicoEditando] = useState<Medico | null>(null);

  function salvarMedicoEditado(medicoAtualizado: Medico) {
    setMedicos((prev) =>
      prev.map((m) => (m.id === medicoAtualizado.id ? medicoAtualizado : m))
    );
    setMedicoEditando(null);
  }

  function toggleAtivo(id: number) {
    setMedicos((prev) =>
      prev.map((m) => (m.id === id ? { ...m, ativo: !m.ativo } : m))
    );
  }

  return (
    <>
      <Navbar />
      <main className={styles.content}>
        <h1 className={styles.title}>Médicos Cadastrados</h1>

        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th>Nome</th>
              <th>CRM</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {medicos.map((medico) => (
              <tr
                key={medico.id}
                className={!medico.ativo ? styles.inativo : undefined}
              >
                <td>{medico.nome}</td>
                <td>{medico.crm}</td>
                <td>{medico.ativo ? "Ativo" : "Inativo"}</td>
                <td className={styles.actions}>
                  <button
                    className="edit"
                    onClick={() => setMedicoEditando(medico)}
                  >
                    Editar
                  </button>
                  <button
                    className="toggle"
                    onClick={() => toggleAtivo(medico.id)}
                  >
                    {medico.ativo ? "Inativar" : "Ativar"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {medicoEditando && (
          <ModalEditarMedico
            medico={medicoEditando}
            onSalvar={salvarMedicoEditado}
            onCancelar={() => setMedicoEditando(null)}
          />
        )}
      </main>
    </>
  );
}

function ModalEditarMedico({
  medico,
  onSalvar,
  onCancelar,
}: {
  medico: Medico;
  onSalvar: (medico: Medico) => void;
  onCancelar: () => void;
}) {
  const [nome, setNome] = useState(medico.nome);
  const [crm, setCrm] = useState(medico.crm);

  function salvar() {
    if (!nome.trim() || !crm.trim()) {
      alert("Preencha todos os campos.");
      return;
    }
    onSalvar({ ...medico, nome, crm });
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Editar Médico</h2>

        <label className={styles.modalLabel} htmlFor="nome">
          Nome:
        </label>
        <input
          id="nome"
          type="text"
          className={styles.modalInput}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label className={styles.modalLabel} htmlFor="crm">
          CRM:
        </label>
        <input
          id="crm"
          type="text"
          className={styles.modalInput}
          value={crm}
          onChange={(e) => setCrm(e.target.value)}
        />

        <div className={styles.modalButtons}>
          <button className="cancel" onClick={onCancelar}>
            Cancelar
          </button>
          <button className="save" onClick={salvar}>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
