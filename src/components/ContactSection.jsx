import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import contactLottie from "../assets/lottie/Contact.lottie?url";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import SectionHeading from "./SectionHeading.jsx";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const phone = import.meta.env.VITE_CONTACT_PHONE || "";
  const emailTo =
    import.meta.env.VITE_CONTACT_EMAIL || "your-email@example.com";

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: "loading", msg: "Sending..." });

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, message }),
        });
        if (!res.ok) throw new Error("Failed to send");
        setStatus({ state: "success", msg: "Message sent. Thank you!" });
        setEmail("");
        setMessage("");
      } catch {
        setStatus({ state: "error", msg: "Failed to send. Try again." });
      }
      return;
    }

    const subject = encodeURIComponent("Portfolio contact form");
    const body = encodeURIComponent(`From: ${email}\n\n${message}`);
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
    setStatus({ state: "success", msg: "Opening your email app..." });
  }

  return (
    <section id="contact" className="section-full contact-section section-alt">
      <div className="container">
        <SectionHeading>Contact</SectionHeading>
        <div className="contact-grid">
          <div className="contact-left">
            <div className="lottie-box">
              <DotLottieReact src={contactLottie} loop autoplay />
            </div>
            <div className="contact-details" aria-label="Quick contact details">
              <a className="contact-detail-item" href={`tel:${phone}`}>
                <span className="contact-bullet" aria-hidden>
                  <FaPhoneAlt size={18} />
                </span>
                <span className="contact-text">{phone || "Add number"}</span>
              </a>
              <a className="contact-detail-item" href={`mailto:${emailTo}`}>
                <span className="contact-bullet" aria-hidden>
                  <FaEnvelope size={18} />
                </span>
                <span className="contact-text">{emailTo}</span>
              </a>
            </div>
          </div>

          <div className="contact-panel">
            <div className="card-surface contact-card">
              <h3 className="mb-2">Get in touch</h3>
              <form className="contact-form" onSubmit={onSubmit}>
                <label className="sr-only" htmlFor="email">
                  Your email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="sr-only" htmlFor="message">
                  Your message
                </label>
                <textarea
                  id="message"
                  required
                  placeholder="your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                />
                <button
                  type="submit"
                  className="ihb ihb--primary contact-submit"
                >
                  <span className="ihb-label">Submit</span>
                </button>
                {status.state !== "idle" && (
                  <p
                    className={`contact-status contact-status--${status.state}`}
                    role={status.state === "error" ? "alert" : undefined}
                  >
                    {status.msg}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
