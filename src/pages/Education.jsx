import {
  Award,
  GraduationCap,
} from "lucide-react";

function Education() {

  return (
    <section
      id="education"
      className="section education-section"
    >

      <div className="section-heading">

        <div>

          <span className="section-number">
            04
          </span>

          <span className="section-label">
            EDUCATION & CERTIFICATION
          </span>

          <h2>
            Academic foundation and credentials.
          </h2>

        </div>


        <p>
          Academic preparation supporting a career
          in the pharmaceutical industry.
        </p>

      </div>


      <div className="education-grid">


        {/* ==================================================
            B.PHARM
            ================================================== */}

        <article className="education-card">

          <div className="education-icon">

            <GraduationCap size={28} />

          </div>


          <div>

            <span className="education-period">
              2022 — 2026
            </span>


            <h3>
              Bachelor of Pharmacy
            </h3>


            <strong>
              Hyderabad Karnataka Education
              Society (HKE'S)
            </strong>


            <p>
              Under Rajiv Gandhi University of
              Health Sciences (RGUHS), Karnataka.
            </p>


            <span className="education-status">
              Graduated • 2026
            </span>

          </div>

        </article>


        {/* ==================================================
            MEDICAL CODING
            ================================================== */}

        <article className="education-card">

          <div className="education-icon certification">

            <Award size={26} />

          </div>


          <div>

            <span className="education-period">
              May 2026 — July 2026
            </span>


            <h3>
              Medical Coding Certification
            </h3>


            <strong>
              Corizo Edutech Private Limited
            </strong>


            <p>
              Professional certification covering
              medical coding and related healthcare
              terminology.
            </p>


            <span className="credential-id">
              Credential ID: CRZ158856
            </span>

          </div>

        </article>

      </div>

    </section>
  );
}

export default Education;