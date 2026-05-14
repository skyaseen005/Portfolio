import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  tagline: string;
  tags: string[];
  image: string;
  url: string;
  year: string;
  span?: boolean;
}

const projects: Project[] = [
  {
    title: "Micro Plastic Detector",
    tagline: "A real-time microplastic detection system using computer vision and machine learning. It identifies and quantifies microplastics in water samples, providing crucial data for environmental monitoring and research.",
    tags: ["Python", "OpenCV", "TensorFlow", "CNN","Hugging Face"],
    image: "data:image/jpeg;base64,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",
    url: "https://yaseen113-microplastic.hf.space/",
    year: "2026",
    span: true,
  },
  {
    title: "Instant News ",
    tagline: "your pocket-sized newsroom delivering real-time updates at lightning speed.Stay informed, stay ahead with personalized, seamless, and instant access to the world’s latest stories.",
    tags: ["Android", "JetPack", "Firebase", "NewsAPI", "ML"],
    image: "data:image/jpeg;base64,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",
    url: "https://play.google.com/store/apps/details?id=com.instantnews.newapp",
    year: "2026",
  },
  {
    title: "NEXUS RAG",
    tagline: "An intelligent Retrieval-Augmented Generation (RAG) platform for analyzing PDFs,text, and web content.Delivers precise, context-aware answers using advanced embeddings and LLMs.",
    tags: ["Python", "LLM","Embeddings", "Pinecone"],
    image: "https://images.openai.com/static-rsc-4/j32PrQzMtTZ5M7O0IqKEQ4eX2v6b4h-nsg7bnzjrVJrt06-uFfsp1ce2j1n5klMFcXQs2XJay-6_bGZ5R3WvKI_IJj2eFhxr59REyNtOkGMUlKtLiAEsMmAyqmLln1BzbiU3DjkiTBNlAT09PyJXLhS-A-0del8xQp5uJohexiHDwzO_s4m8lk5mj8K1uJRF?purpose=fullsize",
    url: "https://nexus-rag-ten.vercel.app/",
    year: "2025",
  },
  {
    title: "Herbify",
    tagline: "A mobile app that uses AI to identify plants and provide care tips. Simply snap a photo of a plant, and Herbify will analyze it to give you detailed information on how to nurture it.",
    tags: ["Android", "AI", "JetPack Compose", "TensorFlow Lite", "Kotlin", "Firebase"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFtS_D9evxsvy8TvPvqp-tjOioJwt-38eW_Q&s",
    url: "https://drive.google.com/file/d/14ousHTOugFaEzPNISnpsVlxCXWaB_jby/view?usp=sharing",
    year: "2025",
  },
];

const ProjectCard = ({ project, delay }: { project: Project; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={`project-card group cursor-pointer ${
        project.span ? "md:col-span-2" : ""
      }`}
      onClick={() => window.open(project.url, "_blank")}
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-[4px] bg-[#1C1A17]/5 mb-5" style={{ aspectRatio: project.span ? "16/7" : "4/3" }}>
        <img
          src={project.image}
          alt={project.title}
          className="card-img w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="card-overlay absolute inset-0 bg-[#C1440E]/20 flex items-center justify-center">
          <div className="flex items-center gap-2 bg-[#F5F0E8] text-[#1C1A17] px-5 py-2.5 rounded-full text-sm font-medium"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            View Project
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
        {/* Year badge */}
        <span
          className="absolute top-4 right-4 text-[10px] tracking-[0.2em] uppercase text-[#F5F0E8]/80 bg-[#1C1A17]/40 px-2.5 py-1 rounded-full backdrop-blur-sm"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {project.year}
        </span>
      </div>

      {/* Info */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3
            className="text-xl font-medium text-[#1C1A17] mb-2 group-hover:text-[#C1440E] transition-colors duration-200"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            {project.title}
          </h3>
          <p
            className="text-sm text-[#1C1A17]/55 leading-relaxed mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {project.tagline}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.1em] uppercase text-[#1C1A17]/45 border border-[#1C1A17]/15 px-2.5 py-1 rounded-full"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <ArrowUpRight
          className="w-5 h-5 text-[#1C1A17]/30 group-hover:text-[#C1440E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0 mt-0.5"
        />
      </div>
    </motion.div>
  );
};

const WorkSection = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="work"
      ref={ref}
      className="px-8 md:px-16 lg:px-24 py-24 md:py-36"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs tracking-[0.3em] uppercase text-[#C1440E] mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-[clamp(2.2rem,4vw,3rem)] font-light text-[#1C1A17]"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Things I've built.
            </motion.h2>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm text-[#1C1A17]/40"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            3 of 10+ projects
          </motion.span>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-14">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
