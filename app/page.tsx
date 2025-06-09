'use client';

import Image from "next/image";
import Link from "next/link";
import './globals.css';

export default function Home() {
  const options = [
    {
      title: "Agendamentos",
      description: "Gerencie todos os agendamentos do sistema.",
      path: "/Cadastro/agendamento",
      icon: "📅"
    },
    {
      title: "Relatórios",
      description: "Visualize e gere relatórios completos.",
      path: "/relatorios",
      icon: "📊"
    },
    {
      title: "Locais",
      description: "Gerencie os locais cadastrados no sistema.",
      path: "/Locais",
      icon: "📍"
    },
    {
      title: "Tipos de Consulta",
      description: "Configure os tipos de consulta disponíveis.",
      path: "/Cadastro/tipo-consulta",
      icon: "🩺"
    }
  ];

  return (
    <div className="bgContainer">
      <main className="homePage">
        <header className="header">
          <Image src="/aa.png" alt="Logo IAITEA" width={80} height={80} />
          <h1 className="title">Sistema IAITEA</h1>
          <p className="subtitle">Organização, controle e praticidade</p>
        </header>

        <section className="optionsContainer">
          {options.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="optionCard floating"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="access">Acessar →</span>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
