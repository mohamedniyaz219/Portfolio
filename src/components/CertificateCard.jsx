import React, { useMemo, useRef } from "react";

export default function CertificateCard({
  title,
  issuer,
  year,
  image,
  link,
}) {
  const cardRef = useRef(null);

  const a11yLabel = useMemo(
    () => `${title} by ${issuer}, issued ${year}`,
    [title, issuer, year]
  );

  const setPointer = (event) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    const clamp = (value) => Math.max(0, Math.min(100, value));
    const px = clamp(x);
    const py = clamp(y);

    const rotateY = ((px - 50) / 50) * 4;
    const rotateX = -((py - 50) / 50) * 4;

    card.style.setProperty("--pointer-x", `${px}%`);
    card.style.setProperty("--pointer-y", `${py}%`);
    card.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
  };

  const resetPointer = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--pointer-x", "50%");
    card.style.setProperty("--pointer-y", "50%");
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  };

  const content = (
    <>
      <div className="cert-media cert-media--modern">
        {image ? (
          <img src={image} alt={`${title} certificate`} loading="lazy" />
        ) : (
          <div className="cert-media__ph">Certificate</div>
        )}
      </div>

      <div className="cert-meta cert-meta--modern">
        <div className="cert-title cert-title--modern">{title}</div>
        <div className="cert-row">
          <div className="cert-issuer cert-issuer--modern">{issuer}</div>
          <div className="cert-year cert-year--modern">{year}</div>
        </div>
      </div>
    </>
  );

  if (link) {
    return (
      <a
        ref={cardRef}
        className="cert-card cert-card--modern"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${a11yLabel}. Open certificate in a new tab.`}
        onMouseMove={setPointer}
        onMouseLeave={resetPointer}
      >
        <div className="cert-holo" />
        {content}
      </a>
    );
  }

  return (
    <article
      ref={cardRef}
      className="cert-card cert-card--modern"
      tabIndex={0}
      aria-label={a11yLabel}
      onMouseMove={setPointer}
      onMouseLeave={resetPointer}
    >
      <div className="cert-holo" />
      {content}
    </article>
  );
}
