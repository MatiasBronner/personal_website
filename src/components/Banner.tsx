'use client';

import "../styles/banner.css";

export default function Banner() {
  return (
    <header className="banner">
      <div className="banner-logo">
        Matias Bronner
      </div>
      <nav className="banner-nav">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
      </nav>
    </header>
  );
}
