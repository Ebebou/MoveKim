import { useState } from 'react'; // 1. Import de useState ajouté
import './App.css';
import Header from '../src/composant/Header'; // Assurez-vous du nom de votre dossier (composant ou components)
import Footer from '../src/composant/Footer'; // Corrigez en './composant/Footer' si vos composants sont dans 'composant'

// Importation de toutes les pages
import HomePage from './pages/HomePage';
import DemenagementPage from './pages/DemenagementPage';
import ColisPage from './pages/ColisPage';
import GrandTransportPage from './pages/GrandTransportPage';
import PartenairesPage from './pages/PartenairesPage';
import SecuritePage from './pages/SecuritePage';
import FaqPage from './pages/FaqPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // 2. Remplacement de process.env par import.meta.env compatible Vite
  const PWA_URL = import.meta.env.VITE_PWA_URL || 'https://movekinapp.vercel.app/';

  const renderPage = () => {
    switch (currentPage) {
      case 'demenagement':
        return <DemenagementPage PWA_URL={PWA_URL} />;
      case 'colis':
        return <ColisPage PWA_URL={PWA_URL} />;
      case 'grand-transport':
        return <GrandTransportPage PWA_URL={PWA_URL} />;
      case 'partenaires':
        return <PartenairesPage PWA_URL={PWA_URL} />;
      case 'securite':
        return <SecuritePage PWA_URL={PWA_URL} />;
      case 'faq':
        return <FaqPage PWA_URL={PWA_URL} />;
      case 'home':
      default:
        return <HomePage onNavigate={setCurrentPage} PWA_URL={PWA_URL} />;
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} onNavigate={setCurrentPage} PWA_URL={PWA_URL} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}


/**    <div>

      <header className="header">
        <div className="container header-content">
          <a href="#" className="logo">
            <img src={logoTrinagleRed} alt="MoveKim Logo" />
          </a>

          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#partenaires">Partenaires</a>
            <a href="#securite">Sécurité</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="header-actions">
            <button className="btn-primary">
              Ouvrir la Web App
            </button>
          </div>
        </div>
      </header>


      <section className="hero">
        <div className="hero-bg">
          <img 
            src="./assets/svg+xml;base64,PHN2ZyBmb2N1c2FibGU9ImZhbHNlIiB3aWR0aD0iMTMiIGhlaWdodD0iOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEuMyAxTDYuNSA1LjcgMS43IDFsLS43LjdMNi41IDcgMTIgMS43bC0uNy0uN3oiLz48L3N2Zz4=.svg" 
            alt="MoveKim Kinshasa" 
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="container">
          <div className="hero-grid">
            <div>
              <h1 className="hero-title">
                Des trajets partout.<br />
                <span className="text-brand">Déménagements.</span><br />
                Envoyez vos colis.
              </h1>
              <p className="hero-description">
                La plateforme logistique et de transport de référence à Kinshasa. Accessible immédiatement sans aucun téléchargement lourd.
              </p>
            </div>

            <div className="pwa-card">
              <div className="pwa-card-header">
                <div>
                  <h3>Scannez pour ouvrir MoveKim sur mobile</h3>
                  <p>Utilisez l'appareil photo de votre téléphone pour accéder directement à l'application.</p>
                </div>
                <div className="qr-box">
                  <img 
                    alt="QR Code MoveKim" 
                  />
                </div>
              </div>
              <button className="btn-secondary">
                Ouvrir dans le navigateur
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">Tous nos services à Kinshasa</h2>

          <div className="services-grid">
            <div  className="service-card">
              <div>
                <div className="service-icon"><HomeIcon /></div>
                <div className="service-header">
                  <span>Déménagement</span>
                  <span className="text-brand"><ArrowRightIcon/></span>
                </div>
                <p className="service-desc">
                  Prise en charge sécurisée de vos meubles et effets personnels vers toutes les communes de Kinshasa.
                </p>
              </div>
              <span className="service-action">Réserver un transport</span>
            </div>

            <div  className="service-card">
              <div>
                <div className="service-icon"><PackageIcon /></div>
                <div className="service-header">
                  <span>Transfert de colis</span>
                  <span className="text-brand"><ArrowRightIcon/></span>
                </div>
                <p className="service-desc">
                  Expédition rapide et sécurisée de paquets, marchandises et plis urgents à travers la ville.
                </p>
              </div>
              <span className="service-action">Expédier un colis</span>
            </div>

            <div className="service-card">
              <div>
                <div className="service-icon"><TruckIcon /></div>
                <div className="service-header">
                  <span>Grand Transport</span>
                  <span className="text-brand"><ArrowRightIcon/></span>
                </div>
                <p className="service-desc">
                  Camions et camionnettes pour volumes importants et matériel pour particuliers et professionnels.
                </p>
              </div>
              <span className="service-action">Commander un camion</span>
            </div>
          </div>
        </div>
      </section>


      <section id="partenaires" className="partners-section">
        <div className="container">
          <div className="partners-card">
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '16px' }}>
                Devenez transporteur partenaire MoveKim
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
                Vous possédez un camion, une camionnette, un tricycle ou un véhicule utilitaire à Kinshasa ? Rejoignez le réseau et recevez des courses régulièrement.
              </p>
              <button  className="btn-dark">
                Inscrire mon véhicule
              </button>
            </div>
            <div className="partner-box">
              <div style={{ fontSize: '3rem', marginBottom: '8px' }}><TruckIcon size={50} color="#1E1E1E" /></div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Réseau de Transporteurs</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                Inscrivez votre véhicule et commencez à recevoir des demandes.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section id="faq" className="faq-section">
        <div className="container faq-container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Questions fréquemment posées</h2>

          <div>
            <details className="faq-item">
              <summary className="faq-summary">
                Comment fonctionne la Web App MoveKim ?
                <span className="text-brand"><ArrowDownIcon size={20} color="#1E1E1E" /></span>
              </summary>
              <p className="faq-answer">
                Cliquez sur « Ouvrir la Web App » ou scannez le QR Code. Renseignez votre adresse de départ et d'arrivée à Kinshasa ainsi que votre numéro de téléphone. Un conseiller vous contacte immédiatement pour attribuer le bon transporteur.
              </p>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">
                Dois-je télécharger une application depuis l'App Store ou Play Store ?
                <span className="text-brand"><ArrowDownIcon size={20} color="#1E1E1E" /></span>
              </summary>
              <p className="faq-answer">
                Non ! MoveKim est une Progressive Web App (PWA). Vous pouvez l'ajouter sur votre écran d'accueil directement depuis votre navigateur Chrome ou Safari.
              </p>
            </details>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <span className="logo"><img src={logoTrinagleRed} alt="MoveKim Logo" /></span>
              <p style={{ color: '#9CA3AF', fontSize: '0.75rem', marginTop: '8px' }}>
                Services de transport et logistique à Kinshasa, RDC.
              </p>
            </div>
            <div className="footer-links">
              <a href="#services">Services</a>
              <a href="#partenaires">Partenaires</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 MoveKim. Tous droits réservés.</p>
            <p>Kinshasa — République Démocratique du Congo</p>
          </div>
        </div>
      </footer>
    </div>
 * 
 * 
 * 
 */