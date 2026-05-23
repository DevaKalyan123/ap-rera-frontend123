import "../styles/navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

import OfficeorderPdf from "../../public/assets/pdfs/Officeorder.pdf";
import CAUSELISTPdf from "../../public/assets/pdfs/CAuselist.pdf";
import legalpdf from "../../public/assets/pdfs/LEGAL_APRERA_CORPORATE_PRESENTATION.pdf";
import Logo from "../../public/assets/images/logo.jpg";
import GoogleTranslate from "./GoogleTranslate";

const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  // MOBILE MENU
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // DROPDOWN
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

            <span className="mobile-menu-text">
              Menu
            </span>

            <span
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              ✕
            </span>

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
              Home
            </div>

          </li>

          {/* REGISTRATION */}

          <li className="dropdown">

            <div
              className="mobile-dropdown-title"
              onClick={() => toggleDropdown("registration")}
            >
              Registration
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
              Reports
              <span className="mobile-arrow">
                {openDropdown === "reports" ? "⌃" : "⌄"}
              </span>
            </div>

            {openDropdown === "reports" && (

              <ul className="dropdown-menu mobile-dropdown-show">

                <li onClick={() => navigate("/mis-reports")}>
                  MIS Reports
                </li>

                <li>
                  GIS Reports
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
              Registered
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

          {/* NOTIFICATIONS */}

          <li className="dropdown">

            <div
              className="mobile-dropdown-title"
              onClick={() => toggleDropdown("notifications")}
            >
              Notifications
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
                    Complaints Cause List Motion Hearing
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

          {/* ABOUT US */}

          <li className="dropdown">

            <div
              className="mobile-dropdown-title"
              onClick={() => toggleDropdown("about")}
            >
              About Us
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

              </ul>

            )}

          </li>

          {/* LOGIN */}

          <li className="dropdown">

            <div
              className="mobile-dropdown-title"
              onClick={() => toggleDropdown("login")}
            >
              Login
              <span className="mobile-arrow">
                {openDropdown === "login" ? "⌃" : "⌄"}
              </span>
            </div>

            {openDropdown === "login" && (

              <ul className="dropdown-menu mobile-dropdown-show">

                <li onClick={() => navigate("/admin-login")}>
                  Admin Login
                </li>

                <li onClick={() => navigate("/department")}>
                  Department Login
                </li>

                <li onClick={() => navigate("/promoter")}>
                  Promoter Login
                </li>

              </ul>

            )}

          </li>

        </ul>

      </nav>

    </>
  );
};

export default Navbar;