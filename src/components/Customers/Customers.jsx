import air from '../../img/airbnb.svg';
import amazon from '../../img/Amazon Logo.svg';
import fox from '../../img/fox.svg';
import mine from '../../img/Microsoft Logo.svg';
import google from '../../img/Google Logo.svg';
import ola from '../../img/ola.svg';
import walmart from '../../img/Walmart Logo.svg';
import oyo from '../../img/OYO Logo.svg';
import Container from 'components/Container/Container';

export default function Customers() {
  return (
    <section className="customers">
      <Container>
        <h2 className="customers-title">
          <span>1,500+</span>
          <br />
          Customers who have used Tweakful engagement design approach
        </h2>

        <div className="customres-container">
          <img src={air} alt={air} />
          <img src={amazon} alt={amazon} />
          <img src={fox} alt={fox} />
          <img src={mine} alt={mine} />
          <img src={google} alt={google} />
          <img src={ola} alt={ola} />
          <img src={walmart} alt={walmart} />
          <img src={oyo} alt={oyo} />
        </div>
      </Container>
    </section>
  );
}
