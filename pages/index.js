// import Image from 'next/image'
import Heading from '../components/Heading';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Contact from '../components/Contact';

import Projects from '../components/Projects';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Heading />
      <Main />
      <Projects />
      {/* <Contact /> */}
      <div className="contact">
        <h2>Contact Me </h2>
        <div className="contact-grid-container">
          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            action="/success"
            // data-netlify="true"
          >
            <input type="hidden" name="contact-me" value="contact" />
            <label htmlFor="yourname">Name </label>
            <input type="text" id="yourname" name="name" />

            <label htmlFor="youremail">Email </label>
            <input type="text" id="youremail" name="email" />

            <label htmlFor="thesubject">Subject</label>
            <input type="text" id="thesubject" name="subject" />

            <label htmlFor="yourmessage">Message</label>

            <textarea id="yourmessage" name="message" />
            <button className="btn-main form-button" type="submit">
              Submit
            </button>
          </form>
          <section>
            <h2>Right</h2>
          </section>
        </div>
      </div>
    </div>
  );
}
