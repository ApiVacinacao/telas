'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "../app/styles/Home.module.css"

export default function Home() {
  const screens = [
    {
      title: "Relatórios",
      description: "Visualize e gere relatórios completos",
      path: "/relatorios",
      icon: "📊"
    },
    {
      title: "Agendamentos",
      description: "Gerencie todos os agendamentos",
      path: "/agendamentos",
      icon: "📅"
    },
    {
      title: "Configurações",
      description: "Configure as preferências do sistema",
      path: "/configuracoes",
      icon: "⚙️"
    },
    {
      title: "TCCs",
      description: "Gerencie trabalhos de conclusão de curso",
      path: "/tcc",
      icon: "📚"
    },
    {
      title: "Perfil",
      description: "Acesse seu perfil de usuário",
      path: "/perfil",
      icon: "👤"
    },
    {
      title: "Login",
      description: "Acesse o sistema",
      path: "/login",
      icon: "🔐"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="max-w-6xl mx-auto mb-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Logo do Sistema"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <h1 className="text-3xl font-bold text-gray-800">Telas TCC</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-600 hover:text-gray-900 font-medium">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-600 hover:text-gray-900 font-medium">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bem-vindo ao Sistema Telas TCC</h2>
          <p className="text-gray-600 max-w-3xl">
            Plataforma completa para gerenciamento de trabalhos acadêmicos e agendamentos.
            Selecione abaixo a tela que deseja acessar:
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screens.map((screen, index) => (
            <Link
              key={index}
              href={screen.path}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
            >
              <div className="text-4xl mb-4">{screen.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{screen.title}</h3>
              <p className="text-gray-600 flex-grow">{screen.description}</p>
              <div className="mt-4 text-blue-600 font-medium flex items-center gap-1">
                Acessar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <footer className="max-w-6xl mx-auto mt-16 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Telas TCC. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="/termos" className="text-gray-500 hover:text-gray-700 text-sm">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="text-gray-500 hover:text-gray-700 text-sm">
              Política de Privacidade
            </Link>
            <Link href="/suporte" className="text-gray-500 hover:text-gray-700 text-sm">
              Suporte
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}