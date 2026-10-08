import {
  FlaskConical,
  HeartPulse,
  Microscope,
  Pill,
} from "lucide-react";

function About() {

  return (
    <section
      id="about"
      className="section about-section"
    >

      <div className="section-heading">

        <div>

          <span className="section-number">
            01
          </span>

          <span className="section-label">
            ABOUT ME
          </span>

          <h2>
            Pharmacy, science and continuous learning.
          </h2>

        </div>


        <p>
          A growing pharmaceutical professional
          focused on building practical knowledge
          and industry experience.
        </p>

      </div>


      <div className="about-grid">

        <div className="about-content">

          <p>
            I am a B.Pharm graduate with practical
            exposure to a pharmaceutical research
            and laboratory environment. I am
            interested in developing my career in
            Pharmaceutical Research & Development
            and other science-driven pharmaceutical
            roles.
          </p>


          <p>
            My interests include laboratory operations,
            drug-related documentation, quality
            practices, pharmaceutical products and
            research-oriented activities.
          </p>


          <p>
            I am looking for an opportunity where I
            can apply my academic knowledge, gain
            practical industry experience and
            contribute positively to a pharmaceutical
            organization.
          </p>


          <div className="about-values">

            <div className="about-value">

              <span>
                <Microscope size={20} />
              </span>

              <div>

                <strong>
                  Research Mindset
                </strong>

                <p>
                  Interested in pharmaceutical
                  research and scientific development.
                </p>

              </div>

            </div>


            <div className="about-value">

              <span>
                <FlaskConical size={20} />
              </span>

              <div>

                <strong>
                  Laboratory Focus
                </strong>

                <p>
                  Interested in practical laboratory
                  processes and safe working practices.
                </p>

              </div>

            </div>

          </div>

        </div>


        <div className="about-card">

          <div className="about-card-icon">
            <HeartPulse size={32} />
          </div>


          <span>
            PROFESSIONAL APPROACH
          </span>


          <h3>
            Learn.
            <br />
            Research.
            <br />
            Contribute.
          </h3>


          <p>
            Building a strong foundation for a
            meaningful career in the pharmaceutical
            industry.
          </p>


          <div className="about-card-pill">
            <Pill size={18} />
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;