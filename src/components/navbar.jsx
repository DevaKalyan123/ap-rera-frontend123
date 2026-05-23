import "../styles/navbar.css";
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

  // MOBILE MENU
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // MOBILE DROPDOWN
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {

    if (openDropdown === menu) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(menu);
    }

  };

  const isScrutinyRoute =
    location.pathname.startsWith("/scrutiny") ||
    location.pathname.startsWith("/scrutinity");

  if (
    isScrutinyRoute ||
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/legal") ||
    location.pathname.startsWith("/hearings") ||
    location.pathname === "/legalcomplaintlist" ||
    location.pathname === "/admin-login" ||
    location.pathname === "/apreatapplication"
  ) {
    return null;
  }

  return (
    <>

      {/* ================= TOP HEADER ================= */}

      <div className="top-header">

        {/* MOBILE MENU BUTTON */}

        <div
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(true)}
        >
          ☰
        </div>

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

        <ul className={`nav-list ${mobileMenuOpen ? "mobile-open" : ""}`}>

          {/* MOBILE HEADER */}

          <div className="mobile-menu-header">

            <div className="mobile-menu-text">
              Menu
            </div>

            <div
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              ×
            </div>

          </div>

          {/* HOME */}

          <li>

            <div
              className="mobile-single-menu"
              onClick={() => {
                navigate("/");
                setMobileMenuOpen(false);
              }}
            >
              HOME
            </div>

          </li>

          {/* REGISTRATION */}

          <li className="dropdown">

            <div
              className="mobile-dropdown-title"
              onClick={() => toggleDropdown("registration")}
            >
              REGISTRATION

              <span className="mobile-arrow">
                {openDropdown === "registration" ? "⌃" : "⌄"}
              </span>

            </div>

            {openDropdown === "registration" && (

              <ul className="dropdown-menu mobile-dropdown-show">

                <li onClick={() => navigate("/promotregistration")}>
                  Promoter Registration
                </li>

                <li onClick={() => navigate("/guidelinesRegistration")}>
                  Guidelines for Registration
                </li>

                <li onClick={() => navigate("/project-registration")}>
                  Project Registration
                </li>

                <li onClick={() => navigate("/agent-registration")}>
                  Agent Registration
                </li>

                <li onClick={() => navigate("/complaintRegistration")}>
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

            )}

          </li>

          {/* REPORTS */}

          <li className="dropdown">

            <div
              className="mobile-dropdown-title"
              onClick={() => toggleDropdown("reports")}
            >
              REPORTS

              <span className="mobile-arrow">
                {openDropdown === "reports" ? "⌃" : "⌄"}
              </span>

            </div>

            {openDropdown === "reports" && (

              <ul className="dropdown-menu mobile-dropdown-show">

                <li onClick={() => navigate("/mis-reports")}>
                  MIS reports
                </li>

                <li>
                  GIS reports
                </li>

              </ul>

            )}

          </li>

          {/* REGISTERED */}

          <li className="dropdown">

            <div
              className="mobile-dropdown-title"
              onClick={() => toggleDropdown("registered")}
            >
              REGISTERED

              <span className="mobile-arrow">
                {openDropdown === "registered" ? "⌃" : "⌄"}
              </span>

            </div>

            {openDropdown === "registered" && (

              <ul className="dropdown-menu mobile-dropdown-show">

                <li onClick={() => navigate("/registered/projects")}>
                  Projects
                </li>

                <li onClick={() => navigate("/agents")}>
                  Agents
                </li>

              </ul>

            )}

          </li>

          {/* JUDGEMENTS */}

          <li className="dropdown">

            <div
              className="mobile-dropdown-title"
              onClick={() => toggleDropdown("judgements")}
            >
              JUDGEMENTS/ORDERS

              <span className="mobile-arrow">
                {openDropdown === "judgements" ? "⌃" : "⌄"}
              </span>

            </div>

            {openDropdown === "judgements" && (

              <ul className="dropdown-menu mobile-dropdown-show">

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

            )}

          </li>

          {/* NOTIFICATIONS */}

          <li className="dropdown">

            <div
              className="mobile-dropdown-title"
              onClick={() => toggleDropdown("notifications")}
            >
              NOTIFICATIONS

              <span className="mobile-arrow">
                {openDropdown === "notifications" ? "⌃" : "⌄"}
              </span>

            </div>

            {openDropdown === "notifications" && (

              <ul className="dropdown-menu mobile-dropdown-show">

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
                  >
                    Complaints Cause List Motion Hearing Before Adjudicating Officer
                  </a>
                </li>

                <li>
                  <a
                    href={OfficeorderPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Office Order
                  </a>
                </li>

              </ul>

            )}

          </li>

          {/* KNOWLEDGE HUB */}

          <li className="dropdown">

            <div
              className="mobile-dropdown-title"
              onClick={() => toggleDropdown("knowledge")}
            >
              KNOWLEDGE HUB

              <span className="mobile-arrow">
                {openDropdown === "knowledge" ? "⌃" : "⌄"}
              </span>

            </div>

            {openDropdown === "knowledge" && (

              <ul className="dropdown-menu mobile-dropdown-show">

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

                <li onClick={() => navigate("/JudgementHub")}>
                  Judgement
                </li>

                <li onClick={() => navigate("/vendordatabase")}>
                  VendorDatabase
                </li>

                <li onClick={() => navigate("/AdvertisementGuidelines")}>
                  Advertisement Guidelines
                </li>

                <li onClick={() => navigate("/audiovisualgallery")}>
                  AudioVisualGallery
                </li>

                <li onClick={() => navigate("/PressRelease")}>
                  Press Releases
                </li>

                <li onClick={() => navigate("/gradingofpromotors")}>
                  GradingOfPromotors
                </li>

                <li onClick={() => navigate("/GradingOfAgents")}>
                  Grading of Agents
                </li>

                <li onClick={() => navigate("/acf")}>
                  acf
                </li>

                <li onClick={() => navigate("/Testimonials")}>
                  Testimonials
                </li>

                <li onClick={() => window.open(appealPdf, "_blank")}>
                  Appeal to Buyer
                </li>

              </ul>

            )}

          </li>

          {/* COMPLAINT ORDERS */}

          <li className="dropdown">

            <div
              className="mobile-dropdown-title"
              onClick={() => toggleDropdown("complaint")}
            >
              COMPLAINT ORDERS

              <span className="mobile-arrow">
                {openDropdown === "complaint" ? "⌃" : "⌄"}
              </span>

            </div>

            {openDropdown === "complaint" && (

              <ul className="dropdown-menu mobile-dropdown-show">

                <li onClick={() => navigate("/complaintstatus")}>
                  FORM M
                </li>

                <li onClick={() => navigate("/complaintstatus")}>
                  FORM N
                </li>

              </ul>

            )}

          </li>

          {/* APREAT */}

          <li>

            <div
              className="mobile-single-menu"
              onClick={() =>
                window.open("/apreatapplication", "_blank")
              }
            >
              APREAT
            </div>

          </li>

          {/* ABOUT US */}

          <li className="dropdown">

            <div
              className="mobile-dropdown-title"
              onClick={() => toggleDropdown("about")}
            >
              ABOUT US

              <span className="mobile-arrow">
                {openDropdown === "about" ? "⌃" : "⌄"}
              </span>

            </div>

            {openDropdown === "about" && (

              <ul className="dropdown-menu mobile-dropdown-show">

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

                <li onClick={() => navigate("/contact-us/aprera")}>
                  Contact Us
                </li>

              </ul>

            )}

          </li>

          {/* DPMS */}

          <li>

            <div
              className="mobile-single-menu"
              onClick={() => navigate("/dbbase")}
            >
              DPMS
            </div>

          </li>

          {/* LOGIN */}

          <li className="dropdown">

            <div
              className="mobile-dropdown-title"
              onClick={() => toggleDropdown("login")}
            >
              LOGIN

              <span className="mobile-arrow">
                {openDropdown === "login" ? "⌃" : "⌄"}
              </span>

            </div>

            {openDropdown === "login" && (

              <ul className="dropdown-menu mobile-dropdown-show">

                <li onClick={() => navigate("/admin-login")}>
                  ADMIN LOGIN
                </li>

                <li onClick={() => navigate("/department")}>
                  DEPARTMENT LOGIN
                </li>

                <li onClick={() => navigate("/promoter")}>
                  PROMOTOR LOGIN
                </li>

              </ul>

            )}

          </li>

          {/* NOTICE BELL */}

          <li className="nav-bell">

            <span
              onClick={() => setShowNotice(!showNotice)}
            >
              🔔
            </span>

            {showNotice && (

              <div className="notice-dropdown">

                <div className="notice-scroll-box">

                  <ul className="notice-scroll-list">

                    <li>
                      <span className="new-inline">NEW</span>

                      <div className="notice-text">
                        One Time Opportunity with 50% Concession on Late Fee for Un-registered Projects.
                      </div>
                    </li>

                    <li>
                      <span className="new-inline">NEW</span>

                      <div className="notice-text">
                        Quarterly Updates: All the Promoters have to submit the Quarterly Update of January 2026 - March 2026 on or before 21/04/2026 without fail.
                      </div>
                    </li>

                    <li>
                      <span className="new-inline">NEW</span>

                      <div className="notice-text">
                        Promoters intending to obtain a project extension are advised to appear before the Authority.
                      </div>
                    </li>

                  </ul>

                </div>

              </div>

            )}

          </li>

        </ul>

      </nav>

    </>
  );
};

export default Navbar;