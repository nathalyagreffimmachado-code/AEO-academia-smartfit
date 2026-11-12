import './style.css'
export default function Footer (){
  return (
    <footer>
      <div className="container">
        <div className="footer-topo">

          <div className="footer-marca">
            <span className="logo">Sua Academia</span>
            <p>Treine com estrutura completa e acompanhe sua evolução.</p>
            <div className="redes">
              <a href="#">IG</a>
              <a href="#">FB</a>
              <a href="#">YT</a>
            </div>
          </div>

          <div>
            <h4>Academia</h4>
            <ul>
              <li><a href="/planos">Planos</a></li>
              <li><a href="/treinos">Treinos</a></li>
              <li><a href="/professores">Professores</a></li>
            </ul>
          </div>

          <div>
            <h4>Aluno</h4>
            <ul>
              <li><a href="/login">Entrar</a></li>
              <li><a href="/matricula">Matrícula</a></li>
            </ul>
          </div>

          <div>
            <h4>Ajuda</h4>
            <ul>
              <li><a href="#">Fale conosco</a></li>
              <li><a href="#">Privacidade</a></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="footer-base">
        <div className="container">
          © 2026 <strong>Sua Academia</strong>. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}