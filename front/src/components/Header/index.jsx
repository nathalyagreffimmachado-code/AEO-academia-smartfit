import { useState } from 'react'
import './style.css'

export default function Header() {
  const [aberto, setAberto] = useState(false)

  return (
    <header className="header">
      <div className="container header-container">

        <a href="/" className="logo">Sua Academia</a>

        <button
          className="menu-toggle"
          onClick={() => setAberto(!aberto)}
          aria-label="Abrir menu"
        >
          {aberto ? '✕' : '☰'}
        </button>

        <nav className={`header-nav ${aberto ? 'aberto' : ''}`}>
          <a href="/planos">Planos</a>
          <a href="/treinos">Treinos</a>
          <a href="/professores">Professores</a>
          <a href="/login" className="link-login">Já sou aluno</a>
          <a href="/matricula" className="btn-matricula">Quero ser aluno</a>
        </nav>

      </div>
    </header>
  )
}