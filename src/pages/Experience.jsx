import {
  BriefcaseMedical,
  CheckCircle2,
  MapPin,
} from "lucide-react";

function Experience() {

  return (
    <section
      id="experience"
      className="section experience-section"
    >

      <div className="section-heading">

        <div>

          <span className="section-number">
            02
          </span>

          <span className="section-label">
            EXPERIENCE
          </span>

          <h2>
            Pharmaceutical industry exposure.
          </h2>

        </div>


        <p>
          Practical learning through pharmaceutical
          internship experience.
        </p>

      </div>


      <article className="experience-card">

        <div className="experience-icon">

          <BriefcaseMedical size={27} />

        </div>


        <div className="experience-content">

          <div className="experience-header">

            <div>

              <span className="experience-type">
                PHARMACIST INTERN
              </span>

              <h3>
                Madhur Pharma & Research
                Laboratories (P) Ltd.
              </h3>

            </div>


            <span className="experience-date">
              May 2026 — Present
            </span>

          </div>


          <div className="experience-location">

            <MapPin size={14} />

            Bengaluru, Karnataka, India

            <span>•</span>

            On-site

          </div>


          <p className="experience-description">
            Pharmaceutical internship experience
            providing exposure to pharmaceutical
            products, laboratory activities,
            documentation and industry-oriented
            working practices.
          </p>


          <div className="experience-points">

            <div>

              <CheckCircle2 />

              <span>
                Exposure to pharmaceutical products
                and drug-related activities.
              </span>

            </div>


            <div>

              <CheckCircle2 />

              <span>
                Practical exposure to laboratory
                processes and safety practices.
              </span>

            </div>


            <div>

              <CheckCircle2 />

              <span>
                Understanding of drug-related
                documentation and records.
              </span>

            </div>


            <div>

              <CheckCircle2 />

              <span>
                Exposure to quality-focused
                pharmaceutical practices.
              </span>

            </div>

          </div>

        </div>

      </article>

    </section>
  );
}

export default Experience;