import { useState } from 'react'
import './style.css'
import horizontal from '../../assets/horinzontal.png'
import logo1 from '../../assets/logo1.png'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-Principal">
      <div className="header-container">
        <div className="header-content">
          <a href="https://www.juazeiro.ba.gov.br/" target="_blank" rel="noopener noreferrer">
          <img src={horizontal} alt="Logo do começo" className="header-logo"/>
          </a>
        </div>
      </div>
      <h1 className="title">Estamos em manutenção, site temporariamente indisponivel</h1>
      <h2 className="title-error">Entre em contato conosco pelos meios alternativos abaixo.</h2>
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
            <p>Telefone: (11) 99999-9999</p>
          </div>
          <div className="info-column">
            <h3>Redes Sociais</h3>
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
  )
}

export default Home
