export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me </h2>
      <div className="contact-grid-container">
        <form>
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
  );
}
//test
