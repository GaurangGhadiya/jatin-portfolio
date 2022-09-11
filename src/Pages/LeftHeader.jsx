import React from "react";

const LeftHeader = ({ changeTheam, theam }) => {
  return (
    <>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <a
              className="px-btn px-btn-white"
              rel="noopener noreferrer"
              href="https://forms.gle/vXoLuiP5a15aUmGq9"
              target="_blank"
            >
              Get In Touch
            </a>
          </div>
          <div className="hb-lang" onClick={changeTheam}>
            <ul className="nav">
              <li className="active shape br-25">
                {theam ? (
                  <i className="fas fa-moon theam-icon"></i>
                ) : (
                  <i className="fas fa-sun theam-icon"></i>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header
        className="header-left"
        id="navbar-collapse-toggle"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <a href="/">J</a>
            </div>
          </div>
          <ul className="nav nav-menu">
            <li>
              <a
                className="nav-link active"
                href="#home"
                data-toggle="tooltip"
                title="HOME"
              >
                <i className="fas fa-house-damage"></i>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#about"
                data-toggle="tooltip"
                title="ABOUT"
              >
                <i className="far fa-address-card"></i>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#resume"
                data-toggle="tooltip"
                title="RESUME"
              >
                <i className="far fa-file"></i>
              </a>
            </li>
            {/* <li>
              <a
                className="nav-link"
                href="#work"
                data-toggle="tooltip"
                title="WORK"
              >
                <i className="fas fa-briefcase"></i>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#blog"
                data-toggle="tooltip"
                title="BLOG"
              >
                <i className="fas fa-blog"></i>
              </a>
            </li> */}
            <li>
              <a
                className="nav-link"
                href="#contactus"
                data-toggle="tooltip"
                title="CONTACT"
              >
                <i className="fas fa-id-card-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default LeftHeader;
