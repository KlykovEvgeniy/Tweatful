import './styles/Circle.css';

export default function Circle({ title, text, img, line, color, width, secondImage }) {
  return (
    <article className="circle">
      <div className='circle-line'>
        <div>{img}</div>
        {line && <span style={{ borderColor: color }}>{secondImage && <img src={secondImage} />}</span>}
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
