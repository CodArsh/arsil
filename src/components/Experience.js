import { motion } from "framer-motion";
import hashtechyLogo from "../assets/img/hashtechy_logo.jpg";
import groovyLogo from "../assets/img/groovy_logo.jpg";

const JOBS = [
  {
    role: "Senior Software Engineer — Full Stack & AI",
    company: "Hashtechy Pvt Ltd",
    period: "Jul 2024 — Present",
    logo: hashtechyLogo,
    details:
      "Owning products end to end — architected and shipped two Shopify apps now live on the Shopify App Store (GEO Studio, RapidSales), built AI-driven automation systems (WhatsApp, email, AI voice), and continue to lead React Native app development for enterprise clients. Working across Node.js, React, PostgreSQL, MongoDB and AWS.",
  },
  {
    role: "React Native Developer",
    company: "Groovyweb Pvt Ltd",
    period: "May 2022 — Feb 2024",
    logo: groovyLogo,
    details:
      "Delivered Android/iOS apps for multiple international clients with a focus on performance and scalable architecture — e-commerce, medical and marketplace products. Built reusable component libraries, integrated payments and Firebase services, and handled complete store deployments.",
  },
];

export const Experience = () => (
  <section id="experience">
    <div className="wrap">
      <div className="kicker">Career</div>
      <h2 className="section-title">
        Experience that <span className="grad-text">compounds.</span>
      </h2>
      <p className="section-sub">
        5 years of building production software — starting in mobile, expanding
        into full-stack, and now shipping AI-powered products used by real
        businesses every day.
      </p>
      <div className="timeline">
        {JOBS.map((job, i) => (
          <motion.div
            key={job.company}
            className="tl-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <div className="tl-card">
              <div className="tl-head">
                <img src={job.logo} alt={job.company} />
                <h3>{job.role}</h3>
              </div>
              <div className="tl-meta">
                <span className="tl-company">{job.company}</span>
                <span className="tl-period">{job.period}</span>
              </div>
              <p>{job.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
