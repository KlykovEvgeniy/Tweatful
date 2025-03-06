import './styles/Circle.css';

export default function CircleSecond({ img, secondImg, title, text }) {
  return (
    <article className="circle-second">
      <div className="circle-second-content">
        <div>
          <img src={img} alt={img} />
        </div>
        <img className='circle-second-line' src={secondImg} alt={secondImg} />
      </div>
      <h3 className="circle-second-title__little">{title}</h3>
      <p className="circle-second-description">{text}</p>
    </article>
  );
}
