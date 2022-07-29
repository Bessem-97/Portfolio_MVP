export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me </h2>
      <div className="contact-grid-container">
        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="contact me" value="Contact me" />
          <label htmlFor="Name">Name </label>
          <input type="text" id="Name" name="name" />

          <label htmlFor="Email">Email </label>
          <input type="text" id="Email" name="email" />

          <label htmlFor="Subject">Subject</label>

          <input type="text" id="Subject" name="subject" />

          <label htmlFor="Message">Message</label>

          <textarea id="Message" name="message" />
          <button className="btn-main form-button" type="submit">
            Submit
          </button>
        </form>
        <section>
          <h2>Right</h2>
        </section>
      </div>
    </div>
  );
}
