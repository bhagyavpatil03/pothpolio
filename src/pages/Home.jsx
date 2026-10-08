import {
  CheckCircle2,
  ChevronDown,
  Download,
  FileText,
  FlaskConical,
  HeartPulse,
  Microscope,
  ShieldCheck,
} from "lucide-react";

import heroImage from "../assets/bg-image.jpeg";
import profileImage from "../assets/profile.png";
import { getResumeDownloadUrl } from "../utils/resume";

function Home() {

  const scrollToAbout = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const openResume = () => {
    window.open(
      getResumeDownloadUrl(),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="home"
      className="home-page"
    >

      {/* ==================================================
          HERO BANNER
          ================================================== */}

      <div className="hero-banner">

        <img
          src={heroImage}
          alt="Bhagya Patil - Pharmacist"
          className="hero-banner-image"
        />

        <div className="hero-banner-overlay" />


        <div className="hero-banner-content">

          <span className="hero-badge">
            B.PHARM GRADUATE • 2026
          </span>


          <h1>
            Dedicated to
            <span> better health</span>
            through pharmaceutical science.
          </h1>


          <p>
            Pharmaceutical graduate with a strong
            interest in Research & Development,
            laboratory operations, quality practices
            and drug documentation.
          </p>


          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={scrollToAbout}
            >
              Explore My Profile

              <ChevronDown size={17} />
            </button>


            <button
              className="secondary-button"
              onClick={openResume}
            >
              <Download size={17} />

              View Resume
            </button>

          </div>

        </div>


        {/* Medical floating icons */}

        <div className="hero-medical-icon icon-one">
          <FlaskConical size={20} />
        </div>

        <div className="hero-medical-icon icon-two">
          <Microscope size={20} />
        </div>

        <div className="hero-medical-icon icon-three">
          <HeartPulse size={20} />
        </div>

      </div>


      {/* ==================================================
          PROFILE INTRO
          ================================================== */}

      <div className="profile-intro">

        <div className="profile-image-container">

          <img
            src={profileImage}
            alt="Bhagya Patil"
            className="profile-image"
          />

          <span className="profile-badge">

            <CheckCircle2 size={13} />

            B.Pharm Graduate

          </span>

        </div>


        <div className="profile-content">

          <span className="section-label">
            PHARMACY • RESEARCH • SCIENCE
          </span>


          <h2>
            Bhagya Patil
          </h2>


          <h3>
            Aspiring Pharmaceutical R&D Professional
          </h3>


          <p>
            B.Pharm graduate from Hyderabad Karnataka
            Education Society (HKE'S), under Rajiv Gandhi
            University of Health Sciences (RGUHS),
            with pharmaceutical internship experience
            and a strong interest in pharmaceutical
            research, laboratory operations and
            quality-focused practices.
          </p>


          <div className="profile-tags">

            <span>
              <FlaskConical size={14} />
              Pharmaceutical R&D
            </span>

            <span>
              <Microscope size={14} />
              Laboratory
            </span>

            <span>
              <FileText size={14} />
              Drug Documentation
            </span>

            <span>
              <ShieldCheck size={14} />
              Quality Practices
            </span>

          </div>


          <div className="profile-buttons">

            <button
              className="primary-button"
              onClick={openResume}
            >
              <Download size={17} />

              View / Download Resume
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;