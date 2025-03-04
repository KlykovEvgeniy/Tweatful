import HomeHeadlineArticle from "../../../../reuse/HomeHeadlineArticle/HeadlineArticle";
import star from "../../../../img/star.svg"
import box from "../../../../img/storageLogo.svg"
import layer from "../../../../img/layers.svg"

export default function HeadlineLeft() {
    const text = 'Gorgeous, high-quality design system for mobile, tablet & desktop devices a few '
    return (<div className='headline-left'>
        <HomeHeadlineArticle title='First Benefit' img={box} text={text}/>
        <HomeHeadlineArticle title='Second Benefit' img={star} text={text}/>
        <HomeHeadlineArticle title='Third Benefit' img={layer} text={text}/>
    </div>)
}
