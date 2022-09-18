import React, { useState, useEffect, Suspense } from "react";
import "./App.css";
import ReactGA from "react-ga";
import Aos from "aos";
import "aos/dist/aos.css";

import "../node_modules/aos/dist/aos.css";
const About = React.lazy(() => import("./Pages/About"));
// const Blog = React.lazy(() => import("./Pages/Blog"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const Work = React.lazy(() => import("./Pages/Work"));
const Footer = React.lazy(() => import("./Pages/Footer"));
const Home = React.lazy(() => import("./Pages/Home"));
const LeftHeader = React.lazy(() => import("./Pages/LeftHeader"));
const Resume = React.lazy(() => import("./Pages/Resume"));

function App() {
  const [theam, settheam] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);

  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  useEffect(() => {
    ReactGA.initialize("UA-213640795-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const changeTheam = () => {
    settheam(!theam);
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 670) {
      setVisible(true);
    } else if (scrolled <= 670) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Suspense
      fallback={
        <div id="loading">
          <div className="load-circle">
            <span className="one"></span>
          </div>
        </div>
      }
    >
      <div
        data-spy="scroll"
        data-target="#navbar-collapse-toggle"
        data-offset="70"
        className={theam ? "theme-light" : ""}
      >
        <LeftHeader changeTheam={changeTheam} theam={theam} />
        <main className="main-left">
          <Home changeTheam={changeTheam} theam={theam} />
          {/* <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-9472507449954023"
            data-ad-slot="9472507449954023"
            data-ad-format="auto"
          /> */}
          <About />
          <Resume />

          <Work />
          {/* <Blog /> */}
          <Contact />
        </main>
        <Footer />

        {visible && (
          <div
            data-aos="fade-right"
            onClick={scrollToTop}
            className="fixd-btn"
            style={{
              cursor: "pointer",
              position: "fixed",
              bottom: "20px",
              right: "20px",
              background: "#ff9301",
              padding: "9px 15px",
              display: "inline-block",
              color: "#fff",
              fontWeight: "600",
              borderRadius: "60px",
              zIndex: "1",
            }}
            // style={{ display: visible ? "inline" : "none" }}
          >
            <span>
              <i className="fas fa-chevron-up"></i>
            </span>
          </div>
        )}
      </div>
    </Suspense>
  );
}

export default App;
