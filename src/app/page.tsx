'use client';

import Image from "next/image";
import "../styles/globals.css";
import { useEffect, useState } from "react";

// Helper function to wrap letters in <span> for animation
const AnimatedText = ({ text }: { text: string }) => {
  return (
    <h1 className="animated-text">
      {text.split("").map((char, idx) => (
        <span key={idx}>{char === " " ? "\u00A0" : char}</span>
      ))}
    </h1>
  );
};

export default function HomePage() {
  const [showBioText, setShowBioText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowBioText(true), 300); // match animation length
    return () => clearTimeout(timeout);
  }, []);
  const skills = [
    "Python", "Java", "C", "C++", "JavaScript", "TypeScript", "HTML", "CSS", "Matlab", "Stata", "React",
    "Pandas", "NumPy", "PyTorch", "TensorFlow", "scikit-learn", "Flask", "Selenium", "Matplotlib",
    "Git", "Microsoft Suite", "Google Suite", "Docker", "ExpressJS"
  ];

  const projects = [
      {
    title: "Medical Product Information Puller & Name Generator",
    image: "/project1.jpg",
    description: "Built a full-stack Flask application that automatically collects medical product data from the web using Selenium, processes and summarizes it with Python and Pandas, and generates standardized product descriptions via the OpenAI API — including source references and highlighted screenshots. The app runs locally on St. Luke’s computers, saves finalized outputs to a shared drive, and uses parallel processing to efficiently generate descriptions while scraping.",
    skillsUsed: ["Python", "Flask", "Selenium", "OpenAI API", "Pandas"],
    github: "https://github.com/MatiasBronner/st-lukes-repo"
  },


   {
    title: "TikTok Speech Trend Analyzer",
    image: "/project6.jpg",
    description:
      "Developed a Python application that scrapes audio from the most recent videos of top TikTok creators, transcribes them using Whisper, and analyzes word usage compared to English language baselines. The system identifies unusual words, computes trends over time, and highlights shifts in speech patterns, providing insights into emerging TikTok language trends.",
    skillsUsed: ["Python", "Playwright", "TikTok API", "Whisper", "Pandas"],
    github: "https://github.com/MatiasBronner/trending_words"
  },
   {
    title: "Personal Website",
    image: "/project2.jpg",
    description:
      "Built a modern, responsive personal portfolio website using React and Next.js, featuring animated text effects, smooth scrolling navigation, and a clean, professional design. Organized content into sections for projects, skills, and experience, with reusable components and sleek CSS styling to enhance usability and aesthetics.",
    skillsUsed: ["React", "Next.js", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/yourusername/personal-website"
  }, 

    {
      title: "Go AI Agent",
      image: "/project5.jpg",
     description: (
        <>
          Co-developed an AI agent for the Brown Go AI Agent Competition (Fall 2024), which <strong>won first place</strong>. 
          Implemented a Monte Carlo Tree Search (MCTS) algorithm for move selection and integrated Iterative Deepening Search (IDS) to optimize endgame strategy, enabling the agent to make efficient and strategic decisions throughout the game.
        </>
      ),
      skillsUsed: ["Python", "PyTorch", "AI", "MCTS", "Iterative Deepening Search"],
      github: ""
    },
    {
      "title": "High-Performance File I/O",
      "image": "/project3.jpg",
      "description": "Implemented a software-based file I/O cache in C to optimize reading and writing operations. Reduced disk access frequency and achieved performance close to the standard library's buffered I/O while managing memory efficiently.",
      "skillsUsed": ["C", "Git", "Systems Programming", "Performance Optimization"],
      "github": ""
    }, 

    {
    title: "March Madness Predictor",
    image: "/project4.jpg",
    description: "A Python-based machine learning project that predicts NCAA March Madness game outcomes. Processes historical team stats from Excel, computes win/loss ratios and point differentials, and trains both neural network and logistic regression models to forecast game winners.",
    skillsUsed: ["Python", "Pandas", "NumPy", "scikit-learn", "TensorFlow/Keras"],
    github: ""
  },
  ];
  const experiences = [
  {
    role: "Full Stack Intern",
    organization: "St. Luke's, Boise",
    dates: "Summer 2024",
    description: "Developed the Medical Product Information Puller & Name Generator for St. Luke's supply chain, automating data extraction from PDFs and web sources, standardizing item names, and improving inventory tracking efficiency. Utilized Python, Flask, and the OpenAI API to streamline workflows and reduce manual processing time. See full detail of the project in Projects section.",
    image: "/experience1.jpg",
    link: "https://github.com/MatiasBronner/st-lukes-repo" // replace with actual link if needed
  },

  {
    role: "Teaching Assistant - Foundations of AI",
    organization: "Brown University",
    dates: "Sep 2025 - Present",
    description: "Assisted students with AI assignments, held office hours, and provided guidance on projects involving machine learning algorithms.",
    image: "/experience2.jpg",
    link: "https://browncsci410.github.io/f25-website/"
  },
  {
    role: "Treasurer",
    organization: "Fintech@Brown",
    dates: "Sep 2025 - Present",
    description: "Managed finances, budget planning, and transactions for the student organization. Ensured transparency and accurate records. Established partnerships with Fintech firms.",
    image: "/experience3.jpg",
    link: "https://www.instagram.com/fintech.at.brown"
  },
  {
    role: "Mentor",
    organization: "Hispanic Scholarship Fund",
    dates: "April 2024 - July 2025",
    description: "Guided a group of high school students through the college admissions process, providing personalized mentorship, application feedback, and strategy. Supported mentees in achieving admissions to top universities including Harvard, Yale, USC, and Amherst.",
    image: "/experience6.jpg", // make a new image for this role
    link: "https://www.hsf.net/youth-leadership-institute" // replace with the official organization or program page
  },
  {
    role: "Camp Counselor",
    organization: "Treasure Valley YMCA",
    dates: "Summers 2020-2024",
    description: "Supervised children, created and led activities that accommodated a wide range of abilities, and developed leadership and communication skills while fostering a safe, engaging, and supportive environment for all campers.",
    image: "/experience4.jpg",
    link: "https://ymcatvidaho.org/ymca-camp-horsethief-reservoir/y-camps/summer-camps/"
  }, 

  {
    role: "Drummer",
    organization: "Various Bands",
    dates: "2015-Present",
    description: "Performed live shows across venues, collaborated with other musicians, and developed rhythmic versatility and performance skills.",
    image: "/experience5.jpg",
    link: "https://youtu.be/vrAhRgB5y74?si=Ci-_p7fFx1YcaW1k&t=1543" // could be your personal page
  }
];


  return (
    <main>
      {/* PROFILE SECTION */}
      <section id="home" className="profile-section">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          className="profile-picture"
          width={250}
          height={250}
        />
        <div className="bio">
          <AnimatedText text="I’m Matias Bronner" />
          <p className={`bio-text ${showBioText ? "visible" : ""}`}>
            Computer Science & Economics student at Brown University, Teaching Assistant for Foundations of AI, former Full Stack intern, and treasurer for Fintech@Brown. 
            Outside of tech, I’m a dedicated drummer!
          </p>
        
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="projects-section">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-container">
          {projects.map((project, idx) => (
            <div key={idx} className="project-block">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>

                {/* Skills used */}
                <div className="project-skills">
                  {project.skillsUsed.map((skill, sIdx) => (
                    <div key={sIdx} className="project-skill">{skill}</div>
                  ))}
                </div>

                {/* Description */}
                <p>{project.description}</p>

                {/* GitHub link */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2>Skills</h2>

        <div className="skill-category languages">
          <h3>Coding Languages</h3>
          <div className="skills-container">
            {["Python", "Java", "C", "C++", "JavaScript", "TypeScript", "HTML", "Stata", "Matlab"].map((skill, i) => (
              <div key={i} className="skill-bubble">{skill}</div>
            ))}
          </div>
        </div>

        <div className="skill-category libraries">
          <h3>Libraries</h3>
          <div className="skills-container">
            {["Pandas", "NumPy", "Matplotlib", "PyTorch", "TensorFlow", "scikit-learn", "Selenium", "Playwright","nltk"].map((skill, i) => (
              <div key={i} className="skill-bubble">{skill}</div>
            ))}
          </div>
        </div>

        <div className="skill-category frameworks">
          <h3>Tools & Frameworks</h3>
          <div className="skills-container">
            {["Git", "Docker", "Flask", "React", "Next.js", "ExpressJS"].map((skill, i) => (
              <div key={i} className="skill-bubble">{skill}</div>
            ))}
          </div>
        </div>

        <div className="skill-category other">
          <h3>Other</h3>
          <div className="skills-container">
            {["Microsoft Excel", "Microsoft Word", "Microsoft Powerpoint", "Google Docs", "Google Slides", "Google Sheets"].map((skill, i) => (
              <div key={i} className="skill-bubble">{skill}</div>
            ))}
          </div>
        </div>
      </section>
      {/*EXPEREINCE SECTION */}
      <section id="experience" className="experiences-section">
        <h2 className="experiences-title">Experience</h2>
        <div className="experiences-container">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-card">
              <div className="experience-content">
                <h3>{exp.role}</h3>
                <h4>{exp.organization} &mdash; <em>{exp.dates}</em></h4>
                <p>{exp.description}</p>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-link"
                  >
                    Learn More
                  </a>
                )}
              </div>
              <Image
                src={exp.image}
                alt={exp.role}
                width={300}
                height={200}
                className="experience-image"
              />
            </div>
          ))}
        </div>
      </section>


      

    </main>
  );
}
