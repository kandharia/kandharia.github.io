import { createRoot } from "react-dom/client";
import data from "./data.json";
import "./style.css";

function App() {
  return (
    <main>
      <header>
        <h1>{data.name}</h1>
        <p></p>
        <a className="button" href={data.github} target="_blank">
          GitHub
        </a>
      </header>

      <h2>Experience</h2>
      {data.experiences.map((exp) => (
        <div className="experience" key={exp.title}>
          <h3>{exp.title}</h3>
          <p className="role">{exp.role}</p>
          <ul>
            {exp.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2>Skills</h2>
      {data.skills.map((skill) => (
        <div key={skill.category}>
          <h3>{skill.category}</h3>
          <p>
            {skill.items.split(", ").map((item) => (
              <span className="skill" key={item}>
                {item}
              </span>
            ))}
          </p>
        </div>
      ))}
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
