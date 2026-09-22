import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const Contact = () => (
  <>
    <section id="contact">
      <div className="wrap">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Let's build something <span className="grad-text">intelligent.</span>
          </h2>
          <p>
            Have a product idea, a role to fill, or a system that needs to exist?
            I respond fast — and I ship faster.
          </p>
          <div className="contact-actions">
            <a href="mailto:arsil8356@gmail.com" className="btn-primary">
              <Mail size={17} /> arsil8356@gmail.com
            </a>
            <a
              href="https://wa.me/919106185130?text=Hi%20Arsil!%20I%20just%20visited%20your%20portfolio%20and%20would%20love%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <MessageCircle size={17} /> WhatsApp Me
            </a>
          </div>
          <div className="contact-meta">
            <a href="tel:+919106185130">
              <Phone size={15} /> +91 91061 85130
            </a>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <MapPin size={15} /> Ahmedabad, India · Open to relocation
            </span>
          </div>
        </motion.div>
      </div>
    </section>

    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Arsil Malek — Designed & built by me, like everything else here.</p>
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/arsil-malek/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
          <a
            href="https://github.com/CodArsh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
        </div>
      </div>
    </footer>
  </>
);
