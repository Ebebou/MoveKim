
import { TruckIcon } from '../assets/icons';

export default function PartenairesPage({ PWA_URL }) {
  return (
    <div className="page-container" style={{ padding: '64px 0' }}>
      <div className="container">
        <div className="partners-card">
          <div>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '16px' }}>
              Devenez transporteur partenaire MoveKim
            </h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
              Vous possédez un camion, une camionnette, un tricycle ou un véhicule utilitaire à Kinshasa ? Rejoignez le réseau MoveKim et recevez régulièrement des demandes de courses.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px', fontSize: '0.875rem' }}>
              <li style={{ marginBottom: '8px' }}>✓ Augmentez votre chiffre d'affaires quotidien</li>
              <li style={{ marginBottom: '8px' }}>✓ Accédez à des demandes vérifiées à Kinshasa</li>
            </ul>
            <a href={PWA_URL} target="_blank" rel="noopener noreferrer" className="btn-dark" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Inscrire mon véhicule
            </a>
          </div>

          <div className="partner-box">
            <TruckIcon size={60} color="#C00E11" />
            <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '16px' }}>Réseau de Transporteurs</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '8px' }}>
              Inscrivez votre véhicule et commencez à recevoir des demandes immédiatement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}