import { contact, profile } from "../data.js";
import { links } from "../links.js";

export default function Contact() {
  return (
    <>
      <section id="services">
        <h2>Work with me</h2>
        <div className="cols">
          <p>I’m looking for software engineering internships and taking on freelance web development projects.</p>
          <p>Need a full-stack MVP built quickly, or help optimizing an existing system? I bring speed, sound architecture and precise implementation.</p>
        </div>
      </section>
      <section className="contact" id="contact">
        <h2>Let’s talk</h2>
        <p>Based in {profile.location}. WhatsApp is the fastest way to reach me.</p>
        <div className="btns">
          <a className="btn primary" href={links.whatsapp}>WhatsApp {contact.phoneDisplay}</a>
          <a className="btn" href={links.email}>{contact.email}</a>
          <a className="btn" href={links.sms}>Send a text</a>
          <a className="btn" href={links.call}>Call</a>
          {contact.github && <a className="btn" href={contact.github} target="_blank" rel="noreferrer">GitHub</a>}
          {contact.linkedin && <a className="btn" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
        </div>
      </section>
    </>
  );
}
