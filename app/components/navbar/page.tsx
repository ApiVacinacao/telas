'use client';

import Link from 'next/link';
import styles from '../../styles/NavBar.module.css';

const Navbar = () => {
  return (
    <aside className={styles.sidebar}>
      <img src="../aa.png" alt="Logo" className={styles.logo} />
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/Cadastro" className={styles.navLink}>
              <span>📝</span> Cadastro
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/Agendamento" className={styles.navLink}>
              <span>📅</span> Agendamentos
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/relatorios" className={styles.navLink}>
              <span>📊</span> Relatórios
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/configuracoes" className={styles.navLink}>
              <span>⚙️</span> Configurações
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
