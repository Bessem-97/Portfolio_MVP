import LinkedIn from '../Images/icomoon-free_linkedin.png';
import Image from 'next/image';
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

        <section className="contact-me-info">
          <h2>Contact Me </h2>
          <p>
            {' '}
            I’m currently looking for new opportunities and would love to hear
            from you!
          </p>
          <p>
            I can be reached by Email, telephone or through LinkedIn. Also, feel
            free to fill out the contact form attached if you prefer. I look
            forward to hearing from you!
          </p>
          <p>
            {' '}
            <b>Direct email:</b>
          </p>
          <p>kieran.webdevelopment@gmail.com</p>
          <p>
            <b>Telephone:</b>
          </p>
          <p>07745391002</p>
          <p className="linkedIn-ptag">
            <b>LinkedIn:</b>
          </p>
          <a
            href="https://www.linkedin.com/in/kieran-gill/"
            target="_blank"
            rel="noreferrer"
          >
            <Image className="LinkedIn" src={LinkedIn} alt="Linked in" />
          </a>
        </section>
      </div>
    </div>
  );
}
//test
