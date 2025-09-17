import SectionHeading from "../components/SectionHeading.jsx";
import FadeInUp from "../components/FadeInUp.jsx";
import CertificateCard from "../components/CertificateCard.jsx";

export default function CertificationsSection({ certifications }) {
  return (
    <section id="certifications" className="section">
      <div className="container text-center">
        <SectionHeading>My Certifications</SectionHeading>
        <FadeInUp as="p" className="certs-lead" delay={120}>
          Professional certifications that demonstrate my expertise and
          commitment to continuous learning. Hover over each certificate to see
          more details.
        </FadeInUp>
        <div className="certs-grid">
          {certifications.map((c, idx) => (
            <FadeInUp key={idx} as="div" delay={idx * 90}>
              <CertificateCard {...c} />
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
