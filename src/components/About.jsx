import { about, toolkit } from "../data.js";

export default function About() {
  return (
    <section id="about">
      <h2>About me</h2>
      <div className="cols">
        <div>
          {about.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
        <dl>
          {toolkit.map(([k, v]) => (
            <div className="row" key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
