import "../styles/navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

import OfficeorderPdf from "../../public/assets/pdfs/Officeorder.pdf";
import CAUSELISTPdf from "../../public/assets/pdfs/CAuselist.pdf";
import appealPdf from "../../public/assets/pdfs/AppealToBuyer.pdf";
import legalpdf from "../../public/assets/pdfs/LEGAL_APRERA_CORPORATE_PRESENTATION.pdf";
import Logo from "../../public/assets/images/logo.jpg";
import GoogleTranslate from "./GoogleTranslate";

const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [showNotice, setShowNotice] = useState(false);

  // MOBILE MENU
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // MOBILE DROPDOWN
  const [openDropdown, setOpenDropdown] = useState(null);

  // CLOSE MENU
  const closeMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  // TOGGLE DROPDOWN
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
{/* ================= TOP HEADER ================= */}

<div className="top-header">

  {/* FIRST ROW */}

  <div className="top-header-first-row">

    {/* LEFT SIDE */}

    <div className="header-center">

      <img
        src={Logo}
        alt="APRERA Logo"
        className="header-logo"
      />

      <p className="header-title">
        ANDHRA PRADESH REAL ESTATE
        REGULATORY AUTHORITY
      </p>

    </div>

    {/* RIGHT SIDE */}

    <div className="top-header-right">

      <GoogleTranslate />

      <button className="search-btn">
        🔍
      </button>

    </div>

  </div>

  {/* SECOND ROW */}

  <div className="mobile-menu-row">

    <div
      className="mobile-menu-btn"
      onClick={() => setMobileMenuOpen(true)}
    >
      ☰
    </div>

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
              onClick={closeMenu}
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
                closeMenu();
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

                <li onClick={() => {
                  navigate("/promotregistration");
                  closeMenu();
                }}>
                  Promoter Registration
                </li>

                <li onClick={() => {
                  navigate("/guidelinesRegistration");
                  closeMenu();
                }}>
                  Guidelines for Registration
                </li>

                <li onClick={() => {
                  navigate("/project-registration");
                  closeMenu();
                }}>
                  Project Registration
                </li>

                <li onClick={() => {
                  navigate("/agent-registration");
                  closeMenu();
                }}>
                  Agent Registration
                </li>

                <li onClick={() => {
                  navigate("/complaintRegistration");
                  closeMenu();
                }}>
                  Complaint Registration
                </li>

                <li onClick={() => {
                  navigate("/feecalculater");
                  closeMenu();
                }}>
                  Fee Calculator
                </li>

                <li onClick={() => {
                  navigate("/usermanual");
                  closeMenu();
                }}>
                  User Manuals
                </li>

                <li onClick={() => {
                  navigate("/formsdownload");
                  closeMenu();
                }}>
                  Forms Download
                </li>

                <li onClick={() => {
                  navigate("/videoTutorial");
                  closeMenu();
                }}>
                  Video Tutorials
                </li>

                <li onClick={() => {
                  navigate("/mobileapp");
                  closeMenu();
                }}>
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

                <li onClick={() => {
                  navigate("/mis-reports");
                  closeMenu();
                }}>
                  MIS reports
                </li>

                <li onClick={closeMenu}>
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

                <li onClick={() => {
                  navigate("/registered/projects");
                  closeMenu();
                }}>
                  Projects
                </li>

                <li onClick={() => {
                  navigate("/agents");
                  closeMenu();
                }}>
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
                  onClick={() => {
                    window.open(
                      window.location.origin + "/statistics",
                      "_blank"
                    );
                    closeMenu();
                  }}
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

                <li onClick={() => {
                  navigate("/goinotifications");
                  closeMenu();
                }}>
                  GOI Notifications
                </li>

                <li onClick={() => {
                  navigate("/goapnotifications");
                  closeMenu();
                }}>
                  GOAP Notifications
                </li>

                <li onClick={() => {
                  navigate("/authoritynotifications");
                  closeMenu();
                }}>
                  Authority Notifications
                </li>

                <li onClick={() => {
                  navigate("/cidcandaprerajoint");
                  closeMenu();
                }}>
                  CIDC and APRERA Joint Notifications
                </li>

                <li>
                  <a
                    href={CAUSELISTPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    Complaints Cause List
                  </a>
                </li>

                <li>
                  <a
                    href={OfficeorderPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
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

                <li onClick={() => {
                  navigate("/evolutionofrera");
                  closeMenu();
                }}>
                  Evolution of RERA
                </li>

                <li onClick={() => {
                  navigate("/race");
                  closeMenu();
                }}>
                  RACE
                </li>

                <li onClick={() => {
                  navigate("/taskvstime");
                  closeMenu();
                }}>
                  Task Vs Time
                </li>

                <li onClick={() => {
                  navigate("/ChronologyOfEvents");
                  closeMenu();
                }}>
                  Chronology of Events
                </li>

                <li onClick={() => {
                  window.open(legalpdf, "_blank");
                  closeMenu();
                }}>
                  APRERA Presentation
                </li>

                <li onClick={() => {
                  navigate("/JudgementHub");
                  closeMenu();
                }}>
                  Judgement
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

                <li onClick={() => {
                  navigate("/complaintstatus");
                  closeMenu();
                }}>
                  FORM M
                </li>

                <li onClick={() => {
                  navigate("/complaintstatus");
                  closeMenu();
                }}>
                  FORM N
                </li>

              </ul>

            )}

          </li>

          {/* APREAT */}

          <li>

            <div
              className="mobile-single-menu"
              onClick={() => {
                window.open("/apreatapplication", "_blank");
                closeMenu();
              }}
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

                <li onClick={() => {
                  navigate("/organogram");
                  closeMenu();
                }}>
                  Organisation Structure
                </li>

                <li onClick={() => {
                  navigate("/ourservices");
                  closeMenu();
                }}>
                  Our Services
                </li>

                <li onClick={() => {
                  navigate("/recruitment");
                  closeMenu();
                }}>
                  Recruitment
                </li>

                <li onClick={() => {
                  navigate("/rti");
                  closeMenu();
                }}>
                  RTI
                </li>

                <li onClick={() => {
                  navigate("/our-leadership");
                  closeMenu();
                }}>
                  Our Leadership
                </li>

              </ul>

            )}

          </li>

          {/* DPMS */}

          <li>

            <div
              className="mobile-single-menu"
              onClick={() => {
                navigate("/dbbase");
                closeMenu();
              }}
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

                <li onClick={() => {
                  navigate("/admin-login");
                  closeMenu();
                }}>
                  ADMIN LOGIN
                </li>

                <li onClick={() => {
                  navigate("/department");
                  closeMenu();
                }}>
                  DEPARTMENT LOGIN
                </li>

                <li onClick={() => {
                  navigate("/promoter");
                  closeMenu();
                }}>
                  PROMOTOR LOGIN
                </li>

              </ul>
              

            )}

          </li>
{/* NOTICE BELL */}

<li className="nav-bell">

  <span
    onClick={() => setShowNotice(!showNotice)}
    style={{
      fontSize: "20px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "18px 22px"
    }}
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
              Quarterly Updates: All the Promoters have to submit the Quarterly Update.
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