import { profile } from "../data.js";

export default function Nav() {
  return (
    <nav aria-label="Main">
      <a className="mark" href="#top">{profile.name}</a>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
