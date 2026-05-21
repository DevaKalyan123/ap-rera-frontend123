import "../styles/Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

import OfficeorderPdf from "../../public/assets/pdfs/Officeorder.pdf";
import CAUSELISTPdf from "../../public/assets/pdfs/CAuselist.pdf";
import appealPdf from "../../public/assets/pdfs/AppealToBuyer.pdf";
import legalpdf from "../../public/assets/pdfs/LEGAL_APRERA_CORPORATE_PRESENTATION.pdf";
import Logo from "../../public/assets/images/logo.jpg";
import GoogleTranslate from "./GoogleTranslate";

const Navbar = ({ setHideNotice }) => {

  const navigate = useNavigate();
  const location = useLocation();

  const [showNotice, setShowNotice] = useState(false);

  const isScrutinyRoute =
    location.pathname.startsWith("/scrutiny") ||
    location.pathname.startsWith("/scrutinity");

  if (
    isScrutinyRoute ||
    location.pathname.startsWith("/admin") ||
    location.pathname === "/admin-login" ||
    location.pathname === "/apreatapplication"
  ) {
    return null;
  }

  return (
    <>

      {/* ================= TOP HEADER ================= */}

      <div className="top-header">

        <div className="header-center">

          <p className="header-title">
            <img
              src={Logo}
              alt="APRERA Logo"
              className="header-logo"
            />

            ANDHRA PRADESH REAL ESTATE REGULATORY AUTHORITY
          </p>

        </div>

        <div className="top-header-right">

          <GoogleTranslate />

          <button className="search-btn">
            SEARCH RERA PROJECTS
          </button>

        </div>

      </div>

      {/* ================= NAVBAR ================= */}

      <nav className="main-navbar">

        <ul className="nav-list">

          {/* HOME */}

          <li onClick={() => navigate("/")}>
            HOME
          </li>

          {/* REGISTRATION */}

          <li className="dropdown" tabIndex="0">

            REGISTRATION <span className="arrow"></span>

            <ul className="dropdown-menu">

              <li onClick={() => navigate("/promotregistration")}>
                Promoter Registration
              </li>

              <li onClick={() => navigate("/guidelinesRegistration")}>
                Guidelines for Registration
              </li>

              <li
                className="sub-dropdown"
                tabIndex="0"
                onClick={() => navigate("/project-registration")}
              >
                Project Registration
              </li>

              <li
                className="sub-dropdown"
                tabIndex="0"
                onClick={() => navigate("/agent-registration")}
              >
                Agent Registration
              </li>

              <li
                className="sub-dropdown"
                tabIndex="0"
                onClick={() => navigate("/complaintRegistration")}
              >
                Complaint Registration
              </li>

              <li onClick={() => navigate("/feecalculater")}>
                Fee Calculator
              </li>

              <li onClick={() => navigate("/usermanual")}>
                User Manuals
              </li>

              <li onClick={() => navigate("/formsdownload")}>
                Forms Download
              </li>

              <li onClick={() => navigate("/videoTutorial")}>
                Video Tutorials
              </li>

              <li onClick={() => navigate("/mobileapp")}>
                Mobile App
              </li>

            </ul>

          </li>

          {/* REPORTS */}

          <li className="dropdown" tabIndex="0">

            REPORTS <span className="arrow"></span>

            <ul className="dropdown-menu">

              <li onClick={() => navigate("/mis-reports")}>
                MIS reports
              </li>

              <li>
                GIS reports
              </li>

            </ul>

          </li>

          {/* REGISTERED */}

          <li className="dropdown" tabIndex="0">

            REGISTERED <span className="arrow"></span>

            <ul className="dropdown-menu">

              <li onClick={() => navigate("/registered/projects")}>
                Projects
              </li>

              <li onClick={() => navigate("/agents")}>
                Agents
              </li>

            </ul>

          </li>

          {/* JUDGEMENTS */}

          <li className="dropdown" tabIndex="0">

            JUDGEMENTS/ORDERS <span className="arrow"></span>

            <ul className="dropdown-menu">

              <li
                onClick={() =>
                  window.open(
                    window.location.origin + "/statistics",
                    "_blank"
                  )
                }
              >
                Statistics
              </li>

            </ul>

          </li>

          {/* NOTIFICATIONS */}

          <li className="dropdown" tabIndex="0">

            NOTIFICATIONS <span className="arrow"></span>

            <ul className="dropdown-menu">

              <li onClick={() => navigate("/goinotifications")}>
                GOI Notifications
              </li>

              <li onClick={() => navigate("/goapnotifications")}>
                GOAP Notifications
              </li>

              <li onClick={() => navigate("/authoritynotifications")}>
                Authority Notifications
              </li>

              <li onClick={() => navigate("/cidcandaprerajoint")}>
                CIDC and APRERA Joint Notifications
              </li>

              <li>
                <a
                  href={CAUSELISTPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "inherit"
                  }}
                >
                  Complaints: Cause List Motion Hearing
                </a>
              </li>

              <li>
                <a
                  href={OfficeorderPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "inherit"
                  }}
                >
                  Office Order
                </a>
              </li>

            </ul>

          </li>

          {/* KNOWLEDGE HUB */}

          <li className="dropdown" tabIndex="0">

            KNOWLEDGE HUB <span className="arrow"></span>

            <ul className="dropdown-menu">

              <li onClick={() => navigate("/evolutionofrera")}>
                Evolution of RERA
              </li>

              <li onClick={() => navigate("/race")}>
                RACE
              </li>

              <li onClick={() => navigate("/taskvstime")}>
                Task Vs Time
              </li>

              <li onClick={() => navigate("/ChronologyOfEvents")}>
                Chronology of Events
              </li>

              <li onClick={() => window.open(legalpdf, "_blank")}>
                APRERA Presentation
              </li>

            </ul>

          </li>

          {/* ABOUT US */}

          <li className="dropdown" tabIndex="0">

            ABOUT US <span className="arrow"></span>

            <ul className="dropdown-menu">

              <li onClick={() => navigate("/organogram")}>
                Organisation Structure
              </li>

              <li onClick={() => navigate("/ourservices")}>
                Our Services
              </li>

              <li onClick={() => navigate("/recruitment")}>
                Recruitment
              </li>

              <li onClick={() => navigate("/rti")}>
                RTI
              </li>

              <li onClick={() => navigate("/our-leadership")}>
                Our Leadership
              </li>

            </ul>

          </li>

          {/* LOGIN */}

          <li className="dropdown dropdown-right" tabIndex="0">

            LOGIN <span className="arrow"></span>

            <ul className="dropdown-menu">

              <li onClick={() => navigate("/admin-login")}>
                ADMIN LOGIN
              </li>

              <li onClick={() => navigate("/department")}>
                DEPARTMENT LOGIN
              </li>

              <li onClick={() => navigate("/promoter")}>
                PROMOTER LOGIN
              </li>

            </ul>

          </li>

        </ul>

      </nav>

    </>
  );
};

export default Navbar;