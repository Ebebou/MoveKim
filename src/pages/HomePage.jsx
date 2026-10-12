
import { HomeIcon, ArrowRightIcon, TruckIcon, PackageIcon,  } from '../assets/icons';

export default function HomePage({ onNavigate, PWA_URL }) {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
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
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(PWA_URL)}&color=C00E11`} 
                    alt="QR Code MoveKim" 
                  />
                </div>
              </div>
              <a href={PWA_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: 'block', textDecoration: 'none' }}>
                Ouvrir dans le navigateur
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">Tous nos services à Kinshasa</h2>

          <div className="services-grid">
            <div className="service-card" onClick={() => onNavigate('demenagement')}>
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
              <span className="service-action">En savoir plus</span>
            </div>

            <div className="service-card" onClick={() => onNavigate('colis')}>
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
              <span className="service-action">En savoir plus</span>
            </div>

            <div className="service-card" onClick={() => onNavigate('grand-transport')}>
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
              <span className="service-action">En savoir plus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Partenaires */}
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
              <button className="btn-dark" onClick={() => onNavigate('partenaires')}>
                Inscrire mon véhicule
              </button>
            </div>
            <div className="partner-box">
              <div style={{ fontSize: '3rem', marginBottom: '8px' }}>
                <TruckIcon size={50} color="#1E1E1E" />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Réseau de Transporteurs</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                Inscrivez votre véhicule et commencez à recevoir des demandes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
