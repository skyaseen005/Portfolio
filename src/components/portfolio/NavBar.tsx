import { useEffect, useState } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-12 py-5 flex items-center justify-between transition-all duration-500 ${
        scrolled ? "bg-[#F5F0E8]/90 backdrop-blur-sm border-b border-[#1C1A17]/8" : "bg-transparent"
      } ${visible ? "opacity-100" : "opacity-0"}`}
      style={{ fontFamily: "'Space Grotesk', sans-serif", transitionDelay: visible ? "0ms" : "0ms" }}
    >
      {/* Logo / Initials */}
      <button
        onClick={() => scrollTo("hero")}
        className="text-[#1C1A17] font-semibold text-sm tracking-[0.18em] uppercase hover:text-[#C1440E] transition-colors duration-200"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Y.S.
      </button>

      {/* Nav links */}
      <div className="flex items-center gap-8 md:gap-10">
        {["work", "about", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => scrollTo(section)}
            className="nav-link text-[#1C1A17]/70"
          >
            {section}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
