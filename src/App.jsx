import { useEffect, useMemo, useState } from "react";

const navItems = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const skillCategories = [
  {
    label: "01 / Frontend",
    title: "User Interfaces",
    tags: ["React.js", "Next.js", "JavaScript", "HTML5", "Tailwind CSS", "Tkinter"],
  },
  {
    label: "02 / Backend",
    title: "Server & APIs",
    tags: ["Python", "Django", "Flask", "Node.js", "REST APIs", "JWT Auth"],
  },
  {
    label: "03 / Data & Tools",
    title: "Databases & DevOps",
    tags: ["MySQL", "Oracle", "MongoDB", "GitHub", "Postman", "Linux"],
  },
];

const experiences = [
  {
    date: "Mar 2025 - Present",
    location: "Rawalpindi, PK",
    role: "Jr. Full Stack Developer",
    company: "Lancers Pvt. Ltd.",
    current: true,
    points: [
      "Developed server-side logic and APIs for the Lost & Found mobile app, enabling secure user authentication, data submission, and item-tracking features.",
      "Built the app's product website and Staff App UI, ensuring responsiveness and full backend integration.",
      "Handled SQL database operations - optimization and troubleshooting - for efficient real-time data handling.",
      "Collaborated with designers, QA, and marketing to improve UX, testing, and app adoption.",
    ],
  },
  {
    date: "Dec 2024 - Feb 2025",
    location: "Rawalpindi, PK",
    role: "Backend Intern",
    company: "Lancers Pvt. Ltd.",
    current: false,
    points: [
      "Contributed to admin dashboard / CMS development, adding features to improve data management and usability.",
      "Created statistical views and charts providing real-time insights into user activity.",
    ],
  },
];

const projects = [
  {
    num: "01",
    title: "RoboCart | Autonomous Retail Assistant",
    desc: "An AI-powered autonomous shopping cart utilizing Computer Vision and sensor fusion. Developed a 'Follow-Me' system for hands-free navigation with real-time obstacle avoidance and a low-latency hardware-software bridge between Python and Arduino.",
    tech: ["Python", "OpenCV", "Arduino", "Sensor Fusion", "Control Engineering"],
    link: "https://www.linkedin.com/in/talhakhan-dev/details/projects/",
  },
  {
    num: "02",
    title: "Amanat | AI Lost & Found Ecosystem",
    desc: "A cross-platform recovery system featuring a Django/React admin dashboard and AI-driven matching algorithms. Developed secure QR-coded identification to reconnect owners with lost items while maintaining user privacy through encrypted digital linking.",
    tech: ["Django", "React.js", "AI Matching", "MySQL", "TailwindCSS"],
    link: "https://www.linkedin.com/in/talhakhan-dev/details/projects/",
  },
  {
    num: "03",
    title: "Smart Assistive Navigation Suite",
    desc: "A multi-modal wearable solution for the visually impaired. Integrated dual-layer hazard detection (head-level and ground-level) using haptic feedback and environmental sensing to detect water hazards and obstacles in real-time.",
    tech: ["Embedded Systems", "Haptic Programming", "C++", "Sensors"],
    link: "https://www.linkedin.com/in/talhakhan-dev/details/projects/",
  },
  {
    num: "04",
    title: "Strategic Digital Growth & SEO",
    desc: "Executed a multi-channel digital growth framework focusing on ASO, Technical SEO, and Meta Ads. Optimized conversion funnels and leveraged data analytics to reduce CAC and scale digital product visibility globally.",
    tech: ["ASO", "Meta Ads Manager", "SEO", "Google Search Console"],
    link: "https://www.linkedin.com/in/talhakhan-dev/details/projects/",
  },
  {
    num: "05",
    title: "Hand Gesture Recognition System",
    desc: "A computer vision-based accessibility tool designed to bridge the gap in digital interaction for differently-abled users. Achieved high-accuracy gesture translation using specialized Python-based image processing libraries.",
    tech: ["Python", "OpenCV", "MediaPipe", "Accessibility Tech"],
    link: "https://www.linkedin.com/in/talhakhan-dev/details/projects/",
  },
  {
    num: "06",
    title: "Laser Data Transmission System",
    desc: "Implemented a sustainable point-to-point wireless communication system using modulated laser beams. Optimized for energy efficiency by integrating solar cell receivers, demonstrating potential for remote environment connectivity.",
    tech: ["Laser Physics", "Microcontrollers", "Optical Components", "Hardware"],
    link: "https://www.linkedin.com/in/talhakhan-dev/details/projects/",
  }
];

