import './style.css'
import horizontal from '../../assets/horinzontal.png'
import logo1 from '../../assets/logo1.png'

function Home() {

  return (
    <div className="container-Principal">
      <div className="header-container">
        <div className="header-content">
          <a href="https://www.juazeiro.ba.gov.br/" target="_blank" rel="noopener noreferrer">
          <img src={horizontal} alt="Logo do começo" className="header-logo"/></a>

          <nav className="header-nav">
            <a href="https://www.juazeiro.ba.gov.br/" target="_blank" rel="noopener noreferrer">Receitas e despesas</a>
            <a href="https://www.juazeiro.ba.gov.br/" target="_blank" rel="noopener noreferrer">Contratos, licitações e convênios em vigor</a>
            <a href="https://www.juazeiro.ba.gov.br/" target="_blank" rel="noopener noreferrer">Transparência orçamentária</a>
            <a href="https://www.juazeiro.ba.gov.br/" target="_blank" rel="noopener noreferrer">Relação de servidores públicos e quadros institucionais</a>
          </nav>
        </div>
      </div>
      <h1 className="title">Estamos em manutenção, site temporariamente indisponivel</h1>
      <h2 className="subtitle">Parte dos nossos serviços ainda estão disponiveis de forma reduzida.</h2>
      <p className="description">  Entre em contato conosco pelos meios alternativos abaixo.<br/>
      Estimamos o retorno do site em: <strong>20/10/2025</strong></p>

      <div className="contacts-container">
        <div className="info-group">
          <div className="image-column">
            <a href="https://www.juazeiro.ba.gov.br/" target="_blank" rel="noopener noreferrer">
            <img src={logo1} alt="Logo do fim" />
            </a>
          </div>

          <div className="info-column">
            <h3>Endereço</h3>
            <p>Praça Barão do Rio Branco, nº 01 - Centro, Juazeiro - Bahia</p>
            <p>Horário de funcionamento Segunda a sexta-feira, das 08h às 14h</p>
          </div>

          <div className="info-column">
            <h3>Contato</h3>
            <p>Email: gabinete@juazeiro.ba.gov.br</p>
            <p>Telefone: (74) 3612-3600</p>
          </div>
          <div className="info-column">
            <h3>Redes Sociais</h3>
            <div className="social-icons">
            <a href="https://www.instagram.com/prefeituradejuazeiro/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/instagram.png" alt="Instagram" /></a>
            <a href="https://www.youtube.com/@prefeitura_de_juazeiro" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/youtube.png" alt="Youtube" /></a>
            <a href="https://www.facebook.com/juazeirooficial/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/facebook.png" alt="Facebook" /></a> 
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Home
