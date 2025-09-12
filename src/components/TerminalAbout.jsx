import { useEffect, useState } from "react";

// Tiny typing animation for each line
function TypeLine({ text, delay = 0 }) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const start = setTimeout(() => {
      const iv = setInterval(() => {
        setShown((s) => {
          if (s >= text.length) {
            clearInterval(iv);
            return s;
          }
          return s + 1;
        });
      }, 12);
    }, delay);
    return () => clearTimeout(start);
  }, [text, delay]);
  return <div className="term-line">{text.slice(0, shown)}</div>;
}

export default function TerminalAbout({ lines }) {
  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="title">about-me.ts</span>
      </div>
      <div className="terminal-body">
        <div className="prompt">$ about --me</div>
        {lines.map((t, i) => (
          <TypeLine key={i} text={t} delay={300 + i * 300} />
        ))}
      </div>
    </div>
  );
}
