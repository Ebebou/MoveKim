
import logoTrinagleRed from '../assets/logo red rectangle.png';

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <span className="logo">
              <img src={logoTrinagleRed} alt="MoveKim Logo" />
            </span>
            <p style={{ color: '#9CA3AF', fontSize: '0.75rem', marginTop: '8px' }}>
              Services de transport et logistique à Kinshasa, RDC.
            </p>
          </div>
          <div className="footer-links">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('demenagement'); }}>Déménagement</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('colis'); }}>Colis</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('grand-transport'); }}>Grand Transport</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('partenaires'); }}>Partenaires</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('faq'); }}>FAQ</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 MoveKim. Tous droits réservés.</p>
          <p>Kinshasa — République Démocratique du Congo</p>
        </div>
      </div>
    </footer>
  );
}