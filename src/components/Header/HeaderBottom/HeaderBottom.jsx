import HeaderLeft from './HeaderLeft';
import Picture from '../../../img/young-indian-busniess-woman.png';
import '../../../styles/header.css';
import Container from 'components/Container/Container';

export default function HeaderBottom({ color }) {
  return (
    <section className="headerBottom">
      <Container>
        <HeaderLeft color={color}/>
        <img src={Picture} alt={Picture} />
      </Container>
    </section>
  );
}
