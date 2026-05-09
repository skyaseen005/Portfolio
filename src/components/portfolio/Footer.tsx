const Footer = () => {
  return (
    <footer className="px-8 md:px-16 lg:px-24 py-8 border-t border-[#1C1A17]/8">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <p
          className="text-xs text-[#1C1A17]/35 tracking-wide"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          © {new Date().getFullYear()} Alex Rivera — All rights reserved
        </p>
        <p
          className="text-xs text-[#1C1A17]/25 tracking-wide"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Designed & built with care
        </p>
      </div>
    </footer>
  );
};

export default Footer;
