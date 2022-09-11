import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const Contact = () => {
  // const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (document.getElementById("name").value === "") {
      toast.error("Please enter your name");
    } else if (document.getElementById("email").value === "") {
      toast.error("Please enter your email");
    } else if (document.getElementById("subject").value === "") {
      toast.error("Please enter subject");
    } else if (document.getElementById("message").value === "") {
      toast.error("Please enter message");
    } else if (
      document.getElementById("name").value !== "" &&
      document.getElementById("email").value !== "" &&
      document.getElementById("subject").value !== "" &&
      document.getElementById("message").value !== ""
    ) {
      emailjs
        .sendForm(
          "service_mbb538t",
          "template_nukdx8u",
          e.target,
          "user_CTWFj2wB5tXlLE24W1wH3"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Message sent sucessfull!!");
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
    }
  };
  return (
    <>
      <ToastContainer />

      <section id="contactus" className="section dark-bg ">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xl-4 m-15px-tb" data-aos="fade-right">
              <div className="contact-info">
                <h4>Get In Touch</h4>
                <p>
                  Always available for freelancing if the right project comes
                  along, Feel free to contact me.
                </p>
                <ul>
                  <li className="media">
                    {/* <i className="ti-map"></i> */}
                    <i className="fa fa-address-book" aria-hidden="true"></i>
                    <span className="media-body">
                      Surat, Gujrat, India 394105.
                    </span>
                  </li>
                  <li className="media">
                    {/* <i className="ti-email"></i> */}
                    <i className="fa fa-envelope" aria-hidden="true"></i>

                    <span className="media-body">
                      jatindharaiyami@gmail.com
                    </span>
                  </li>
                  <li className="media">
                    {/* <i className="ti-mobile"></i> */}
                    <i className="fa fa-phone-square" aria-hidden="true"></i>

                    <span className="media-body">+91 83066 67760</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 ml-auto m-15px-tb" data-aos="fade-right">
              <div className="contact-form">
                <h4>Say Something...</h4>
                <form onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          name="name"
                          id="name"
                          placeholder="Name *"
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          name="email"
                          id="email"
                          placeholder="Email *"
                          className="form-control"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          spellCheck
                          name="subject"
                          id="subject"
                          placeholder="Subject *"
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          spellCheck
                          name="message"
                          id="message"
                          placeholder="Your message *"
                          rows="5"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="send">
                        <button
                          className="px-btn px-btn-white"
                          // onclick={sendMail}
                          type="submit"
                          value="Send"
                        >
                          {" "}
                          send message
                        </button>
                      </div>
                      <span
                        id="suce_message"
                        className="text-success"
                        style={{ display: "none" }}
                      >
                        Message Sent Successfully
                      </span>
                      <span
                        id="err_message"
                        className="text-danger"
                        style={{ display: "none" }}
                      >
                        Message Sending Failed
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12" data-aos="fade-up">
              <div className="google-map">
                <div className="embed-responsive embed-responsive-21by9">
                  {/* <iframe
                    className="embed-responsive-item"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.840107317064!2d144.955925!3d-37.817214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1520156366883"
                    allowfullscreen=""
                  ></iframe> */}
                  <iframe
                    title="map"
                    width="641"
                    height="500"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=silver%20business%20point,%20uttran,%20surat&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

// <style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:641px;}</style>
// <style>.mapouter{position:relative;text-align:right;height:500px;width:641px;}</style>
