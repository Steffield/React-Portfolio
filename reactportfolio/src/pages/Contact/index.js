import React from "react";
import "../../index.css";
import SectionImage from "../../components/SectionImage/SectionImage"
import contact from "../../backgroundImages/contact.png"


function Contact() {
  return (
    <>
  
    <SectionImage bgIMG={contact} sectionName={"CONTACT"}/>
      {/* // <!-- Contact Section --> */}
      <div className="content section" id="contactSection">
        <h3 className="center">Contact Me</h3>
        <hr></hr>

          <div className="col-md-12" id="contactPanel">
            <div id="addressDetails">
              <i className="fa fa-map-marker fa-fw margin-right"></i> Cary, NC, US<br></br>
              {/* <!-- <i class="fa fa-phone fa-fw margin-right"></i> Phone: 813 400 6633<br> --> */}
              <i className="fa fa-envelope fa-fw margin-right"></i> steffilebby@gmail.com<br></br>
            </div>
            <p>Or leave me a note:</p>

          <form className="contact" id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/steffilebby@gmail.com" method="post">
            <fieldset id="fs-frm-inputs">
              <label for="full-name">Name</label>
              <input type="text" name="name" id="full-name" placeholder="Name" required=""></input>
              <label for="email-address">Email</label>
              <input type="email" name="_replyto" id="email-address" placeholder="Email" required=""></input>
              <label for="message">Message</label>
              <textarea rows="5" name="message" id="message" placeholder="Message" required=""></textarea>
              <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"></input>
            </fieldset>
            <button type="submit" class="button center padding-large" id="sendBtn">
              <i className="fa fa-paper-plane"></i> Send Message
            </button>
            {/* <!-- <input type="submit" value="Submit" id="sendBtn"> --> */}
          </form>
          </div>
        </div>
      {/* </div> */}
    </>
    );
}

export default Contact;