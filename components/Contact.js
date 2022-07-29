export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me </h2>
      <form>
        <label htmlFor="">
          <span>Name</span>
          <input type="text" />
        </label>
        <label htmlFor="">
          <span>Email</span>
          <input type="email" />
        </label>
        <label htmlFor="">
          <span>Subject</span>
          <input type="text" />
        </label>
        <label htmlFor="">
          <span>Subject</span>
          <textarea />
        </label>
      </form>
    </div>
  );
}
