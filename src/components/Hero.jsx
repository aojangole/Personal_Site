import { profile, stack } from "../data.js";
import { links } from "../links.js";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="lede">{profile.intro}</p>
        <div className="btns">
          <a className="btn primary" href={links.whatsapp}>Message on WhatsApp</a>
          <a className="btn" href={links.email}>Send an email</a>
        </div>
      </div>
      <div>
        <ol className="stack" reversed aria-label="The layers I work across, from hardware up to the interface">
          {stack.map((s) => (
            <li key={s.layer}>
              <b>{s.layer}</b>
              <span>{s.tech}</span>
            </li>
          ))}
        </ol>
        <p className="stack-cap">Most developers work at the top of this stack. I’ve worked through all of it.</p>
      </div>
    </header>
  );
}
