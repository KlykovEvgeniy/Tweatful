import './styles/countItem.css'

export default function CountItem({ title, text }) {
  return (
    <article className="count-item">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
