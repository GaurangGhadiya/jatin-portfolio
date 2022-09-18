import React from "react";
import profile from "../../src/Profile.jpeg";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

const About = () => {
  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 5000,
  //   initialSlide: 0,
  //   autoplay: true,
  //   slidesToShow: 2,
  //   arrows: false,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <>
      <section id="about" className="section dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-lg-4" data-aos="fade-right">
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src={profile} title="" alt="" />
                  </div>
                  <div className="nav social-icons justify-content-center">
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
                <div className="info">
                  <p>Flutter Developer</p>
                  <h3>Jatin Dharaiya</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-7 ml-auto" data-aos="fade-right">
              <div className="about-info">
                <div className="title">
                  <h3>Me, Myself and I</h3>
                </div>
                <div className="about-text ">
                  <p>
                    I'm a Freelancer Front-end Developer with more then 2 years
                    of experience. I'm from India. I code and create web
                    elements for amazing people around the world. I like work
                    with new people. New people new Experiences.
                  </p>
                  <p>
                    I don’t like to define myself by the work I’ve done. I
                    define myself by the work I want to do. Skills can be
                    taught, personality is inherent. I prefer to keep learning,
                    continue challenging myself, and do interesting things that
                    matter. I currently work remotely with a selected freelance
                    client base and are open for new opportunities.
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Jatin Dharaiya</span>
                        </li>
                        <li>
                          <label>Birthday: </label>
                          <span>08 June 2000</span>
                        </li>
                        <li>
                          <label>Age: </label>
                          <span>22 years</span>
                        </li>
                        <li>
                          <label>Address: </label>
                          <span>Gujrat, India</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span>+91 83066 67760</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>jatindharaiyami@gmail.com</span>
                        </li>
                        <li>
                          <label>Skype: </label>
                          <span>Jatin Dharaiya</span>
                        </li>
                        <li>
                          <label>Freelance: </label>
                          <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="separated"></div>

          <div className="title">
            <h3>What I do?</h3>
          </div>
          <div className="row" data-aos="fade-right">
            <div className="col-lg-4 m-15px-tb">
              <div className="feature-box-01">
                <i className="icon theme-bg icon-mobile"></i>
                <div className="feature-content">
                  <h5>App Development</h5>
                  <p>
                    I am building Beautiful & responsive interfaces and user
                    experience that drive more customers. I analyze the nuances
                    of each business domain, research, brainstorm. which
                    enhances your business efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 m-15px-tb">
              <div className="feature-box-01">
                <i className="icon theme-bg icon-desktop"></i>
                <div className="feature-content">
                  <h5>Web Development</h5>
                  <p>
                    Websites play a vital role in signifying your brand’s online
                    presence. Undeniably, it is the face of your company. I am
                    building compelling websites representing the best of your
                    business.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 m-15px-tb">
              <div className="feature-box-01">
                <i className="icon theme-bg icon-target"></i>
                <div className="feature-content">
                  <h5>e-Commerce</h5>
                  <p>
                    I am Serving You with an Eye-Catching e-commerce web design
                    that Attracts Customers to Visit Your Website. I am building
                    an e-commerce store that caters to the contemporary
                    requirements of the market.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="separated"></div> */}

          {/* <div className="title">
            <h3>Awards.</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 m-15px-tb" data-aos="fade-right">
              <div className="feature-box-02 media align-items-center ho">
                <div className="icon">
                  <img
                    src="https://scipy.in/static/website/bootstrap-css/assets/images/backgrounds/SciPy_logo.png"
                    title=""
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <h6>Sci-py India</h6>
                  <p>Internattional conference</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 m-15px-tb" data-aos="fade-right">
              <div className="feature-box-02 media align-items-center ho">
                <div className="icon">
                  <img
                    src="https://teamblindstatics.s3.ap-northeast-1.amazonaws.com/img/companyPage/logo_b86c5a03.png"
                    title=""
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <h6>Problem Solving</h6>
                  <p>HackerRank Problem Solving</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 m-15px-tb" data-aos="fade-right">
              <div className="feature-box-02 media align-items-center ho">
                <div className="icon">
                  <img
                    src="data:image/png;base64,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"
                    title=""
                    height="70px"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <h6>SSIP Hackathon</h6>
                  <p>Smart Gujrat For new Hackathon</p>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="separated"></div> */}

          {/* <div className="title">
            <h3>Testimonials.</h3>
          </div>
          <div>
            <Slider {...settings}>
              <div
                className="testimonial-01 media"
                style={{ margin: "0px 10px" }}
                data-aos="fade-up"
              >
                <div className="avatar">
                  <img src="static/img/team-1.jpg" title="" alt="" />
                </div>
                <div className="media-body">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                  <h6>Jennifer Lutheran</h6>
                  <span>CEO at pxdraft</span>
                </div>
              </div>
              <div className="testimonial-01 media" data-aos="fade-up">
                <div className="avatar">
                  <img src="static/img/team-2.jpg" title="" alt="" />
                </div>
                <div className="media-body">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                  <h6>Jennifer Lutheran</h6>
                  <span>CEO at pxdraft</span>
                </div>
              </div>
              <div className="testimonial-01 media" data-aos="fade-up">
                <div className="avatar">
                  <img src="static/img/team-3.jpg" title="" alt="" />
                </div>
                <div className="media-body">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                  <h6>Jennifer Lutheran</h6>
                  <span>CEO at pxdraft</span>
                </div>
              </div>
              <div className="testimonial-01 media" data-aos="fade-up">
                <div className="avatar">
                  <img src="static/img/team-1.jpg" title="" alt="" />
                </div>
                <div className="media-body">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                  <h6>Jennifer Lutheran</h6>
                  <span>CEO at pxdraft</span>
                </div>
              </div>
            </Slider>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default About;
