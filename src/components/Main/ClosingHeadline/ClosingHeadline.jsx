import Container from 'components/Container/Container';
import BlueButton from 'reuse/BlueButton/Button';
import Facebook from '../../../img/Facebook.svg';
import LinkedIn from '../../../img/Linked In.svg';
import Philips from '../../../img/Philips.svg';
import Logitach from '../../../img/Logitech.svg';
import Amazon from '../../../img/Amazon.svg';
import Google from '../../../img/Google.svg';

export default function ClosingHeadline({color}) {
  return (
    <section className="closing-headlines">
      <Container>
        <h2 style={{color: color}}>The Is Closing Headline To Make A Impact For Call To Action</h2>
        <p style={{color: color}}>
          Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy to streamline the
          lending process nowadays, it isn’t uncommon to see lenders rapidly
        </p>
        <BlueButton text="Book A Meeting" />
        <span></span>
        <ul>
          <li>
            <img src={Philips} alt={Philips} />
          </li>
          <li>
            <img src={Logitach} alt={Logitach} />
          </li>
          <li>
            <img src={Amazon} alt={Amazon} />
          </li>
          <li>
            <img src={Facebook} alt={Facebook} />
          </li>
          <li>
            <img src={Google} alt={Google} />
          </li>
          <li>
            <img src={LinkedIn} alt={LinkedIn} />
          </li>
        </ul>
      </Container>
    </section>
  );
}
