import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const highlights = [
    { value: "Machine Learning", label: "Models & Experiments" },
    { value: "Android", label: "App Development" },
    { value: "Projects", label: "Hands-on Learning" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-[#F5F2EC] px-6 md:px-16 lg:px-24 py-24 md:py-36 overflow-hidden"
    >
      {/* Background watermark */}
      <span
        className="absolute top-10 right-0 text-[160px] font-bold leading-none select-none pointer-events-none"
        style={{
          fontFamily: "'Fraunces', serif",
          color: "rgba(193,68,14,0.04)",
          letterSpacing: "-0.05em",
        }}
      >
        ML
      </span>

      <div className="max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-14"
        >
          <div className="w-8 h-[1.5px] bg-[#C1440E]" />
          <p
            className="text-[11px] tracking-[0.28em] uppercase text-[#C1440E] font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            About
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.8fr] gap-16 md:gap-20 items-start">
          {/* Left — Portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Offset accent border */}
            <div className="absolute -top-3 -right-3 w-20 h-20 border-2 border-[#C1440E] rounded-sm z-0" />

            <div className="relative bg-[#1C1A17] rounded-sm overflow-hidden aspect-[3/4]">
              {/* Diagonal texture */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(193,68,14,0.04) 2px, rgba(193,68,14,0.04) 4px)",
                }}
              />
              {/* Initials monogram */}
              <div
                className="absolute inset-0 flex items-center justify-center text-[96px] font-light select-none"
                style={{
                  fontFamily: "'Fraunces', serif",
                  color: "rgba(245,242,236,0.1)",
                }}
              >
                YS
              </div>
              {/* Tag */}
              <div className="absolute bottom-5 left-5">
                <span
                  className="bg-[#C1440E] text-[#F5F2EC] text-[10px] tracking-[0.2em] uppercase px-2.5 py-1.5 font-medium"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Developer &amp; Builder
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <h2
              className="text-[clamp(2rem,3.8vw,3rem)] font-light text-[#1C1A17] leading-[1.12] mb-7 tracking-[-0.01em]"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              I build things that are
              <br />
              <em className="italic font-light text-[#C1440E]">both functional</em>
              <br />
              and{" "}
              <strong className="font-bold not-italic text-[#1C1A17]">
                beautiful.
              </strong>
            </h2>

            <div className="w-10 h-[1px] bg-[#1C1A17]/20 mb-7" />

            <div
              className="space-y-4 text-[#1C1A17]/60"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <p className="text-[15px] leading-[1.78] font-light">
                I'm a{" "}
                <span className="text-[#1C1A17] font-medium">Machine Learning</span>{" "}
                and{" "}
                <span className="text-[#1C1A17] font-medium">Android Developer</span>{" "}
                exploring how intelligent systems can enhance everyday applications.
                From training models to building mobile apps, I enjoy turning ideas
                into practical solutions.
              </p>
              <p className="text-[15px] leading-[1.78] font-light">
                Turning{" "}
                <span className="text-[#1C1A17] font-medium">ideas</span>,{" "}
                <span className="text-[#1C1A17] font-medium">complex problems</span>,
                and{" "}
                <span className="text-[#1C1A17] font-medium">
                  real-world challenges
                </span>{" "}
                into simple, intuitive, and functional products.
              </p>
            </div>

            {/* Highlights grid */}
            <div
              className="mt-10 grid grid-cols-3 border border-[#1C1A17]/10 rounded-md overflow-hidden"
              style={{ gap: "1px", background: "rgba(28,26,23,0.1)" }}
            >
              {highlights.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-[#F5F2EC] px-4 py-5 group hover:bg-[#1C1A17] transition-colors duration-200 cursor-default"
                >
                  <p
                    className="text-[17px] font-bold text-[#1C1A17] group-hover:text-[#F5F2EC] leading-tight mb-1.5 transition-colors duration-200"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {value}
                  </p>
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase text-[#1C1A17]/38 group-hover:text-[#F5F2EC]/40 font-medium transition-colors duration-200"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="mt-8 flex items-center gap-5">
              <button
                className="inline-flex items-center gap-2 bg-[#C1440E] text-[#F5F2EC] text-[12px] font-medium tracking-[0.14em] uppercase px-5 py-3 rounded-sm hover:bg-[#9e370b] transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                View my work →
              </button>
              <span
                className="text-[12px] tracking-[0.1em] uppercase text-[#1C1A17]/45 underline underline-offset-4 font-medium cursor-pointer hover:text-[#C1440E] transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Get in touch
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;