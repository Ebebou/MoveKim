import 'react';
import logoTrinagleRed from '../assets/logo red rectangle.png';

export default function Header({ currentPage, onNavigate, PWA_URL }) {
  // Helper pour vérifier si le lien est la page active
  const isActive = (page) => currentPage === page;

  return (
    <header className="header">
      <div className="container header-content">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); onNavigate('home'); }} 
          className="logo"
        >
          <img src={logoTrinagleRed} alt="MoveKim Logo" />
        </a>

        <nav className="nav-links">
          <a 
            href="#demenagement" 
            onClick={(e) => { e.preventDefault(); onNavigate('demenagement'); }}
            className={isActive('demenagement') ? 'nav-link active' : 'nav-link'}
          >
            Déménagement
          </a>
          <a 
            href="#colis" 
            onClick={(e) => { e.preventDefault(); onNavigate('colis'); }}
            className={isActive('colis') ? 'nav-link active' : 'nav-link'}
          >
            Colis
          </a>
          <a 
            href="#grand-transport" 
            onClick={(e) => { e.preventDefault(); onNavigate('grand-transport'); }}
            className={isActive('grand-transport') ? 'nav-link active' : 'nav-link'}
          >
            Grand Transport
          </a>
          <a 
            href="#partenaires" 
            onClick={(e) => { e.preventDefault(); onNavigate('partenaires'); }}
            className={isActive('partenaires') ? 'nav-link active' : 'nav-link'}
          >
            Partenaires
          </a>
          <a 
            href="#faq" 
            onClick={(e) => { e.preventDefault(); onNavigate('faq'); }}
            className={isActive('faq') ? 'nav-link active' : 'nav-link'}
          >
            FAQ
          </a>
        </nav>

        <div className="header-actions">
          <a 
            href={PWA_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            Ouvrir la Web App
          </a>
        </div>
      </div>
    </header>
  );
}