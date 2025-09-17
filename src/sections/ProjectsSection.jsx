import SectionHeading from "../components/SectionHeading.jsx";
import FadeInUp from "../components/FadeInUp.jsx";
import { FaExternalLinkAlt, FaCodeBranch } from "react-icons/fa";

export default function ProjectsSection({ projects, tagIconMap, tagColorMap }) {
  return (
    <section id="projects" className="section container">
      <SectionHeading>Featured Projects</SectionHeading>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <FadeInUp
            key={idx}
            as="div"
            className="project-card"
            delay={idx * 80}
          >
            <div
              className="project-card__inner"
              tabIndex={0}
              aria-label={`${proj.title} project card, flip for details`}
            >
              <div className="project-card__face project-card__front">
                <div className="project-media">
                  {proj.image ? (
                    <img
                      src={proj.image}
                      alt={`${proj.title} screenshot`}
                      loading="lazy"
                      decoding="async"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://placehold.co/640x480?text=No+Image";
                        e.currentTarget.onerror = null;
                      }}
                    />
                  ) : (
                    <span>Image</span>
                  )}
                </div>
                <h3 className="project-title">{proj.title}</h3>
                <div className="project-tags">
                  {proj.tags.map((tag, i) => {
                    const IconComp = tagIconMap[tag] || null;
                    const brand = tagColorMap[tag];
                    const iconColor = brand || undefined;
                    return (
                      <span key={i} className="tag tag--icon" title={tag}>
                        {IconComp ? (
                          <IconComp size={16} color={iconColor} />
                        ) : (
                          tag
                        )}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="project-card__face project-card__back">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.desc}</p>
                <div className="project-actions">
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener"
                      style={{
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        gap: ".3em",
                      }}
                    >
                      Live Demo <FaExternalLinkAlt size={16} />
                    </a>
                  )}
                  {proj.code && (
                    <a
                      href={proj.code}
                      target="_blank"
                      rel="noopener"
                      style={{
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        gap: ".3em",
                      }}
                    >
                      View Code <FaCodeBranch size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </FadeInUp>
        ))}
      </div>
    </section>
  );
}
