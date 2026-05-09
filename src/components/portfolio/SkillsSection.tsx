import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    label: "Mobile",
    accent: "#C1440E",
    skills: ["Kotlin", "Java", "Android Studio", "Jetpack Compose", "XML", "Flutter"],
  },
  {
    label: "Backend",
    accent: "#7C5C3E",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    label: "ML / Data",
    accent: "#3E6B5C",
    skills: ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow"],
  },
  {
    label: "Tools",
    accent: "#4A4560",
    skills: ["Firebase", "SQLite", "Room DB", "Git", "GitHub", "Postman"],
  },
];

// Flat list for marquee
const allSkills = skillGroups.flatMap((g) => g.skills);
const doubled = [...allSkills, ...allSkills];

const SkillsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: "#F5F2EC" }}
    >
      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Header */}
      <div className="px-8 md:px-16 lg:px-24 max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-5"
        >
          <div className="w-8 h-[1.5px] bg-[#C1440E]" />
          <p
            className="text-[11px] tracking-[0.28em] uppercase text-[#C1440E] font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Stack & Tools
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="mt-6 font-light text-[#1C1A17] leading-[0.95]"
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
          }}
        >
          What I work
          <br />
          <em className="italic text-[#C1440E] font-light">with.</em>
        </motion.h2>
      </div>

      {/* Skill groups — bento-style */}
      <div className="px-8 md:px-16 lg:px-24 max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1C1A17]/8 rounded-2xl overflow-hidden border border-[#1C1A17]/8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.15 + gi * 0.08,
              }}
              className="group relative bg-[#F5F2EC] px-7 py-8 hover:bg-[#EFEBE3] transition-colors duration-300"
            >
              {/* accent bar */}
              <div
                className="w-6 h-[2px] mb-5 transition-all duration-300 group-hover:w-10"
                style={{ background: group.accent }}
              />

              <p
                className="text-[10px] tracking-[0.25em] uppercase font-semibold mb-5"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: group.accent,
                  opacity: 0.8,
                }}
              >
                {group.label}
              </p>

              <ul className="flex flex-col gap-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 text-[#1C1A17]/70 group-hover:text-[#1C1A17] transition-colors duration-200"
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: "1.05rem",
                      fontWeight: 300,
                    }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 opacity-60"
                      style={{ background: group.accent }}
                    />
                    {skill}
                  </li>
                ))}
              </ul>

              {/* subtle corner number */}
              <span
                className="absolute bottom-5 right-6 text-[2.5rem] font-bold leading-none select-none pointer-events-none opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-300"
                style={{
                  fontFamily: "'Fraunces', serif",
                  color: group.accent,
                }}
              >
                {String(gi + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative select-none">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #F5F2EC, transparent)" }} />
        <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #F5F2EC, transparent)" }} />

        <div className="overflow-hidden">
          <motion.div
            className="flex items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
            style={{ width: "max-content" }}
          >
            {doubled.map((skill, i) => (
              <div key={`${skill}-${i}`} className="flex items-center gap-6 mx-5">
                <span
                  className="text-[13px] font-light text-[#1C1A17]/35 whitespace-nowrap tracking-[0.12em] uppercase"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {skill}
                </span>
                <span
                  className="text-base leading-none"
                  style={{ color: "#C1440E", opacity: 0.3 }}
                >
                  ✦
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
