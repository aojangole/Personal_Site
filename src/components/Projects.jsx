import { projects } from "../data.js";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Featured projects</h2>
      <div className="proj">
        {projects.map((p) => (
          <article className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <ul className="tags">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            {p.link && (
              <a className="card-link" href={p.link} target="_blank" rel="noreferrer">
                View project
              </a>
            )}
          </article>
        ))}
      </div>
      <p className="note">More projects and live links coming soon.</p>
    </section>
  );
}
