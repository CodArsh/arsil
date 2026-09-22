import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles, Braces, Smartphone } from "lucide-react";
import portrait from "../assets/img/Arsh_.jpg";

const ROLES = [
  "Full-Stack MERN Engineer",
  "AI Developer",
  "React Native Expert",
  "SaaS & Shopify App Builder",
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[roleIndex % ROLES.length];
    const speed = deleting ? 35 : 70;
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = full.substring(0, text.length + 1);
        setText(next);
        if (next === full) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = full.substring(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-badge">
              <span className="dot"></span> Open to global opportunities
            </div>
            <h1>
              I build <span className="grad-text">intelligent products</span>,
              end to end.
            </h1>
            <div className="hero-role">
              {"> "}{text}
              <span className="cursor">|</span>
            </div>
            <p className="hero-desc">
              I'm <strong>Arsil Malek</strong> — a Full-Stack (MERN) &amp; AI
              Developer with <strong>5 years of experience</strong> shipping
              production software single-handedly. From AI-powered SaaS and
              Shopify apps to cross-platform mobile apps and scalable backends —
              if it can be built, I can build it. Alone.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                View My Work <ArrowRight size={17} />
              </a>
              <a
                href="https://wa.me/919106185130?text=Hi%20Arsil!%20I%20just%20visited%20your%20portfolio%20and%20would%20love%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <MessageCircle size={17} /> Let's Talk
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <b>5+</b>
                <span>Years Experience</span>
              </div>
              <div className="hero-stat">
                <b>15+</b>
                <span>Products Shipped</span>
              </div>
              <div className="hero-stat">
                <b>2</b>
                <span>Live Shopify Apps</span>
              </div>
              <div className="hero-stat">
                <b>4</b>
                <span>Platforms Mastered</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="portrait-ring">
              <img src={portrait} alt="Arsil Malek" />
            </div>
            <div className="float-chip c1">
              <Sparkles size={14} color="#8b5cf6" /> AI-Powered SaaS
            </div>
            <div className="float-chip c2">
              <Braces size={14} color="#22d3ee" /> MERN Stack
            </div>
            <div className="float-chip c3">
              <Smartphone size={14} color="#a3e635" /> iOS · Android
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
