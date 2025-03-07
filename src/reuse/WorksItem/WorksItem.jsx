import './styles/worksItem.css'

export default function WorksItem({ img, title, text }) {
  return (
    <article className="works-item">
      <img src={img} alt={img} />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
