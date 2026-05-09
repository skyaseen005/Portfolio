import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Check, Copy, Phone } from "lucide-react";

const EMAIL = "yaseensk2005@gmail.com";
const PHONE = "+91 93918 30743";

const ContactSection = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-[#F5F2EC] px-6 md:px-16 lg:px-24 py-24 md:py-36 overflow-hidden"
    >
      {/* Background watermark */}
      <span
        className="absolute bottom-0 right-0 text-[200px] font-bold leading-none select-none pointer-events-none"
        style={{
          fontFamily: "'Fraunces', serif",
          color: "rgba(193,68,14,0.04)",
          letterSpacing: "-0.05em",
        }}
      >
        YS
      </span>

      <div className="max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-8 h-[1.5px] bg-[#C1440E]" />
          <p
            className="text-[11px] tracking-[0.28em] uppercase text-[#C1440E] font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Contact
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-light text-[#1C1A17] leading-[0.96] mb-14"
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
          }}
        >
          Let's build
          <br />
          <em className="italic text-[#C1440E] font-light">something.</em>
        </motion.h2>

        {/* Contact row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
          className="flex flex-wrap items-center gap-6 md:gap-10"
        >
          {/* Email copy button */}
          <button
            onClick={handleCopy}
            className="group flex items-center gap-3"
          >
            <span
              className="text-lg md:text-xl text-[#1C1A17] font-light tracking-wide border-b border-[#1C1A17]/20 pb-0.5 group-hover:border-[#C1440E] transition-colors duration-200"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              {EMAIL}
            </span>
            <span
              className={`flex items-center gap-1.5 text-[11px] tracking-[0.1em] px-3 py-1.5 rounded-full border transition-all duration-200 font-medium ${
                copied
                  ? "text-[#2D5A3D] border-[#2D5A3D]/30 bg-[#2D5A3D]/8"
                  : "text-[#1C1A17]/40 border-[#1C1A17]/15 group-hover:border-[#C1440E]/40 group-hover:text-[#C1440E]"
              }`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              {copied ? "Copied!" : "Copy"}
            </span>
          </button>

          <div className="h-6 w-[1px] bg-[#1C1A17]/15 hidden md:block" />

          {/* Socials + phone */}
          <div
            className="flex flex-col gap-2.5"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/skyaseen005"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#1C1A17]/50 hover:text-[#1C1A17] transition-colors duration-200 text-[13px]"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/yaseenshaik05/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#1C1A17]/50 hover:text-[#1C1A17] transition-colors duration-200 text-[13px]"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2 text-[#1C1A17]/50 text-[13px]">
              <Phone className="w-4 h-4" />
              {PHONE}
            </div>
          </div>
        </motion.div>

        {/* Toast */}
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.97 }}
              className="mt-8 inline-flex items-center gap-2 bg-[#2D5A3D] text-[#F5F0E8] px-5 py-2.5 rounded-full text-[13px] font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <Check className="w-3.5 h-3.5" />
              Email copied to clipboard
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactSection;
