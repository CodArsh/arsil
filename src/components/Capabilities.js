import { motion } from "framer-motion";
import { BrainCircuit, Layers, Smartphone, Rocket } from "lucide-react";

const CAPS = [
  {
    icon: <BrainCircuit size={24} />,
    title: "AI Engineering",
    desc: "LLM integrations (Claude, GPT, Gemini), AI agents, WhatsApp & voice automation, and AI-first SaaS products. I don't just use AI tools — I ship AI products that generate revenue.",
  },
  {
    icon: <Layers size={24} />,
    title: "Full-Stack MERN Development",
    desc: "MongoDB, Express, React, Node — REST APIs, authentication, payment gateways, real-time systems with Socket.IO, and PostgreSQL when the job calls for it. Architecture to deployment, solo.",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile App Development",
    desc: "React Native apps for iOS & Android — Firebase, push notifications, maps, payments, native modules, and full Play Store / App Store release cycles. 10+ apps in production.",
  },
  {
    icon: <Rocket size={24} />,
    title: "Product & SaaS Delivery",
    desc: "Two Shopify apps live on the App Store, built and operated end to end: cloud infra (AWS EC2, Supabase, Vercel), CI, monitoring, and iteration based on real merchant feedback.",
  },
];

export const Capabilities = () => (
  <section id="expertise">
    <div className="wrap">
      <div className="kicker">What I Do</div>
      <h2 className="section-title">
        One developer. <span className="grad-text">Every layer.</span>
      </h2>
      <p className="section-sub">
        I take products from idea to production without needing a team — design,
        frontend, backend, mobile, AI, infrastructure, and everything in between.
      </p>
      <div className="cap-grid">
        {CAPS.map((cap, i) => (
          <motion.div
            key={cap.title}
            className="cap-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="cap-icon">{cap.icon}</div>
            <h3>{cap.title}</h3>
            <p>{cap.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
