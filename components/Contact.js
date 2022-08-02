import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm('mzbwprql');

  return (
    <div className="contact" id="contact">
      <div className="contact-grid-container" id="form">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="messager-name" />
          <ValidationError
            prefix="Name"
            field="messager-name"
            errors={state.errors}
          />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="subject">Subject</label>
          <input id="subject" type="text" name="message-subject" />
          <ValidationError
            prefix="Subject"
            field="message-subject"
            errors={state.errors}
          />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            className="btn-main form-button"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
          <ValidationError errors={state.errors} />
          {state.succeeded && (
            <h1>Thanks for your submission! You&apos;ve made my day!</h1>
          )}
        </form>

        <section>
          <h2>Contact Me </h2>
          <p> do you have any jobs, mate?</p>
          <p>if so, please contact me here</p>
          <p>add linked in etc here</p>
        </section>
      </div>
    </div>
  );
}
//test
