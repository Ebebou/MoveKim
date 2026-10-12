import { 
  TruckIcon, 
  DeliverySpeedIcon, 
  MerchantsIcon, 

} from '../assets/icons';

export default function GrandTransportPage({ PWA_URL }) {
  return (
    <div className="page-container">
      {/* 1. Hero Section */}
      <section className="hero-grand-transport" style={{ minHeight: '350px' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <TruckIcon size={48} color="#C00E11" />
            <h1 className="hero-title" style={{ color: "#FAFAFA" }}>
              Grand Transport & Véhicules Utilitaires
            </h1>
          </div>
          <p className="hero-description">
            Camions, camionnettes et tricycles adaptés au transport de volumes importants et de matériel lourd à Kinshasa.
          </p>
        </div>
      </section>

      {/* 2. Section Solutions */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Solutions pour gros volumes :</h2>
          
          <div className="services-grid">
            {/* Carte 1 : Flotte Adaptée */}
            <div className="service-card">
              <div style={{ marginBottom: '16px' }}>
                <TruckIcon size={36} color='#1E1E1E' />
              </div>
              <h3>Flotte Adaptée</h3>
              <p className="service-desc">
                Accès à des camionnettes, tricycles et camions selon la taille et le poids de votre chargement[cite: 10].
              </p>
            </div>

            {/* Carte 2 : Matériaux & Marchandises */}
            <div className="service-card">
              <div style={{ marginBottom: '16px' }}>
                <DeliverySpeedIcon size={36} color='#1E1E1E' />
              </div>
              <h3>Matériaux & Marchandises</h3>
              <p className="service-desc">
                Transport de matériel de construction, stock commercial ou équipements événementiels.
              </p>
            </div>

            {/* Carte 3 : Support Entreprises */}
            <div className="service-card">
              <div style={{ marginBottom: '16px' }}>
                <MerchantsIcon size={36} color='#1E1E1E' />
              </div>
              <h3>Support Entreprises</h3>
              <p className="service-desc">
                Service logistique dédié pour les professionnels et partenaires commerciaux à Kinshasa[cite: 10].
              </p>
            </div>
          </div>

          {/* 3. Carte PWA / Action App */}
          <div className="pwa-card" style={{ marginTop: '48px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Besoin d'un camion ?</h3>
            <p style={{ fontSize: '0.875rem', opacity: 0.9 }}>
              Commandez votre véhicule utilitaire en un clic depuis notre application PWA.
            </p>
            <a 
              href={PWA_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '16px', textDecoration: 'none' }}
            >
              <span>Commander un Camion</span>

            </a>
          </div>
        </div>
      </section>
    </div>
  );
}