import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">

        {/* Logo */}
        <a href="#hero" className="logo">
          Divesh Kuthe
        </a>

        {/* Desktop Nav */}
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a
                  href={link}
                  target={name === "Resume" ? "_blank" : "_self"}
                  rel={name === "Resume" ? "noopener noreferrer" : undefined}
                >
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
  <div className="nav-buttons">
  <div className="flex items-center gap-3">
  {/* Resume */}
  <a
    href="https://drive.google.com/file/d/1QyeSjJAkFItElMgG28o9Cmh5ghjoiXKW/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex md:hidden items-center justify-center relative text-white"
  >
    <span>Resume</span>
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
  </a>

  {/* Contact */}
  <a href="#contact" className="contact-btn group">
    <div className="inner">
      <span>Contact Me</span>
    </div>
  </a>
</div>
</div>


      </div>
    </header>
  );
};

export default NavBar;