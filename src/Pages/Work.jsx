import React from "react";

const Work = () => {
  return (
    <>
      <section id="work" className="section dark-bg">
        <div className="container">
          <div className="title">
            <h3>My Portfolio.</h3>
          </div>
          <div className="portfolio-filter-01">
            <ul className="filter nav">
              <li className="active" data-filter="*">
                All
              </li>
              <li data-filter=".branding">Branding</li>
              <li data-filter=".photoshop">Photoshop</li>
              <li data-filter=".fashion">Fashion</li>
              <li data-filter=".product">Product</li>
            </ul>
          </div>
          <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">
            <div className="grid-item product branding fashion">
              <div className="portfolio-box-01">
                <div className="portfolio-info">
                  <h5 className="white-color font-weight-bold">Momb ios App</h5>
                  <span>Broadcasting ios App</span>
                </div>
                <div className="portfolio-img">
                  <img src="static/img/m-portfolio-1.jpg" title="" alt="" />
                  <div className="portfolio-icon">
                    <a
                      href="static/img/m-portfolio-1.jpg"
                      className="gallery-link"
                    >
                      <span className="ti-plus"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item photoshop">
              <div className="portfolio-box-01">
                <div className="portfolio-info">
                  <h5 className="white-color font-weight-bold">Momb ios App</h5>
                  <span>Broadcasting ios App</span>
                </div>
                <div className="portfolio-img">
                  <img src="static/img/m-portfolio-2.jpg" title="" alt="" />
                  <div className="portfolio-icon">
                    <a
                      href="static/img/m-portfolio-2.jpg"
                      className="gallery-link"
                    >
                      <span className="ti-plus"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item product branding">
              <div className="portfolio-box-01">
                <div className="portfolio-info">
                  <h5 className="white-color font-weight-bold">Momb ios App</h5>
                  <span>Broadcasting ios App</span>
                </div>
                <div className="portfolio-img">
                  <img src="static/img/m-portfolio-3.jpg" title="" alt="" />
                  <div className="portfolio-icon">
                    <a
                      href="static/img/m-portfolio-3.jpg"
                      className="gallery-link"
                    >
                      <span className="ti-plus"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item product photoshop">
              <div className="portfolio-box-01">
                <div className="portfolio-info">
                  <h5 className="white-color font-weight-bold">Momb ios App</h5>
                  <span>Broadcasting ios App</span>
                </div>
                <div className="portfolio-img">
                  <img src="static/img/m-portfolio-5.jpg" title="" alt="" />
                  <div className="portfolio-icon">
                    <a
                      href="static/img/m-portfolio-5.jpg"
                      className="gallery-link"
                    >
                      <span className="ti-plus"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item branding">
              <div className="portfolio-box-01">
                <div className="portfolio-info">
                  <h5 className="white-color font-weight-bold">Momb ios App</h5>
                  <span>Broadcasting ios App</span>
                </div>
                <div className="portfolio-img">
                  <img src="static/img/m-portfolio-4.jpg" title="" alt="" />
                  <div className="portfolio-icon">
                    <a
                      href="static/img/m-portfolio-4.jpg"
                      className="gallery-link"
                    >
                      <span className="ti-plus"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item product photoshop">
              <div className="portfolio-box-01">
                <div className="portfolio-info">
                  <h5 className="white-color font-weight-bold">Momb ios App</h5>
                  <span>Broadcasting ios App</span>
                </div>
                <div className="portfolio-img">
                  <img src="static/img/m-portfolio-6.jpg" title="" alt="" />
                  <div className="portfolio-icon">
                    <a
                      href="static/img/m-portfolio-6.jpg"
                      className="gallery-link"
                    >
                      <span className="ti-plus"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item fashion">
              <div className="portfolio-box-01">
                <div className="portfolio-info">
                  <h5 className="white-color font-weight-bold">Momb ios App</h5>
                  <span>Broadcasting ios App</span>
                </div>
                <div className="portfolio-img">
                  <img src="static/img/m-portfolio-7.jpg" title="" alt="" />
                  <div className="portfolio-icon">
                    <a
                      href="static/img/m-portfolio-7.jpg"
                      className="gallery-link"
                    >
                      <span className="ti-plus"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item product branding">
              <div className="portfolio-box-01">
                <div className="portfolio-info">
                  <h5 className="white-color font-weight-bold">Momb ios App</h5>
                  <span>Broadcasting ios App</span>
                </div>
                <div className="portfolio-img">
                  <img src="static/img/m-portfolio-8.jpg" title="" alt="" />
                  <div className="portfolio-icon">
                    <a
                      href="static/img/m-portfolio-8.jpg"
                      className="gallery-link"
                    >
                      <span className="ti-plus"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item fashion">
              <div className="portfolio-box-01">
                <div className="portfolio-info">
                  <h5 className="white-color font-weight-bold">Momb ios App</h5>
                  <span>Broadcasting ios App</span>
                </div>
                <div className="portfolio-img">
                  <img src="static/img/m-portfolio-9.jpg" title="" alt="" />
                  <div className="portfolio-icon">
                    <a
                      href="static/img/m-portfolio-9.jpg"
                      className="gallery-link"
                    >
                      <span className="ti-plus"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
