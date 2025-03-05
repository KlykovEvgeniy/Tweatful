import './styles/Circle.css';

export default function Circle({ title, text, img, line, color}) {
  return (
    <article className="circle">
      <div>
        {img}
        {line && <span style={{ borderColor: color}}></span>}
      </div>
      <h3 style={{ color: color }} className="process-title__litle">
        {title}
      </h3>
      <p style={{ color: color }} className="process-description">
        {text}
      </p>
    </article>
  );
}
