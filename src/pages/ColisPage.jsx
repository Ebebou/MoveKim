// eslint-disable-next-line no-unused-vars
import React from 'react';

import camionBg from '../assets/colis.avif';

import {
  PackageIcon,
  DeliverySpeedIcon,
  MerchantsIcon,
  TrackingShieldIcon,
} from "../assets/icons";

export default function ColisPage({ PWA_URL }) {
  return (
    <div className="page-container">
      {/* 1. Hero Section */}
      <section
        className="hero"
        style={{
          minHeight: "400px",
          position: "relative",
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.5)), url(${camionBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <PackageIcon size={50} color="#C00E11" />
            <h1 className="hero-title">Livraison & Transfert de Colis</h1>
          </div>
          <p className="hero-description">
            Expédiez vos plis, marchandises et paquets urgents rapidement et en
            toute sécurité dans toute la ville de Kinshasa.
          </p>
        </div>
      </section>

      {/* 2. Section Avantages & Services */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Pourquoi choisir MoveKim Colis ?</h2>

          <div className="services-grid">
            {/* Carte 1 : Livraison Rapide */}
            <div className="service-card">
              <div style={{ marginBottom: "16px" }}>
                <DeliverySpeedIcon size={36} color="#1E1E1E" />
              </div>
              <h3>Livraison Rapide</h3>
              <p className="service-desc">
                Prise en charge directe de votre colis pour un acheminement
                express en ville.
              </p>
            </div>

            {/* Carte 2 : Vendeurs & Commerçants */}
            <div className="service-card">
              <div style={{ marginBottom: "16px" }}>
                <MerchantsIcon size={36} color="#1E1E1E" />
              </div>
              <h3>Vendeurs & Commerçants</h3>
              <p className="service-desc">
                Solution idéale pour expédier les commandes de vos clients à
                Kinshasa en toute fiabilité.
              </p>
            </div>

            {/* Carte 3 : Traçabilité */}
            <div className="service-card">
              <div style={{ marginBottom: "16px" }}>
                <TrackingShieldIcon size={36} color="#1E1E1E" />
              </div>
              <h3>Traçabilité & Contact Direct</h3>
              <p className="service-desc">
                Un conseiller confirme votre commande et suit l'acheminement de
                votre paquet jusqu'à destination.
              </p>
            </div>
          </div>

          {/* 3. Carte PWA / Action App */}
          <div
            className="pwa-card"
            style={{ marginTop: "48px", textAlign: "center" }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: 600 }}>
              Un colis à envoyer ?
            </h3>
            <p style={{ fontSize: "0.875rem", opacity: 0.9 }}>
              Saisissez les adresses de départ et d'arrivée directement dans
              notre application Web[cite: 7].
            </p>
            <a
              href={PWA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                display: "inline-block",
                marginTop: "16px",
                textDecoration: "none",
              }}
            >
              <span>Expédier un Colis</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
