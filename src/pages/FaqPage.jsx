
import { ArrowDownIcon } from '../assets/icons';

export default function FaqPage() {
  return (
    <div className="page-container" style={{ padding: ' 80px 0 0 0', height: '80vh' }}>
      <div className="container faq-container">
        <h1 className="section-title" style={{ textAlign: 'center' }}>Questions fréquemment posées</h1>

        <div style={{ marginTop: '32px' }}>
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

          <details className="faq-item">
            <summary className="faq-summary">
              Comment le tarif de ma course est-il déterminé ?
              <span className="text-brand"><ArrowDownIcon size={20} color="#1E1E1E" /></span>
            </summary>
            <p className="faq-answer">
              Le prix est calculé selon la distance et la nature du transport Un conseiller vous confirme le montant exact avant d'envoyer le véhicule.
            </p>
          </details>
        </div>
      </div>

    </div>
  );
}