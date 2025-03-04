import './styles/Circle.css';

export default function Circle({ title, text, img, line }) {
  return (
    <article className="circle">
      <div>
        {img}
        {line && <span></span>}
      </div>
      <h3 className="process-title__litle">{title}</h3>
      <p className="process-description">{text}</p>
    </article>
  );
}
