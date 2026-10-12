// eslint-disable-next-line no-unused-vars
import React from "react";

import { HomeIcon, EnterpriseIcon } from "../assets/icons";

export default function DemenagementPage({ PWA_URL }) {
  return (
    <div className="page-container">
      <section
        className="hero-demenagement"

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
            <HomeIcon size={50} color="#C00E11" />
            <h1 className="hero-title" style={{ color: "#FAFAFA" }}>
              Service Déménagement à Kinshasa
            </h1>
          </div>
          <p className="hero-description" >
            Déménagez en toute sérénité à travers les 24 communes de Kinshasa.
            MoveKim prend en charge la sécurité et le transport de vos meubles
            et effets personnels.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Ce que comprend notre service :</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <HomeIcon size={36} color="#1E1E1E" />
              </div>
              <div className="service-header">
                <span>Particuliers & Familles</span>
              </div>
              <p className="service-desc">
                Transport de vos meubles, appareils électroménagers et cartons
                de votre ancien vers votre nouveau logement.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <EnterpriseIcon size={36} color="#1E1E1E" />
              </div>
              <div className="service-header">
                <span>Bureaux & Entreprises</span>
              </div>
              <p className="service-desc">
                Déménagement de matériel informatique, bureaux et archives
                d'entreprise en toute confidentialité.
              </p>
            </div>
          </div>

          <div
            className="pwa-card"
            style={{ marginTop: "48px", textAlign: "center" }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: 600 }}>
              Prêt à déménager ?
            </h3>
            <p style={{ fontSize: "0.875rem", opacity: 0.9 }}>
              Obtenez une estimation immédiate de votre course via notre Web App
              sans aucun téléchargement lourd.
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
              Demander mon Déménagement
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
