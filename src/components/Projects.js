import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import geoShot from "../assets/img/geo-studio.webp";
import rapidShot from "../assets/img/rapidsales.png";
import projImg1 from "../assets/img/project1.jpg";
import projImg2 from "../assets/img/project2.jpg";
import projImg3 from "../assets/img/project3.jpg";
import projImg4 from "../assets/img/project4.png";
import projImg5 from "../assets/img/project5.png";
import projImg6 from "../assets/img/project6.png";

const FEATURED = [
  {
    title: "GEO Studio",
    tagline: "AI Search Visibility Platform — Live on Shopify App Store",
    shot: geoShot,
    desc: "The world's first GEO executor: shows brands exactly how ChatGPT, Claude, Perplexity and Gemini read and rank their store — then hands them the fixes, ready to ship. Built solo, end to end: scoring engine, dashboard, billing and cloud infrastructure.",
    tags: ["AI / LLM", "Shopify", "Node.js", "React", "PostgreSQL", "AWS EC2"],
    links: [
      { label: "Visit geostudio.app", url: "https://geostudio.app", primary: true },
    ],
  },
  {
    title: "RapidSales",
    tagline: "AI Sales Automation Platform — rapidsales.ai",
    shot: rapidShot,
    desc: "Automates Email, WhatsApp and human-like AI voice calls from one sales dashboard for D2C brands. Includes Shopify & WooCommerce integrations, abandoned-cart recovery via Razorpay Magic Checkout, and a unified customer timeline.",
    tags: ["AI Voice", "WhatsApp API", "Shopify", "WooCommerce", "Node.js", "Supabase"],
    links: [
      { label: "Visit rapidsales.ai", url: "https://rapidsales.ai", primary: true },
    ],
  },
];

const PROJECTS = [
  {
    title: "MegaCharge",
    desc: "EV charging station app — live station maps, real-time charging via OCPP, Razorpay payments.",
    stack: "React Native · Node.js · Socket.IO",
    img: projImg1,
  },
  {
    title: "Sparepart Wale",
    desc: "Online marketplace for car spare parts with catalog search and ordering.",
    stack: "React Native · MERN",
    img: projImg2,
  },
  {
    title: "Gripit",
    desc: "E-commerce platform with full checkout and order management flows.",
    stack: "React Native · Firebase",
    img: projImg3,
  },
  {
    title: "Dottie",
    desc: "Inclusive dating app designed for people with disabilities.",
    stack: "React Native · Node.js",
    img: projImg4,
  },
  {
    title: "Aparna",
    desc: "E-commerce platform for a premium home-solutions brand.",
    stack: "React Native · MERN",
    img: projImg5,
  },
  {
    title: "Oculabs",
    desc: "Medical app for remote eye-care diagnostics and patient tracking.",
    stack: "React Native · REST APIs",
    img: projImg6,
  },
];

export const Projects = () => (
  <section id="projects">
    <div className="wrap">
      <div className="kicker">Featured Work</div>
      <h2 className="section-title">
        Products I've <span className="grad-text">built & shipped.</span>
      </h2>
      <p className="section-sub">
        Not demos — real products with real users. Both featured platforms below
        were designed, developed, deployed and are operated by me alone.
      </p>

      <div className="featured-grid">
        {FEATURED.map((project, i) => (
          <motion.article
            key={project.title}
            className="feat-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
          >
            <div className="feat-shot">
              <img src={project.shot} alt={project.title} />
              <span className="feat-live">
                <span className="dot"></span> LIVE
              </span>
            </div>
            <div className="feat-body">
              <h3>{project.title}</h3>
              <div className="feat-tagline">{project.tagline}</div>
              <p>{project.desc}</p>
              <div className="feat-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="feat-links">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={link.primary ? "feat-link primary" : "feat-link"}
                  >
                    <ExternalLink size={15} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="proj-grid">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            className="proj-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
          >
            <div className="proj-shot">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="proj-info">
              <h4>{project.title}</h4>
              <p>{project.desc}</p>
              <div className="proj-stack">{project.stack}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
