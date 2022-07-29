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
        >
          <input type="hidden" name="Contact me" value="contact" />
          <label htmlFor="name">Name </label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email </label>
          <input type="text" id="email" name="email" />

          <label htmlFor="subject">Subject</label>

          <input type="text" id="subject" name="subject" />

          <label htmlFor="message">Message</label>

          <textarea id="message" name="message" />
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
