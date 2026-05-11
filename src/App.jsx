import { useEffect, useState } from "react";
import {
  FaReact,
  FaPython,
  FaGithub,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
  FaRobot,
  FaLeaf,
  FaChartLine,
  FaServer,
  FaCode,
  FaMicrochip,
  FaProjectDiagram,
  FaFlask,
  FaBrain
} from "react-icons/fa";
import { MdSensors, MdApi, MdScience } from "react-icons/md";

const assetPath = (path) => {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
};

const GROUP_EMAIL = "it22889188@my.sliit.lk,it22353566@my.sliit.lk,it22911162@my.sliit.lk";

const driveLinks = {
  charter: "https://drive.google.com/file/d/1jyD-CS1inE7PNkSjhpzCSNVgEV1Vmfpd/view?usp=sharing",
  proposal: "https://drive.google.com/drive/folders/1FYnEmM1fKne5sbM9NxUToD9JxPhFBREl?usp=sharing",
  finalReport: "https://drive.google.com/file/d/1H6jdLtifEINjGWzlSLZ83loyqBBYEMer/view?usp=sharing",

  checklist1: "https://drive.google.com/drive/folders/1AX7Hb3SqpqBo2F48dyhkYdMeWqNjJqtg?usp=drive_link",
  checklist2: "https://docs.google.com/presentation/d/1LlyYgdFcZejkoDXQgPWEIldJD3iY93sA/edit?usp=drive_link&ouid=106469666424516281803&rtpof=true&sd=true",
  researchPaper: "https://drive.google.com/file/d/1rxo9J-HnDMB_cCQNNrYu_UoVIHBSrm8Y/view?usp=drive_link",

  individualSachintha: "https://drive.google.com/file/d/1WMo1Vpg_DhIaCWtgBlC2aQN4vbVrNzW3/view?usp=sharing",
  individualYukthila: "https://drive.google.com/file/d/1kI-VCAaBiKaMa9ivKCDrLSa85X3fSSVD/view?usp=sharing",
  individualDhananjaya: "https://drive.google.com/file/d/1SnTyismzGQKSnRnpWBdm5BJ8WQRFN4h3/view?usp=sharing",

  proposalSlides: "https://drive.google.com/file/d/16lmUzHOUNFSML9sQ1Wy7xq4PtTETkRZE/view?usp=sharing",
  progressOneSlides: "https://docs.google.com/presentation/d/1BSDBGGsRf1SR62hiFEL9DUo-aGvcUGG_/edit?usp=sharing&ouid=106469666424516281803&rtpof=true&sd=true",
  progressTwoSlides: "https://docs.google.com/presentation/d/1TCT-WvdGiAsQdH8-p5LYalULD5i_kQEH/edit?usp=sharing&ouid=106469666424516281803&rtpof=true&sd=true",
  finalSlides: "https://docs.google.com/presentation/d/1LlyYgdFcZejkoDXQgPWEIldJD3iY93sA/edit?usp=drive_link&ouid=106469666424516281803&rtpof=true&sd=true"
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Domain", href: "#domain" },
  { label: "Milestones", href: "#milestones" },
  { label: "Documents", href: "#documents" },
  { label: "Presentations", href: "#presentations" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" }
];

const stats = [
  { value: "3", label: "Intelligence Modules" },
  { value: "1h / 6h / 24h", label: "Forecast Horizons" },
  { value: "96.59%", label: "Type Model Accuracy" },
  { value: "Mobile", label: "Farmer Access" }
];

const components = [
  {
    number: "01",
    title: "Environmental Intelligence",
    icon: <MdSensors />,
    text:
      "Monitors temperature, humidity and estimated CO₂ values, predicts future conditions, generates alerts, recommends corrective actions and suggests suitable mushroom varieties.",
    points: ["Real-time monitoring", "Forecasting", "Solution recommendation", "Variety matching"]
  },
  {
    number: "02",
    title: "Visual Growth Intelligence",
    icon: <FaLeaf />,
    text:
      "Uses mushroom images to classify mushroom type and growth stage, while bag-level records support next-stage prediction and cultivation planning.",
    points: ["Type classification", "Growth-stage prediction", "Bag history", "Next-stage estimation"]
  },
  {
    number: "03",
    title: "Disease Intelligence",
    icon: <FaFlask />,
    text:
      "Classifies healthy, black mold, green mold and other images, then provides treatment guidance, severity estimation and trend monitoring.",
    points: ["Disease detection", "Treatment guidance", "Severity scoring", "Trend monitoring"]
  }
];

const gaps = [
  {
    title: "Monitoring without decision support",
    text: "Many systems display raw sensor readings but do not clearly explain whether conditions are suitable or what action farmers should take."
  },
  {
    title: "Limited proactive forecasting",
    text: "Farmers usually react after conditions become unsuitable. A forecasting feature is needed for early warning and preventive action."
  },
  {
    title: "Separated visual analysis",
    text: "Mushroom type classification and growth-stage prediction are often treated separately, even though farmers need both outputs together."
  },
  {
    title: "Disease results without follow-up",
    text: "A disease label alone is not enough. Farmers also need treatment guidance, severity tracking and bag-level history."
  }
];

const objectives = [
  "Design and implement IoT-based environmental monitoring for mushroom cultivation.",
  "Predict future indoor temperature and humidity for short and medium planning horizons.",
  "Recommend corrective actions and suitable mushroom varieties based on environmental suitability.",
  "Classify mushroom type and growth stage using CNN-based image classification.",
  "Detect mushroom diseases and invalid images using transfer learning.",
  "Provide treatment guidance, severity estimation, history tracking and trend output through a mobile-friendly system."
];

const methodology = [
  {
    step: "01",
    title: "Data Collection",
    text: "Collect sensor readings, outdoor weather values, mushroom images, disease images, bag IDs and cultivation metadata."
  },
  {
    step: "02",
    title: "Preprocessing",
    text: "Clean environmental data, create lag features, resize images, normalize pixels and apply augmentation for robustness."
  },
  {
    step: "03",
    title: "Model Training",
    text: "Train Random Forest models for forecasting and MobileNetV2-based models for type, stage and disease classification."
  },
  {
    step: "04",
    title: "System Integration",
    text: "Connect Supabase, FastAPI backend, trained models, recommendation logic and React Native mobile screens."
  },
  {
    step: "05",
    title: "Testing",
    text: "Evaluate model results, API responses, mobile screens, graph outputs, history records and recommendation correctness."
  }
];

const technologies = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "React Native", icon: FaMobileAlt, color: "#61DAFB" },
  { name: "Expo", icon: FaMobileAlt, color: "#000020" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "FastAPI", icon: MdApi, color: "#009688" },
  { name: "Supabase", icon: FaDatabase, color: "#3ECF8E" },
  { name: "TensorFlow", icon: FaBrain, color: "#FF6F00" },
  { name: "Keras", icon: FaBrain, color: "#D00000" },
  { name: "MobileNetV2", icon: FaRobot, color: "#7C3AED" },
  { name: "Scikit-learn", icon: MdScience, color: "#F7931E" },
  { name: "Random Forest", icon: FaChartLine, color: "#16A34A" },
  { name: "Google Colab", icon: FaCode, color: "#F9AB00" },
  { name: "ESP32", icon: FaMicrochip, color: "#E11D48" },
  { name: "MQ-135", icon: MdSensors, color: "#0EA5E9" },
  { name: "Weather API", icon: FaCloud, color: "#38BDF8" },
  { name: "Swagger", icon: FaProjectDiagram, color: "#85EA2D" },
  { name: "Postman", icon: FaServer, color: "#FF6C37" },
  { name: "GitHub", icon: FaGithub, color: "#181717" }
];

