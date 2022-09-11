import React from "react";
import resume from "../../src/JatinDharaiya.pdf";
// import { UndrawArtLover } from "react-undraw-illustrations";
import Typed from "react-typed";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = ({ changeTheam, theam }) => {
  Aos.init();
  Aos.refresh();

  return (
    <>
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <label>
              <a className="text-black" href="tel:+918306667760">
                +91 83066 67760
              </a>
            </label>
            {/* <UndrawArtLover
              skinColor="#e2bd95"
              height="250px"
              hairColor="#222"
            /> */}

            <label>
              <a className="text-black" href="mailto:jatindharaiyami@gmail.com">
                jatindharaiyami@gmail.com
              </a>{" "}
            </label>
          </div>

          <div className="hb-lang" onClick={changeTheam}>
            <ul className="nav">
              <li className="active br-25">
                {theam ? (
                  <i className="fas fa-moon theam-icon"></i>
                ) : (
                  <i className="fas fa-sun theam-icon"></i>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div
                className="type-box"
                data-aos="fade-up"
                // className="aos-init aos-animate"
                // data-aos="fade-in"
              >
                <h6 data-aos="fade-up">Hello, My name is</h6>
                <h1 className="font-alt fs-70" data-aos="fade-up">
                  Jatin Dharaiya
                </h1>
                {/* <p className="lead">React Developer | Web Designer | Freelancer</p> */}
                <div>
                  <div className="lead fs-30 h-auto">
                    <Typed
                      data-aos="fade-up"
                      loop
                      strings={[
                        "Flutter Mobile App Developer",
                        "Freelancer",
                        "Website Developer",
                        "Android and IOS Developer",
                      ]}
                      typeSpeed={80}
                      backSpeed={80}
                      backDelay={4000}
                      startDelay={1000}
                      showCursor={false}
                      // cursorChar="|"
                    />
                  </div>
                </div>
                <p className="desc" data-aos="fade-up">
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites and applications, web
                  services and online stores.
                </p>
                <div className="" data-aos="fade-up">
                  <a className="px-btn px-btn-white" href={resume} download>
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hb-me"
          style={{
            backgroundImage:
              "url(https://prominentpixel.com/assets/images/shape/hire-big-data.svg)",
          }}
        ></div>
      </section>
    </>
  );
};

export default Home;
