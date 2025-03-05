import './styles/modernItem.css'

export default function ModernItem({ img, title, text }) {
  return (
    <article className="modern-item">
      <img src={img} alt={img} />
      <h3 className="modern-item-title">{title}</h3>
      <p className="modern-item-description">{text}</p>
    </article>
  );
}
