import './styles/HeadlineArticle.css'

export default function HomeHeadlineArticle({title, img, text}) {
    return <article className='headline-article'>
        <img src={img} alt={img}/>
        <div className='headline-other'>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </article>
}
