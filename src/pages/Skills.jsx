import {
  Award,
  BookOpen,
  FileText,
  FlaskConical,
  Pill,
  ShieldCheck,
  Microscope,
} from "lucide-react";

const skills = [
  {
    title: "Pharmaceutical Knowledge",
    description:
      "Understanding of pharmaceutical products, dosage forms, drug-related concepts and pharmacy fundamentals.",
    icon: Pill,
  },

  {
    title: "Laboratory Skills",
    description:
      "Exposure to laboratory practices, sample handling, safety procedures and scientific working environments.",
    icon: FlaskConical,
  },

  {
    title: "Drug Documentation",
    description:
      "Understanding of pharmaceutical records, documentation processes and accurate information maintenance.",
    icon: FileText,
  },

  {
    title: "Quality Practices",
    description:
      "Awareness of quality-focused pharmaceutical practices, SOPs and QC/QA fundamentals.",
    icon: ShieldCheck,
  },

  {
    title: "Medical Coding",
    description:
      "Knowledge of medical coding fundamentals, medical terminology and pharmacy-related terminology.",
    icon: BookOpen,
  },

  {
    title: "Computer Applications",
    description:
      "Working proficiency with MS Office, Tally, email, internet applications and digital documentation.",
    icon: Award,
  },
];


function Skills() {

  return (
    <section
      id="skills"
      className="section skills-section"
    >

      <div className="section-heading">

        <div>

          <span className="section-number">
            03
          </span>

          <span className="section-label">
            SKILLS & EXPERTISE
          </span>

          <h2>
            Knowledge built for pharmaceutical work.
          </h2>

        </div>


        <p>
          A combination of pharmaceutical education,
          practical exposure and computer skills.
        </p>

      </div>


      <div className="skills-grid">

        {skills.map((skill) => {

          const Icon = skill.icon;

          return (

            <article
              className="skill-card"
              key={skill.title}
            >

              <div className="skill-icon">
                <Icon size={22} />
              </div>


              <h3>
                {skill.title}
              </h3>


              <p>
                {skill.description}
              </p>

            </article>

          );

        })}

      </div>


      {/* Computer skills */}

      <div className="computer-skills">

        <div>

          <span className="section-label">
            DIGITAL PROFICIENCY
          </span>

          <h3>
            Computer & Office Applications
          </h3>

        </div>


        <div className="computer-skill-list">

          <span>MS Word</span>

          <span>MS Excel</span>

          <span>MS PowerPoint</span>

          <span>Tally</span>

          <span>Email</span>

          <span>Internet Applications</span>

          <span>Digital Documentation</span>

        </div>

      </div>

    </section>
  );
}

export default Skills;