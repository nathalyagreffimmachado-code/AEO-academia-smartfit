import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { listarPlanos } from '../api/planos'
import './plano.css'

export default function Planos() {
  const navigate = useNavigate()
  const [planos, setPlanos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  // busca os planos assim que a página abre
  useEffect(() => {
    async function carregar() {
      try {
        const response = await listarPlanos()
        setPlanos(response)
      } catch (err) {
        setErro('Não foi possível carregar os planos.')
      } finally {
        setCarregando(false)
      }
    }

    carregar()
  }, [])

  // leva para a matrícula já com o plano escolhido
  function escolherPlano(plano) {
    localStorage.setItem('planoEscolhido', plano.id)
    navigate('/matricula')
  }

  return (
    <main className="planos-page">

      <section className="planos-hero">
        <div className="container">
          <h1>Escolha o plano <span>ideal para você</span></h1>
          <p>Sem taxa de adesão. Treine do seu jeito.</p>
        </div>
      </section>

      <section className="planos-lista">
        <div className="container">

          {carregando && <p className="planos-carregando">Carregando planos...</p>}

          {erro && <p className="planos-vazio">{erro}</p>}

          {!carregando && !erro && planos.length === 0 && (
            <p className="planos-vazio">Nenhum plano disponível no momento.</p>
          )}

          <div className="planos">
            {planos.map((plano) => (
              <div
                key={plano.id}
                className={`card-plano ${plano.destaque ? 'destaque' : ''}`}
              >
                {plano.destaque && <span className="selo">Mais vantajoso</span>}

                <span className="nivel">{plano.nivel}</span>
                <h3>{plano.nome}</h3>
                <span className="duracao">{plano.meses} {plano.meses === 1 ? 'mês' : 'meses'}</span>

                <div className="preco">
                  <span className="moeda">R$</span>
                  {plano.preco}
                  <small>/ total</small>
                </div>

                <ul>
                  {plano.modalidades?.map((item, i) => (
                    <li key={i}>{item.replaceAll('_', ' ')}</li>
                  ))}
                </ul>

                <button
                  className="btn-plano"
                  type="button"
                  onClick={() => escolherPlano(plano)}
                >
                  Quero este plano
                </button>
              </div>
            ))}
          </div>

          <button
            className="button back-button"
            type="button"
            onClick={() => navigate('/')}
          >
            Voltar
          </button>

        </div>
      </section>

    </main>
  )
}