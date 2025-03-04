import HeaderLeft from "./HeaderLeft";
import Picture from '../../../img/young-indian-busniess-woman.png'
import '../../../styles/header.css'

export default function HeaderBottom() {
    return (
        <div className='headerBottom'>
            <HeaderLeft/>
            <img src={Picture} alt={Picture}/>
        </div>
    )
}