const milestones = [
  {
    title: "Project Proposal",
    date: "August 2025",
    description: "Initial research idea, literature survey, research gap, problem statement, objectives and proposed methodology."
  },
  {
    title: "Progress Presentation 1",
    date: "January 2026",
    description: "Presentation of early progress, dataset preparation, architecture design and first implementation outcomes."
  },
  {
    title: "Progress Presentation 2",
    date: "March 2026",
    description: "Demonstration of model training, backend integration, mobile app screens and completed core modules."
  },
  {
    title: "Final Assessment",
    date: "May 2026",
    description: "Final system demonstration, report submission, testing results, research findings and discussion."
  },
  {
    title: "Viva",
    date: "May 2026",
    description: "Individual explanation of research contribution, implementation, model training, testing and final results."
  }
];

const documents = [
  { title: "Project Charter", type: "Document", status: "Completed", link: driveLinks.charter },
  { title: "Project Proposal", type: "Document", status: "Completed", link: driveLinks.proposal },
  { title: "Thesis Document", type: "Document", status: "Completed", link: driveLinks.finalReport },
  { title: "Checklist 1", type: "Document", status: "Completed", link: driveLinks.checklist1 },
  { title: "Checklist 2", type: "Document", status: "Completed", link: driveLinks.checklist2 },
  { title: "Research Paper", type: "Document", status: "Completed", link: driveLinks.researchPaper },
  { title: "Individual Report - IT22353566", type: "Document", status: "Completed", link: driveLinks.individualSachintha },
  { title: "Individual Report - IT22911162", type: "Document", status: "Completed", link: driveLinks.individualYukthila },
  { title: "Individual Report - IT22889188", type: "Document", status: "Completed", link: driveLinks.individualDhananjaya }
];

