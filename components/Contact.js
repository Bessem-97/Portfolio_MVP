export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me </h2>
      <div className="contact-grid-container">
        <form className="contact-form">
          <label htmlFor="Name">Name </label>
          <input type="text" id="Name" />

          <label htmlFor="Email">Email </label>
          <input type="text" id="Email" />

          <label htmlFor="Subject">Subject</label>

          <input type="text" id="Subject" />

          <label htmlFor="Message"> Message</label>

          <textarea id="Message" />
          <button className="btn-main form-button">Submit</button>
        </form>
        <section>
          <h2>Right</h2>
        </section>
      </div>
    </div>
  );
}
