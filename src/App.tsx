import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Flame, ShoppingBag, Info, Zap } from 'lucide-react';
import './styles.css';

const experienceSteps = [
  {
    title: "Elige tu Ramen",
    description: "Más de 30 variedades exclusivas de toda Asia. Desde el clásico Tonkotsu hasta los retos más picantes.",
    icon: <ShoppingBag size={32} />
  },
  {
    title: "Cocina al Momento",
    description: "Usa nuestras estaciones de agua caliente y utensilios profesionales. Listo en apenas 3 minutos.",
    icon: <Flame size={32} />
  },
  {
    title: "Añade el Toque",
    description: "Personaliza con toppings y acompaña con snacks asiáticos únicos que no verás en otro lugar.",
    icon: <Zap size={32} />
  }
];

function App() {
  return (
    <div className="app">
      <nav>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div className="logo">LAMEN MAGIC <span style={{fontSize: '0.7rem', verticalAlign: 'middle', opacity: 0.8}}>EXPERIENCE</span></div>
          <div className="nav-links">
            <a href="#experiencia">Cómo Funciona</a>
            <a href="#variedad">30+ Sabores</a>
            <a href="#snacks">Snacks & Más</a>
            <a href="#ubicacion">Ubicación</a>
          </div>
          <a href="#ubicacion" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Visítanos</a>
        </div>
      </nav>

      <header className="hero" style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://lh3.googleusercontent.com/gps-cs-s/APNQkAERTF8AR1mpPNfaHo0X-aYa-jeRS6hw9kKgyPfc9VNPb8JBfBzk5BTm-EdKFS4acvX6bUC3dHQOM_Dpq-AZGtkViSgwfojIN3kmU_LLYlXxWpCGmM-K_6lgUbFLM3qB_PtAoYqnAWlDNg8=s1360-w1360-h1020-rw')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container hero-content">
          <h1 className="title-gradient">Crea tu Propia Magia Asiática</h1>
          <p>El primer Self-Service de Ramen y Snacks exóticos en Getafe. Elige entre más de 30 tipos de ramen, cocínalos aquí mismo y descubre un mundo de sabores novedosos.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#experiencia" className="btn btn-primary">Vivir la Experiencia</a>
            <a href="#ubicacion" className="btn" style={{ border: '1px solid var(--primary-color)' }}>Saber Más</a>
          </div>
        </div>
      </header>

      <section id="experiencia" className="container">
        <h2 className="section-title">Tu Ramen, Tu Ritual</h2>
        <div className="menu-grid">
          {experienceSteps.map((step, index) => (
            <div key={index} className="menu-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                {step.icon}
              </div>
              <h3 style={{ marginBottom: '1rem' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="variedad" style={{ background: 'var(--surface-color)' }}>
        <div className="container">
          <div className="location-content">
            <div style={{ position: 'relative' }}>
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipN9S1H_Y4N7Z0Z8h_F6I8Q8N_Y_Z7_Z_Z_Z_Z_Z=s1360-w1360-h1020-rw" 
                alt="Variedad de Ramen" 
                style={{ borderRadius: '20px', width: '100%', height: '400px', objectFit: 'cover' }}
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1000&auto=format&fit=crop'; }}
              />
              <div style={{ position: 'absolute', bottom: '20px', right: '20px', background: 'var(--primary-color)', padding: '1rem', borderRadius: '10px', fontWeight: 'bold' }}>
                +30 SABORES
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Explosión de <br/><span className="title-gradient">Variedad Absoluta</span></h2>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                No es solo una tienda, es un viaje por Asia. Disponemos de estaciones de preparación equipadas con agua caliente y todo lo necesario para que tu ramen esté perfecto en minutos.
              </p>
              <ul style={{ listStyle: 'none', color: 'var(--text-color)' }}>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Info size={18} color="var(--accent-color)" /> Cada paso guiado y explicado al detalle.
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Info size={18} color="var(--accent-color)" /> El mejor precio para una experiencia premium.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="snacks" className="container">
        <div className="location-content">
          <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Snacks <span className="title-gradient">Novedosos</span></h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
              Descubre aperitivos que nunca has visto. Desde patatas de sabores imposibles hasta dulces virales. 
              <strong> ¿Quieres comerlo caliente?</strong> Usa nuestros microondas disponibles para los clientes. Todo está listo para que lo disfrutes al momento.
            </p>
            <div style={{ background: 'rgba(230, 57, 70, 0.1)', padding: '1.5rem', borderRadius: '15px', borderLeft: '4px solid var(--primary-color)' }}>
              <p style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>
                "Una experiencia totalmente diferente. Eliges, calientas y comes. ¡Es como estar en Seúl!"
              </p>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1000&auto=format&fit=crop" 
            alt="Asian Snacks" 
            style={{ borderRadius: '20px', width: '100%', height: '400px', objectFit: 'cover' }}
          />
        </div>
      </section>

      <section id="ubicacion" className="container">
        <h2 className="section-title">Encuéntranos en Getafe</h2>
        <div className="location-content">
          <div className="map-placeholder" style={{ background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://lh3.googleusercontent.com/p/AF1QipN9S1H_Y4N7Z0Z8h_F6I8Q8N_Y_Z7_Z_Z_Z_Z_Z=s1360-w1360-h1020-rw')`, backgroundSize: 'cover' }}>
            <MapPin size={48} color="var(--primary-color)" />
            <div style={{ marginLeft: '1rem', textAlign: 'center' }}>
              <strong>Lamen Magic Experience</strong><br/>
              Calle Ramón y Cajal 27, Getafe
            </div>
          </div>
          <div className="contact-info">
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Experiencia Guiada</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Si es tu primera vez, no te preocupes. Todo nuestro local tiene instrucciones visuales y nuestro personal te guiará para que tu experiencia sea perfecta.
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Clock size={20} /> Abierto todos los días de 11:00 a 23:00
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: 'var(--text-color)' }}><Instagram /></a>
              <a href="#" style={{ color: 'var(--text-color)' }}><Facebook /></a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2024 Lamen Magic Experience. Tu rincón asiático en el corazón de Getafe.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
