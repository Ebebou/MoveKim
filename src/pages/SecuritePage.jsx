
export default function SecuritePage() {
  return (
    <div className="page-container" style={{ padding: '64px 0' }}>
      <div className="container">
        <h1 className="section-title">Sécurité & Sérénité chez MoveKim</h1>
        <div className="services-grid">
          <div className="service-card">
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>✅</div>
            <h3>Transporteurs Vérifiés</h3>
            <p className="service-desc">
              Chaque chauffeur partenaire est identifié, contrôlé et enregistré dans nos bases avant d'effectuer des transports[cite: 11].
            </p>
          </div>
          <div className="service-card">
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>📞</div>
            <h3>Assistance locale 24/7</h3>
            <p className="service-desc">
              Une équipe basée à Kinshasa est disponible en permanence par téléphone ou WhatsApp pour suivre vos opérations[cite: 11].
            </p>
          </div>
          <div className="service-card">
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>💰</div>
            <h3>Tarification Transparente</h3>
            <p className="service-desc">
              Le prix de votre prestation est confirmé avec vous par un conseiller avant le départ, sans frais cachés[cite: 11].
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}