const presentations = [
  { title: "Proposal Presentation", status: "Completed", link: driveLinks.proposalSlides },
  { title: "Progress Presentation 1", status: "Completed", link: driveLinks.progressOneSlides },
  { title: "Progress Presentation 2", status: "Completed", link: driveLinks.progressTwoSlides },
  { title: "Final Presentation", status: "Completed", link: driveLinks.finalSlides }
];

const team = [
  {
    name: "S.M.A. Dhananjaya",
    id: "IT22889188",
    role: "Disease Detection, Treatment Recommendation, and Severity Monitoring",
    contribution:
      "Prepared disease image classes, trained the disease detection model, implemented invalid image handling, treatment recommendation logic, severity scoring, trend output and mobile diagnosis screens.",
    email: "it22889188@my.sliit.lk",
    image: "/images/team/dhananjaya.jpeg"
  },
  {
    name: "Sachintha H N",
    id: "IT22353566",
    role: "Environmental Monitoring, Forecasting, Solution Recommendation, and Variety Recommendation",
    contribution:
      "Implemented sensor data handling, cloud database connection, Random Forest forecasting, environmental alerts, solution recommendations, variety recommendation and mobile environmental screens.",
    email: "it22353566@my.sliit.lk",
    image: "/images/team/sachintha.jpeg"
  },
  {
    name: "Yukthila Y.C",
    id: "IT22911162",
    role: "Visual Growth Stage Prediction and Mushroom Type Classification",
    contribution:
      "Prepared image datasets, implemented preprocessing and augmentation, trained MobileNetV2-based classification models, developed type prediction, growth-stage prediction and bag-level history logic.",
    email: "it22911162@my.sliit.lk",
    image: "/images/team/yukthila.jpeg"
  }
];

const supervisors = [
  {
    name: "Mrs. Lokesha Weerasinghe",
    role: "Supervisor",
    designation: "Senior Lecturer",
    department: "Department of Information Technology",
    institution: "Sri Lanka Institute of Information Technology",
    email: "lokesha.w@sliit.lk",
    image: "/images/supervisors/supervisor.jpeg"
  },
  {
    name: "Ms. Malithi Nawarathne",
    role: "Co-Supervisor",
    designation: "Lecturer",
    department: "Department of Information Technology",
    institution: "Sri Lanka Institute of Information Technology",
    email: "malithi.n@sliit.lk",
    image: "/images/supervisors/co-supervisor.jpg"
  }
];

function isPlaceholderLink(link) {
  return !link || link.includes("PASTE_");
}

function useRevealAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      let currentHref = "#home";
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section && window.scrollY >= section.offsetTop - 145) {
          currentHref = item.href;
        }
      });

      setActiveSection(currentHref);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">M</span>
          <span>MushroomAI</span>
        </a>

        <button
          className={`menu-btn ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.label}
              onClick={closeMenu}
              className={activeSection === item.href ? "active-link" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="section-title reveal">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

function Home() {
  return (
    <section id="home" className="hero-section">
      <div
        className="hero-bg"
        style={{
          backgroundImage: `
            linear-gradient(100deg, rgba(7, 26, 47, 0.96) 0%, rgba(7, 26, 47, 0.78) 45%, rgba(31, 138, 91, 0.36) 100%),
            url("${assetPath("images/hero.png")}")
          `
        }}
      />
      <div className="hero-overlay" />

      <div className="floating-panel panel-one">
        <span>Temperature</span>
        <strong>32.4°C</strong>
        <small>Forecast ready</small>
      </div>

      <div className="floating-panel panel-two">
        <span>AI Status</span>
        <strong>Active</strong>
        <small>Type • Stage • Disease</small>
      </div>

      <div className="hero-content container">
        <div className="hero-text reveal">
          <span className="project-badge">Project ID: 25-26J-211</span>
          <h1>A Predictive Analytics Framework for Optimizing Mushroom Cultivation</h1>
          <p>
            A smart agriculture research system that combines environmental monitoring,
            machine learning forecasting, mushroom type and growth-stage prediction, disease
            detection, treatment recommendation and severity monitoring.
          </p>

          <div className="hero-actions">
            <a href="#domain" className="primary-btn">Explore Project</a>
            <a href="#documents" className="secondary-btn">View Documents</a>
          </div>
        </div>
      </div>

      <div className="stats-strip container">
        {stats.map((item) => (
          <div className="stat-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section className="section overview-section">
      <div className="container">
        <SectionTitle
          eyebrow="Project Overview"
          title="One integrated framework for smarter mushroom cultivation"
          subtitle="The system combines sensing, prediction, image analysis, recommendation and history tracking to support practical mushroom farm management."
        />

        <div className="component-grid">
          {components.map((item) => (
            <article className="component-card reveal" key={item.title}>
              <div className="card-topline">
                <span className="component-number">{item.number}</span>
                <span className="component-icon">{item.icon}</span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>

              <ul>
                {item.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Domain() {
  return (
    <section id="domain" className="section domain-section">
      <div className="container">
        <SectionTitle
          eyebrow="Domain"
          title="Project Scope"
          subtitle="Literature survey, research gap, research problem, objectives, methodology and technologies used."
        />

        <div className="scope-nav reveal">
          <a href="#literature">Literature Survey</a>
          <a href="#gap">Research Gap</a>
          <a href="#problem">Problem & Solution</a>
          <a href="#objectives">Objectives</a>
          <a href="#methodology">Methodology</a>
          <a href="#technologies">Technologies</a>
        </div>

        <div id="literature" className="content-card split-card reveal">
          <div>
            <span className="content-label">01</span>
            <h3>Literature Survey</h3>
          </div>

        <p>
          Mushroom cultivation is a highly environment-sensitive agricultural process.
          Temperature, relative humidity, ventilation, CO₂ concentration, hygiene, and
          stage-specific growing conditions directly influence mycelium colonization,
          primordia formation, fruitbody development, harvest readiness, and overall
          yield quality <sup>[1]-[3]</sup>. Traditional mushroom farms often depend on
          manual observation and periodic checking. This approach can be time-consuming
          and less reliable when farmers manage a large number of cultivation bags.
          IoT-based smart farming systems address this limitation by collecting
          continuous sensor readings and making real-time environmental monitoring
          possible <sup>[7], [8]</sup>.
          However, monitoring alone is not sufficient for effective decision-making.
          Farmers need early warnings before unsuitable conditions cause growth delays,
          contamination, or yield reduction. Machine learning forecasting methods can
          be used to predict near-future temperature and humidity changes, allowing
          farmers to take corrective actions earlier <sup>[9]</sup>.
        </p>

        <p>
          Image-based analysis has also become important in modern agriculture.
          Computer vision and convolutional neural networks can classify crop types,
          detect visual growth patterns, and identify disease symptoms from images
          <sup>[10]</sup>. Lightweight transfer learning architectures such as
          MobileNetV2 are especially useful for mobile-connected systems because they
          provide strong classification performance with lower computational cost
          <sup>[15]</sup>.
          Existing agricultural disease detection systems commonly focus on identifying
          disease labels from images, but farmers also need follow-up support such as
          treatment guidance, severity estimation, and history tracking <sup>[11], [12]</sup>.
          Therefore, this project combines environmental monitoring, forecasting,
          mushroom type classification, growth-stage prediction, disease detection,
          treatment recommendation, and severity monitoring into one integrated
          decision-support framework.
        </p>  
   
        </div>

        <div id="gap" className="content-card reveal">
          <span className="content-label">02</span>
          <h3>Research Gap</h3>

          <div className="gap-grid">
            {gaps.map((gap) => (
              <div className="gap-card" key={gap.title}>
                <h4>{gap.title}</h4>
                <p>{gap.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="problem" className="problem-solution-grid">
          <div className="problem-card reveal">
            <span className="content-label">03</span>
            <h3>Research Problem</h3>
            <p>
              Mushroom farmers face difficulty in continuously monitoring environmental conditions,
              identifying mushroom growth stages, classifying mushroom types and detecting diseases early.
              Manual monitoring is time-consuming and may cause delayed decisions, disease spread and yield loss.
            </p>
          </div>

          <div className="solution-card reveal">
            <span className="content-label">04</span>
            <h3>Proposed Solution</h3>
            <p>
              The proposed framework integrates IoT monitoring, environmental forecasting, visual growth
              prediction, mushroom type classification, disease detection, recommendation generation,
              history tracking, FastAPI backend processing and a farmer-friendly mobile application.
            </p>
          </div>
        </div>

        <div id="objectives" className="content-card reveal">
          <span className="content-label">05</span>
          <h3>Research Objectives</h3>

          <div className="objective-grid">
            {objectives.map((objective, index) => (
              <div className="objective-item" key={objective}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{objective}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="methodology" className="content-card reveal">
          <span className="content-label">06</span>
          <h3>Methodology</h3>

          <div className="methodology-grid">
            {methodology.map((item) => (
              <div className="method-card" key={item.step}>
                <span>{item.step}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <figure className="diagram-block">
            <img
              src={assetPath("images/architecture.png")}
              alt="High level architecture of predictive analytics framework"
            />
            <figcaption>High-Level Architecture of the Predictive Analytics Framework</figcaption>
          </figure>
        </div>

        <div id="technologies" className="content-card reveal">
          <span className="content-label">07</span>
          <h3>Technologies Used</h3>

          <div className="tech-grid">
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  className="tech-card"
                  key={tech.name}
                  style={{ "--tech-color": tech.color }}
                >
                  <div className="tech-icon-wrap">
                    <Icon />
                  </div>
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Milestones() {
  const [selected, setSelected] = useState(milestones[0].title);
  const current = milestones.find((item) => item.title === selected) || milestones[0];

  return (
    <section id="milestones" className="section milestones-section">
      <div className="container">
        <SectionTitle
          eyebrow="Milestones"
          title="Project timeline and assessments"
          subtitle="Select a project assessment to view its date and description."
        />

        <div className="milestone-selector reveal">
          <label htmlFor="milestoneSelect">Choose milestone</label>
          <select
            id="milestoneSelect"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {milestones.map((item) => <option key={item.title}>{item.title}</option>)}
          </select>
        </div>

        <div className="selected-milestone reveal">
          <div>
            <span>{current.date}</span>
            <h3>{current.title}</h3>
            <p>{current.description}</p>
          </div>
        </div>

        <div className="timeline">
          {milestones.map((item, index) => (
            <article className="timeline-item reveal" key={item.title}>
              <div className="timeline-marker">{index + 1}</div>
              <div className="timeline-card">
                <span>{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DownloadCard({ item, buttonText }) {
  const disabled = isPlaceholderLink(item.link);

  return (
    <article className={`download-card reveal ${disabled ? "disabled" : ""}`}>
      <div className="download-icon">{buttonText.includes("Slide") ? "SLD" : "PDF"}</div>
      <h3>{item.title}</h3>
      <p>{item.status}</p>

      {disabled ? (
        <span className="download-btn muted">Add Drive Link</span>
      ) : (
        <a href={item.link} target="_blank" rel="noreferrer" className="download-btn">
          {buttonText}
        </a>
      )}
    </article>
  );
}

function Downloads() {
  return (
    <>
      <section id="documents" className="section downloads-section">
        <div className="container">
          <SectionTitle
            eyebrow="Documents"
            title="Project Documents"
            subtitle="Public Google Drive view links are used for PDF files to keep the website lightweight."
          />

          <div className="download-grid">
            {documents.map((item) => (
              <DownloadCard item={item} buttonText="View Document" key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section id="presentations" className="section presentations-section">
        <div className="container">
          <SectionTitle
            eyebrow="Presentations"
            title="Slides of Past Presentations"
            subtitle="Proposal, progress and final presentation slides can be linked here."
          />

          <div className="download-grid">
            {presentations.map((item) => (
              <DownloadCard item={item} buttonText="View Slides" key={item.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionTitle
          eyebrow="About Us"
          title="Research Team"
          subtitle="Group members, student IDs, component responsibilities, supervisors and contact information."
        />

        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card reveal" key={member.id}>
              <img src={assetPath(member.image)} alt={member.name} />
              <h3>{member.name}</h3>
              <span>{member.id}</span>
              <h4>{member.role}</h4>
              <p>{member.contribution}</p>
              <a href={`mailto:${member.email}`}>Email</a>
            </article>
          ))}
        </div>

        <div className="supervisor-section reveal">
          <div className="supervisor-heading">
            
            <h3>Supervisors</h3>
            
          </div>

          <div className="supervisor-grid">
            {supervisors.map((person) => (
              <article className="supervisor-card" key={person.role}>
                <img src={assetPath(person.image)} alt={person.name} />
                <div>
                  <span className="supervisor-role">{person.role}</span>
                  <h3>{person.name}</h3>
                  <h4>{person.designation}</h4>
                  <p>{person.department}</p>
                  <p>{person.institution}</p>
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const subject = encodeURIComponent("Research Website Contact Form Message");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${GROUP_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionTitle
          eyebrow="Contact Us"
          title="Get in Touch"
          subtitle="For further information about the research project, contact the project team."
        />

        <div className="contact-wrapper">
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email address" required />
            <textarea name="message" placeholder="Message or Query" rows="6" required></textarea>
            <button type="submit">Open Email App</button>
          </form>

          <div className="contact-details reveal">
            <h3>Contact Details</h3>
            <p>
              <strong>Project:</strong> A Predictive Analytics Framework for Optimizing Mushroom Cultivation
            </p>
            <p>
              <strong>Project ID:</strong> 25-26J-211
            </p>
            <p>
              <strong>Institution:</strong> Sri Lanka Institute of Information Technology
            </p>
            <p>
              <strong>Emails:</strong><br />
              it22889188@my.sliit.lk<br />
              it22353566@my.sliit.lk<br />
              it22911162@my.sliit.lk
            </p>
            <p className="thanks">Thank you for visiting our research website.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <strong>MushroomAI</strong>
          <p>A Predictive Analytics Framework for Optimizing Mushroom Cultivation</p>
        </div>
        <p>© 2026 | Project ID: 25-26J-211</p>
      </div>
    </footer>
  );
}

export default function App() {
  useRevealAnimation();

  return (
    <>
      <Navbar />
      <Home />
      <Overview />
      <Domain />
      <Milestones />
      <Downloads />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
