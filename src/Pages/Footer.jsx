import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 m-10px-tb">
              <div className="nav justify-content-center justify-content-md-start">
                {/* <a
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/gaurang.ghadiya.353/"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a> */}
                <a
                  rel="noopener noreferrer"
                  href="https://join.skype.com/invite/u35NzIH5lFQv"
                  target="_blank"
                >
                  <i className="fab fa-skype"></i>
                </a>
                {/* <a
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/gaurang_ghadiya_007/"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a> */}
                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/jatin-dharaiya-5777a4135/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send?phone=918306667760&text=Hello%20Jatin"
                  target="_blank"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 m-10px-tb text-center text-md-right">
              <p>© 2022 copyright all right reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
