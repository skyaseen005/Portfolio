import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Full-Stack Developer.",
  "DSA Problem Solver.",
  "Android & Web Developer.",
  "AI And Machine Learning Enthusiast.",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayRole, setDisplayRole] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (isTyping) {
      if (charIndex < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayRole(currentRole.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2400);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayRole(currentRole.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 35);
        return () => clearTimeout(timeout);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, roleIndex]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.18, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-24 pb-16 overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute top-1/4 right-0 w-72 h-72 rounded-full pointer-events-none opacity-[0.06]"
        style={{ background: "#C1440E", filter: "blur(80px)" }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl"
      >   </motion.div>
        { }
        <motion.p
          variants={itemVariants}
          className="text-[#C1440E] text-xs tracking-[0.3em] uppercase mb-8 font-medium"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
        Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-[clamp(3.5rem,10vw,9rem)] leading-[0.92] font-bold text-[#1C1A17] mb-8"
          style={{ fontFamily: "'Fraunces', serif", fontOpticalSizing: "auto" }}
        >
          Yaseen
          <br />
          <span className="italic font-light" style={{ color: "#1C1A17" }}>
            Shaik
          </span>
        </motion.h1>

        {/* Role with blinking cursor */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-0 mb-12"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="text-[clamp(1rem,2.5vw,1.5rem)] text-[#1C1A17]/60 font-light tracking-wide">
            {displayRole}
          </span>
          <span
            className="blink inline-block w-[2px] h-[1.2em] bg-[#C1440E] ml-1"
            style={{ verticalAlign: "middle" }}
          />
        </motion.div>

        {/* Short tagline */}
<motion.div variants={itemVariants} className="flex items-center gap-4 mt-2">

  <p
    className="text-[#1C1A17]/50 text-sm tracking-widest uppercase font-light"
    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
  >
    Based in India · Open to work
  </p>

  {/* Resume Button */}
  <a
    href="/resume.pdf"   // 👉 put your resume file in public folder
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs uppercase tracking-widest border border-[#C1440E] px-4 py-2 text-[#C1440E] hover:bg-[#C1440E] hover:text-white transition"
  >
    Resume
  </a>

</motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-8 md:left-16 flex items-center gap-3"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <div className="flex flex-col gap-[3px]">
          <span className="block w-4 h-[1px] bg-[#1C1A17]/30" />
          <span className="block w-6 h-[1px] bg-[#1C1A17]/50" />
          <span className="block w-4 h-[1px] bg-[#1C1A17]/30" />
        </div>
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#1C1A17]/40">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
