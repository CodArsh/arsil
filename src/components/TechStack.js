import { motion } from "framer-motion";
import { Monitor, Server, Smartphone, Database, BrainCircuit, Cloud } from "lucide-react";

const GROUPS = [
  {
    icon: <Monitor size={14} />,
    title: "Frontend",
    items: ["React", "TypeScript", "Redux", "Framer Motion", "Tailwind CSS", "HTML / CSS"],
  },
  {
    icon: <Server size={14} />,
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Socket.IO", "JWT / Auth", "Razorpay / Stripe"],
  },
  {
    icon: <Smartphone size={14} />,
    title: "Mobile",
    items: ["React Native", "Firebase", "Push Notifications", "Maps & Geo", "Gradle / Xcode", "Play Store / App Store"],
  },
  {
    icon: <Database size={14} />,
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "Supabase", "Firestore", "Prisma", "Mongoose"],
  },
  {
    icon: <BrainCircuit size={14} />,
    title: "AI & Automation",
    items: ["Claude / GPT / Gemini APIs", "AI Agents", "Prompt Engineering", "WhatsApp Automation", "AI Voice Calls", "GEO / AI-SEO"],
  },
  {
    icon: <Cloud size={14} />,
    title: "Cloud & DevOps",
    items: ["AWS EC2", "Vercel", "Render", "PM2 / Nginx", "Git / GitHub", "CI / CD"],
  },
];

export const TechStack = () => (
  <section id="stack">
    <div className="wrap">
      <div className="kicker">Tech Stack</div>
      <h2 className="section-title">
        Tools I use to <span className="grad-text">ship fast.</span>
      </h2>
      <p className="section-sub">
        Stack-agnostic by mindset — I pick the right tool for the product, and
        I'm productive in a new technology within days, not months.
      </p>
      <div className="stack-grid">
        {GROUPS.map((group, i) => (
          <motion.div
            key={group.title}
            className="stack-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
          >
            <h4>{group.icon} {group.title}</h4>
            <div className="chips">
              {group.items.map((item) => (
                <span className="chip" key={item}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
