import { useState } from 'react'
import logoNikkei from './assets/logotipo-1.png'
import ex1 from './assets/ex1.webp'
import ex2 from './assets/ex2.webp'
import ex3 from './assets/ex3.webp'
import './App.css'

export default function App() {
  return (
    <main className="container-principal">
      <header className="header-nissei">
        <div id="logo">
          <img src={logoNikkei} alt="Logo Nikkei" />
        </div>
        <nav id="menu">
          <button>home</button>
          <button>produtos</button>
          <button>quem somos</button>
          <button>contatos</button>
        </nav>
      </header>
      <section id="presentation" className="hero-full-bg">
        <div className="hero-overlay">
          <div className="hero-text-container">
            <h1>
              <span className="destaque-red">Reformar,</span>
              <br /> construir e curtir.
            </h1>
          </div>
        </div>
      </section>
      <section className="service-section">
        <div className="service-header">
          <p className="subtitle-red">Tudo num só lugar!</p>
          <h2>O atendimento personalizado é o seu melhor aliado na hora da compra!</h2>
        </div>
        <div id="service-options">
          <div className="service-coluna">
            <div className="icon-circle">
              <img src="" alt="" />
            </div>
            <p>Atualização</p>
          </div>
          <div className="service-coluna">
             <div className="icon-circle">
              <img src="" alt="" />
             </div>
             <p>Pintura & Proteção</p>
          </div>
          <div className="service-coluna">
             <div className="icon-circle">
              <img src="" alt="" />
             </div>
             <p>Ferramentas</p>
          </div>
          <div className="service-coluna">
             <div className="icon-circle">
              <img src="" alt="" />
             </div>
             <p>Ferragens</p>
          </div>
        </div>
      </section>
      <div id="slider" className="galeria-fotos">
        <img src={ex1} alt="Exemplo 1" />
        <img src={ex2} alt="Exemplo 2" />
        <img src={ex3} alt="Exemplo 3" />
      </div>
      <footer className="footer-nissei">
        <div id="footer-content">
           <img src={logoNikkei} alt="Logo" className="footer-logo" />
           <div className="footer-info">
              <p>(19) 3261-1271</p>
              <p>Campinas - SP</p>
           </div>
        </div>
        <p className="copyright">© 2026 Nikkei. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}