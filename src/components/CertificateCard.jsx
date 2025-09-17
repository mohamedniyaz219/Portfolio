import React from "react";

export default function CertificateCard({
  title,
  issuer,
  year,
  image,
  details = [],
  link,
}) {
  return (
    <div
      className="cert-card"
      tabIndex={0}
      aria-label={`${title} by ${issuer}, issued ${year}`}
    >
      <div className="cert-card__inner">
        <div className="cert-card__face cert-card__front">
          <div className="cert-media">
            {image ? (
              <img src={image} alt={`${title} certificate`} />
            ) : (
              <div className="cert-media__ph">Certificate</div>
            )}
          </div>
          <div className="cert-meta">
            <div className="cert-title">{title}</div>
            <div className="cert-issuer">{issuer}</div>
            <div className="cert-year">Issued: {year}</div>
          </div>
        </div>

        <div className="cert-card__face cert-card__back">
          <div className="cert-back__content">
            <div className="cert-title">{title}</div>
            {issuer && <div className="cert-issuer">{issuer}</div>}
            {details?.length > 0 && (
              <ul className="cert-details">
                {details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener"
                className="ihb ihb--outline"
                style={{ marginTop: "auto" }}
              >
                <span className="ihb-label">View Certificate</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
