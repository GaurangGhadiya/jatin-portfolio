import React from "react";

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          <div className="resume-box" data-aos="fade-up">
            <div className="resume-row">
              <div className="row">
                <div className="col-md-4 col-xl-3">
                  <div className="rb-left">
                    <h6>Flutter Developer</h6>
                    <label>WeLab | Remote</label>
                    <p>May 2022 - Present</p>
                    <div className="rb-time">Full Time</div>
                  </div>
                </div>
                <div className="col-md-8 col-xl-9">
                  <div className="rb-right">
                    <h6>Siddhi Infosoft</h6>
                    <p>
                      Siddhi Infosoft was born out of the desire to bring the
                      finest and dedicated engineers together, bringing a global
                      digital revolution for business. Semicolon aims to develop
                      a specialized, unique, and technologically advanced web
                      development and mobile application for the world’s leading
                      brands, enterprises, startups, and businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-row">
              <div className="row">
                <div className="col-md-4 col-xl-3">
                  <div className="rb-left">
                    <h6>Flutter Developer</h6>
                    <label>WeLab | Remote</label>
                    <p>Jan 2021 - April 2022</p>
                    <div className="rb-time">Full Time</div>
                  </div>
                </div>
                <div className="col-md-8 col-xl-9">
                  <div className="rb-right">
                    <h6>Semicolon Soluction</h6>
                    <p>
                      Semicolon Soluction is a decade-long Mobile App development
                      company with a decorated history of holistic, unique, and
                      efficient software solutions that are customizable as per
                      the needs and requirements of his esteemed clients. Being
                      the best software development company for nearly a decade,
                      Semicolon team has taken “Dedication, Innovation, Ideation, and
                      Creation” very seriously.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="separated"></div>
          <div className="title">
            <h3>Education & Skills</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 m-15px-tb" data-aos="fade-right">
              <ul className="aducation-box">
                <li>
                  <span>2018-2021</span>
                  <h6>Bachelor of Engineering</h6>
                  <p>Mahavir Swami Collage of Engineering</p>
                </li>
                <li>
                  <span>2015-2018</span>
                  <h6>Diploma in Engineering</h6>
                  <p>K.J. Polytechnic</p>
                </li>
                {/* <li>
                  <span>2014-2015</span>
                  <h6>Senior Secondary Examination</h6>
                  <p>Shree Patanjali Vidhyalaya</p>
                </li> */}
              </ul>
            </div>
            <div className="col-lg-7 ml-auto m-15px-tb" data-aos="fade-right">
              <div className="skill-lt">
                <h6>Dart</h6>
                <span>92%</span>
                <div className="skill-bar">
                  <div
                    className="skill-bar-in w-92"
                    role="progressbar"
                    aria-valuenow="92"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>Flutter</h6>
                <span>88%</span>
                <div className="skill-bar">
                  <div
                    className="skill-bar-in w-88"
                    role="progressbar"
                    aria-valuenow="88"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>GetX</h6>
                <span>70%</span>
                <div className="skill-bar">
                  <div
                    className="skill-bar-in w-70"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              {/* <div className="skill-lt">
                <h6>CSS</h6>
                <span>88%</span>
                <div className="skill-bar">
                  <div
                    className="skill-bar-in w-88"
                    role="progressbar"
                    aria-valuenow="88"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>SCSS</h6>
                <span>83%</span>
                <div className="skill-bar">
                  <div
                    className="skill-bar-in w-83"
                    role="progressbar"
                    aria-valuenow="83"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
