import React from "react";

const Work = () => {
  return (
    <>
      <section id="work" className="section dark-bg">
        <div className="container">
          <div className="title">
            <h3>My Portfolio.</h3>
          </div>
          <div className="row">
            <div
              className="col-lg-6 m-15px-tb"
              data-aos="fade-right"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.Fahrschulhero"
                )
              }
            >
              <div className="feature-box-02   ho">
                <div className="icon d-flex justify-content-center w-100">
                  <img
                    src="https://play-lh.googleusercontent.com/N49h20qF7MHArPODAWjAIEfP7TKzKummg_foMk2OMknJTUT4SCNN5Irt0x9KHr0wT4he=w240-h480-rw"
                    title=""
                    alt=""
                    width={80}
                    height={80}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className="media-body my-3">
                  <h6>Fahrschulhero (Flutter) </h6>
                  <p>
                    Fahrschulhero accompanies you through the learning process
                    of the theoretical driving test for all classes. You learn
                    exclusively with questions, pictures and videos from the
                    official TÜV/Dekra questionnaire and thus prepare yourself
                    well for the exam.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 m-15px-tb"
              data-aos="fade-right"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.socialverse.app"
                )
              }
            >
              <div className="feature-box-02  ho">
                <div className="icon d-flex justify-content-center w-100">
                  <img
                    src="https://play-lh.googleusercontent.com/aTlMAy5XcjscbkUfK5FJ0L9lg3_Oh9udJFk_TYlbi6S2BfzdWzflrpQ_D2lPMXzbuNs=w240-h480-rw"
                    title=""
                    alt=""
                    width={80}
                    height={80}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className="media-body my-3">
                  <h6>SocialVerse (Flutter)</h6>
                  <p>
                    SocialVerse is the place to watch vlogs, documentaries, and
                    podcasts in the native mobile format. Connect with creators,
                    increase your attention span, and earn crypto tokens along
                    the way. With an embedded crypto wallet we give you access
                    to the new web3 frontier.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 m-15px-tb"
              data-aos="fade-right"
              onClick={() => window.open("http://www.motherfarmhouse.com/")}
            >
              <div className="feature-box-02  ho">
                <div className="icon d-flex justify-content-center w-100">
                  <img
                    src="http://www.motherfarmhouse.com/images/logo.png"
                    title=""
                    alt=""
                    width={80}
                    height={80}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className="media-body my-3">
                  <h6>Mother Farm House (ASP .net)</h6>
                  <p>
                    SocialVerse is the place to watch vlogs, documentaries, and
                    podcasts in the native mobile format. Connect with creators,
                    increase your attention span, and earn crypto tokens along
                    the way. With an embedded crypto wallet we give you access
                    to the new web3 frontier.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 m-15px-tb"
              data-aos="fade-right"
              onClick={() => window.open("https://tripovy.com/")}
            >
              <div className="feature-box-02  ho">
                <div className="icon d-flex justify-content-center w-100">
                  <img
                    src="https://play-lh.googleusercontent.com/RQBziRz34Czrj8kvTR1nkf41GJ2TCdkp8ngQcpVcD1umf1dW1Z5h3UV4FY0i9iFSrsE=s48-rw"
                    title=""
                    alt=""
                    width={80}
                    height={80}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className="media-body my-3">
                  <h6>Tripovy (React Js)</h6>
                  <p>
                    SocialVerse is the place to watch vlogs, documentaries, and
                    podcasts in the native mobile format. Connect with creators,
                    increase your attention span, and earn crypto tokens along
                    the way. With an embedded crypto wallet we give you access
                    to the new web3 frontier.
                  </p>
                </div>
              </div>
            </div>
            {/* <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-right"
              onClick={() => window.open("")}
            >
              <div className="feature-box-02  ho">
                <div className="icon d-flex justify-content-center w-100">
                  <img
                    src=""
                    title=""
                    height="70px"
                    alt=""
                    width={80}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className="media-body my-3">
                  <h6>SSIP Hackathon</h6>
                  <p>Smart Gujrat For new Hackathon</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
