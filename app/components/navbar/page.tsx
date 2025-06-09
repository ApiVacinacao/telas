"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // hook para pegar rota atual
import styles from "../navbar/navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();

  // Estado para abrir o menu Cadastro automaticamente se a rota atual for um subitem dele
  const [cadastroOpen, setCadastroOpen] = useState(false);

  useEffect(() => {
    // Verifica se o pathname começa com "/Cadastro" para abrir o menu e marcar
    if (pathname.startsWith("/Cadastro")) {
      setCadastroOpen(true);
    } else {
      setCadastroOpen(false);
    }
  }, [pathname]);

  const toggleCadastro = () => {
    setCadastroOpen(!cadastroOpen);
  };

  // Função para saber se o link está ativo, simples comparação exata ou por prefixo
  const isActive = (link: string) => {
    return pathname === link || pathname.startsWith(link + "/");
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img src="../aa.png" alt="Logo" className={styles.logo} />
      </div>
      <nav className={styles.navContainer}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <button
              className={`${styles.navLink} ${cadastroOpen ? styles.active : ""}`}
              onClick={toggleCadastro}
              aria-expanded={cadastroOpen}
            >
              <span className={styles.icon}>📝</span>
              <span className={styles.navText}>Cadastro</span>
              <span className={styles.chevron}>{cadastroOpen ? "▲" : "▼"}</span>
            </button>
            {cadastroOpen && (
              <ul className={styles.subList}>
                <li>
                  <Link
                    href="/Cadastro/paciente"
                    className={`${styles.subLink} ${
                      isActive("/Cadastro/paciente") ? styles.activeSubLink : ""
                    }`}
                  >
                    Paciente
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Cadastro/profissional"
                    className={`${styles.subLink} ${
                      isActive("/Cadastro/profissional") ? styles.activeSubLink : ""
                    }`}
                  >
                    Médico
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Cadastro/local"
                    className={`${styles.subLink} ${
                      isActive("/Cadastro/local") ? styles.activeSubLink : ""
                    }`}
                  >
                    Local de Atendimento
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Cadastro/agendamento"
                    className={`${styles.subLink} ${
                      isActive("/Cadastro/agendamento") ? styles.activeSubLink : ""
                    }`}
                  >
                    Agendamento
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className={styles.navItem}>
            <Link
              href="/Pacientes"
              className={`${styles.navLink} ${isActive("/Pacientes") ? styles.active : ""}`}
            >
              <span className={styles.icon}>🩺</span>
              <span className={styles.navText}>Pacientes</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/Medicos"
              className={`${styles.navLink} ${isActive("/Medicos") ? styles.active : ""}`}
            >
              <span className={styles.icon}>👩‍⚕️</span>
              <span className={styles.navText}>Médicos</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/Agendamento"
              className={`${styles.navLink} ${isActive("/Agendamento") ? styles.active : ""}`}
            >
              <span className={styles.icon}>📅</span>
              <span className={styles.navText}>Agendamentos</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/relatorios"
              className={`${styles.navLink} ${isActive("/relatorios") ? styles.active : ""}`}
            >
              <span className={styles.icon}>📊</span>
              <span className={styles.navText}>Relatórios</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/configuracoes"
              className={`${styles.navLink} ${isActive("/configuracoes") ? styles.active : ""}`}
            >
              <span className={styles.icon}>⚙️</span>
              <span className={styles.navText}>Configurações</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
