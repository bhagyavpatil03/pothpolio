import {
  Download,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FaLinkedinIn } from "react-icons/fa";
import { getResumeDownloadUrl } from "../utils/resume";


const LINKEDIN_URL =
  import.meta.env.VITE_LINKEDIN_URL ||
  "https://www.linkedin.com/in/bhagya-patil-150138409/";


function Contact() {

  const openResume = () => {
    window.open(
      getResumeDownloadUrl(),
      "_blank",
      "noopener,noreferrer"
    );
  };


  return (
    <section
      id="contact"
      className="section contact-section"
    >

      {/* ==================================================
          SECTION HEADING
          ================================================== */}

      <div className="section-heading">

        <div>

          <span className="section-number">
            05
          </span>

          <span className="section-label">
            CONTACT
          </span>

          <h2>
            Let's connect.
          </h2>

        </div>


        <p>
          Open to pharmaceutical opportunities,
          R&D roles, laboratory positions and
          quality-focused roles.
        </p>

      </div>


      {/* ==================================================
          CONTACT LAYOUT
          ================================================== */}

      <div className="contact-layout">


        {/* ==================================================
            CONTACT MESSAGE
            ================================================== */}

        <div className="contact-message">

          <span className="contact-eyebrow">
            OPEN TO OPPORTUNITIES
          </span>


          <h3>
            Let's build a healthier future
            through science.
          </h3>


          <p>
            I am interested in opportunities where
            I can apply my pharmaceutical education,
            develop practical industry skills and
            contribute to research and quality-focused
            pharmaceutical work.
          </p>


          {/* LOCATION */}

          <div className="contact-location">

            <MapPin size={17} />

            <span>
              Kalaburagi, Karnataka, India
            </span>

          </div>

        </div>


        {/* ==================================================
            CONTACT CARD
            ================================================== */}

        <div className="contact-card">


          {/* ==================================================
              EMAIL
              ================================================== */}

          <a
            href="mailto:bhagyavpatil03@gmail.com"
            className="contact-item"
          >

            <span className="contact-item-icon">

              <Mail size={18} />

            </span>


            <span>

              <small>
                EMAIL
              </small>

              <strong>
                bhagyavpatil03@gmail.com
              </strong>

            </span>

          </a>


          {/* ==================================================
              PHONE
              ================================================== */}

          <a
            href="tel:+917411182070"
            className="contact-item"
          >

            <span className="contact-item-icon">

              <Phone size={18} />

            </span>


            <span>

              <small>
                PHONE
              </small>

              <strong>
                +91 7411182070
              </strong>

            </span>

          </a>


          {/* ==================================================
              LINKEDIN
              ================================================== */}

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >

            <span className="contact-item-icon">

              <FaLinkedinIn size={18} />

            </span>


            <span>

              <small>
                LINKEDIN
              </small>

              <strong>
                Bhagya Patil
              </strong>

            </span>

          </a>


          {/* ==================================================
              RESUME
              ================================================== */}

          <button
            type="button"
            className="contact-item contact-resume"
            onClick={openResume}
          >

            <span className="contact-item-icon">

              <Download size={18} />

            </span>


            <span>

              <small>
                RESUME
              </small>

              <strong>
                Download Resume
              </strong>

            </span>

          </button>


        </div>

      </div>

    </section>
  );
}


export default Contact;