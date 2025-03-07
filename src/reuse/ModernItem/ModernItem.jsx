import './styles/modernItem.css';

export default function ModernItem({ img, title, text, color }) {
  return (
    <article className="modern-item">
      {!color && <img src={img} alt={img} />}
      {color && <img src={img} alt={img} style={{filter: 'invert(1)'}}/>}
      <h3 className="modern-item-title" style={{ color: color }}>
        {title}
      </h3>
      <p className="modern-item-description" style={{ color: color }}>
        {text}
      </p>
    </article>
  );
}