const certs = [
  {
    icon: "🎓",
    iconClass: "ci-amber",
    title: "SQL for Data Science",
    issuer: "UC Davis - Coursera",
    href: "https://www.coursera.org/learn/sql-for-data-science",
  },
  {
    icon: "🤖",
    iconClass: "ci-green",
    title: "AI Essentials",
    issuer: "Google",
    href: "https://grow.google/certificates/ai-essentials/",
  },
  {
    icon: "⚙️",
    iconClass: "ci-purple",
    title: "Advanced Django & DRF Specialization",
    issuer: "Codio",
    href: "https://www.codio.com",
  },
  {
    icon: "📈",
    iconClass: "ci-amber",
    title: "SEO Specialization",
    issuer: "UC Davis - Coursera",
    href: "https://www.coursera.org/specializations/seo",
  },
  {
    icon: "🧠",
    iconClass: "ci-green",
    title: "Machine Learning",
    issuer: "Stanford University - Andrew Ng",
    href: "https://www.coursera.org/specializations/machine-learning-introduction",
  },
];

const contacts = [
  {
    icon: "✉️",
    label: "Email",
    value: "tlhmajid@gmail.com",
    href: "mailto:tlhmajid@gmail.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+92 330 5827874",
    href: "tel:+923305827874",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/talhakhan-dev",
    href: "https://linkedin.com/in/talhakhan-dev",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/talhakhan-dev",
    href: "https://github.com/being-talha",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Rawalpindi, Pakistan",
    href: "https://maps.google.com/?q=Rawalpindi,Pakistan",
  },
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    femail: "",
    fsubject: "",
    fmessage: "",
  });
  const [errors, setErrors] = useState({});

  const validators = useMemo(
    () => ({
      fname: (v) => v.trim().length > 0,
      lname: (v) => v.trim().length > 0,
      femail: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      fsubject: (v) => v.trim().length > 0,
      fmessage: (v) => v.trim().length > 0,
    }),
    []
  );

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setShowTop(y > 300);

      let current = "";
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && y >= section.offsetTop - 140) current = item.id;
      });
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    const nodes = document.querySelectorAll(".fi");
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const scrollToAnchor = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = {};
    let valid = true;

    Object.keys(validators).forEach((key) => {
      const ok = validators[key](values[key]);
      nextErrors[key] = !ok;
      if (!ok) valid = false;
    });

    setErrors(nextErrors);
    if (!valid) return;

    const subject = encodeURIComponent(values.fsubject.trim());
    const body = encodeURIComponent(
      `Name: ${values.fname.trim()} ${values.lname.trim()}\nEmail: ${values.femail.trim()}\n\n${values.fmessage.trim()}`
    );
    window.location.href = `mailto:tlhmajid@gmail.com?subject=${subject}&body=${body}`;

    setLoadingSubmit(true);
    setShowSuccess(true);

    window.setTimeout(() => {
      setValues({ fname: "", lname: "", femail: "", fsubject: "", fmessage: "" });
      setLoadingSubmit(false);
      setShowSuccess(false);
      setErrors({});
    }, 5000);
  };

  return (
    <>
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              setMobileOpen(false);
              scrollToAnchor(e, item.id);
            }}
          >
            {item.label}
          </a>
        ))}
      </div>

      <nav className={scrolled ? "scrolled" : ""}>
        <a className="nav-logo" href="#top" onClick={(e) => scrollToAnchor(e, "top")}>
          MTK<span>.</span>
        </a>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                onClick={(e) => scrollToAnchor(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <a className="nav-cta" href="mailto:tlhmajid@gmail.com">
            Hire me -&gt;
          </a>
          <button
            className={`hamburger ${mobileOpen ? "open" : ""}`}
            aria-label="Open menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className="hero" id="top">
        <div className="grid-bg"></div>
        <div className="hero-inner">
          <div>
            <div className="hero-tag">Available for opportunities</div>
            <h1>
              Muhammad
              <br />
              <span className="line2">Talha Khan</span>
            </h1>
            <p className="hero-subtitle">Full Stack Developer &amp; Problem Solver</p>
            <p className="hero-desc">
              Building fast, scalable web applications with a passion for clean architecture.
              Experienced in Python, Django, React.js, Node.js, and MySQL - shipping production
              software from Rawalpindi, Pakistan.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="#contact" onClick={(e) => scrollToAnchor(e, "contact")}>
                Get in touch -&gt;
              </a>
              <a className="btn-ghost" href="#projects" onClick={(e) => scrollToAnchor(e, "projects")}>
                View projects
              </a>
              <a
                className="btn-ghost"
                href="mailto:tlhmajid@gmail.com?subject=CV Request&body=Hi Talha, I'd love to receive your CV."
                title="Request CV via email"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="avatar">MTK</div>
            <h3>Muhammad Talha Khan</h3>
            <p className="hc-p">
              Jr. Full Stack Developer
              <br />
              Lancers Pvt. Ltd.
            </p>
            <div className="stat-row">
              <div className="stat">
                <span className="stat-num">1+</span>
                <span className="stat-label">Years exp.</span>
              </div>
              <div className="stat">
                <span className="stat-num">5+</span>
                <span className="stat-label">Certs</span>
              </div>
            </div>
            <div className="status-pill">Open to work</div>
          </div>
        </div>

        <a className="scroll-indicator" href="#skills" onClick={(e) => scrollToAnchor(e, "skills")}>
          Scroll
          <svg viewBox="0 0 24 24" strokeWidth="1.5">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </div>

      <hr className="divider" />

      <section id="skills">
        <div className="section-wrap">
          <p className="section-tag fi">What I work with</p>
          <h2 className="section-title fi">
            Technical <em>skills</em>
          </h2>
          <div className="skills-grid fi">
            {skillCategories.map((cat) => (
              <div className="skill-category" key={cat.label}>
                <p className="skill-cat-label">{cat.label}</p>
                <h3 className="skill-cat-title">{cat.title}</h3>
                <div className="skill-tags">
                  {cat.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section id="experience">
        <div className="section-wrap">
          <p className="section-tag fi">Where I've worked</p>
          <h2 className="section-title fi">
            Professional <em>experience</em>
          </h2>
          <div className="timeline">
            {experiences.map((exp) => (
              <div className="timeline-item fi" key={exp.role}>
                <div className="timeline-date">
                  <strong>{exp.date}</strong>
                  {exp.location}
                </div>
                <div className="timeline-line"></div>
                <div>
                  <p className="timeline-role">{exp.role}</p>
                  <p className="timeline-company">{exp.company}</p>
                  <span className={`tl-badge ${exp.current ? "badge-current" : "badge-past"}`}>
                    {exp.current ? "Current Role" : "Completed"}
                  </span>
                  <ul className="timeline-points">
                    {exp.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section id="projects">
        <div className="section-wrap">
          <p className="section-tag fi">What I've built</p>
          <h2 className="section-title fi">
            Featured <em>projects</em>
          </h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card fi" key={project.title}>
                <div className="project-num">{project.num}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span className="tech-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section id="certifications">
        <div className="section-wrap">
          <p className="section-tag fi">Credentials</p>
          <h2 className="section-title fi">Certifications</h2>
          <div className="certs-grid">
            {certs.map((cert) => (
              <a className="cert-card fi" href={cert.href} target="_blank" rel="noopener noreferrer" key={cert.title}>
                <div className={`cert-icon ${cert.iconClass}`}>{cert.icon}</div>
                <div>
                  <p className="cert-title">{cert.title}</p>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section id="education">
        <div className="section-wrap">
          <p className="section-tag fi">Academic background</p>
          <h2 className="section-title fi">Education</h2>
          <div className="edu-card fi">
            <div>
              <h3 className="edu-degree">
                Bachelor of Science
                <br />
                in Computer Engineering
              </h3>
              <p className="edu-uni">National University of Technology (NUTECH), Islamabad</p>
              <div className="skill-tags">
                <span className="tag">Software Engineering</span>
                <span className="tag">Operating Systems</span>
                <span className="tag">Control Engineering</span>
                <span className="tag">Image Processing</span>
                <span className="tag">Network Administration</span>
              </div>
            </div>
            <div>
              <p className="edu-date">Sep 2022 - Present</p>
              <p className="status-active">In Progress</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section id="contact">
        <div className="section-wrap">
          <div className="contact-grid">
            <div>
              <p className="section-tag fi">Let's connect</p>
              <h2 className="contact-headline fi">
                Got a project
                <br />
                in <em>mind?</em>
              </h2>
              <p className="contact-desc fi">
                I'm open to full-time roles, freelance projects, and interesting collaborations.
                Whether you need a robust API, a polished frontend, or a complete web app - let's
                build something great together.
              </p>
              <div className="contact-links fi">
                {contacts.map((contact) => (
                  <a
                    key={contact.label}
                    className="contact-link"
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <div className="cl-icon">{contact.icon}</div>
                    <div>
                      <span className="cl-label">{contact.label}</span>
                      {contact.value}
                    </div>
                  </a>
                ))}
              </div>
              <a className="btn-primary fi" href="mailto:tlhmajid@gmail.com">
                Send me an email -&gt;
              </a>
            </div>

            <div className="fi">
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fname">First name *</label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Ali"
                      autoComplete="given-name"
                      value={values.fname}
                      onChange={handleChange}
                      className={errors.fname ? "err" : ""}
                    />
                    <span className={`err-msg ${errors.fname ? "show" : ""}`}>First name required.</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="lname">Last name *</label>
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="Hassan"
                      autoComplete="family-name"
                      value={values.lname}
                      onChange={handleChange}
                      className={errors.lname ? "err" : ""}
                    />
                    <span className={`err-msg ${errors.lname ? "show" : ""}`}>Last name required.</span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="femail">Email address *</label>
                  <input
                    type="email"
                    id="femail"
                    name="femail"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={values.femail}
                    onChange={handleChange}
                    className={errors.femail ? "err" : ""}
                  />
                  <span className={`err-msg ${errors.femail ? "show" : ""}`}>Enter a valid email.</span>
                </div>

                <div className="form-group">
                  <label htmlFor="fsubject">Subject *</label>
                  <input
                    type="text"
                    id="fsubject"
                    name="fsubject"
                    placeholder="Project inquiry / Collaboration"
                    value={values.fsubject}
                    onChange={handleChange}
                    className={errors.fsubject ? "err" : ""}
                  />
                  <span className={`err-msg ${errors.fsubject ? "show" : ""}`}>Subject required.</span>
                </div>

                <div className="form-group">
                  <label htmlFor="fmessage">Message *</label>
                  <textarea
                    id="fmessage"
                    name="fmessage"
                    placeholder="Tell me about your project or opportunity..."
                    value={values.fmessage}
                    onChange={handleChange}
                    className={errors.fmessage ? "err" : ""}
                  ></textarea>
                  <span className={`err-msg ${errors.fmessage ? "show" : ""}`}>
                    Please write a message.
                  </span>
                </div>

                <button type="submit" className="btn-primary" disabled={loadingSubmit}>
                  {loadingSubmit ? "Opening email... ✓" : "Send message ->"}
                </button>
                <div className={`form-success ${showSuccess ? "show" : ""}`}>
                  ✓ Opening your email client - message is pre-filled!
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>
          © 2026 <span>Muhammad Talha Khan</span>. All rights reserved.
        </p>
        <div className="footer-social">
          <a href="mailto:tlhmajid@gmail.com" title="Email">
            ✉
          </a>
          <a href="https://linkedin.com/in/talhakhan-dev" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            in
          </a>
          <a
            href="https://github.com/being-talha"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            style={{ fontSize: "0.7rem" }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
          </a>
        </div>
      </footer>

      <a
        href="#top"
        className={`btt ${showTop ? "show" : ""}`}
        title="Back to top"
        onClick={(e) => scrollToAnchor(e, "top")}
      >
        <svg viewBox="0 0 24 24">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </a>
    </>
  );
}

export default App;
