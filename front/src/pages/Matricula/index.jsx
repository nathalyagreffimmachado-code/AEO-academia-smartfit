import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginMatricula } from '../api/matricula'
import './style.css'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setErro('')

    try {
      const response = await loginMatricula(email, senha)
      localStorage.setItem('token', response.token)
      navigate('/users')
    } catch (err) {
      setErro('Email ou senha inválidos.')
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        {erro && <p className="erro">{erro}</p>}

        <p>
          Não possui conta?{' '}
          <span className="signup" onClick={() => navigate('/cadastro')}>
            Cadastre-se
          </span>
        </p>

        <button className="button" type="submit">Entrar</button>
        <button className="button back-button" type="button" onClick={() => navigate('/')}>
          Voltar
        </button>
      </form>
    </div>
  )
}