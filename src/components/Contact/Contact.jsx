import Container from 'components/Container/Container';
import Form from 'components/From/From';
import google from '../../img/google-black.svg';
import amazon from '../../img/Amazon logo (1).svg';
import atlassian from '../../img/Atlassian logo.svg';
import { SiIntel } from 'react-icons/si';

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-top">
        <Container>
          <div className="contact-left">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-description">
              If you have any questions about the subscription or are not sure which plan is right for you, contact our
              team and let’s schedule a call.
            </p>
            <div className="contact-btn-box">
              <button className="controls-btn-contact" type="button">
                Call us <br /> (669) 984-9439
              </button>
              <button className="controls-btn-contact" type="button">
                Email us <br /> hello@openthrive.com
              </button>
            </div>
          </div>
          <Form />
        </Container>
      </div>
      <div className="contact-bottom">
        <div className="bottom-container">
          <div className="logo-container">
            <img src={google} alt={google} />
            <img src={amazon} alt={amazon} />
            <SiIntel className="intel-logo" />
            <img src={atlassian} alt={atlassian} />
          </div>
        </div>
      </div>
    </section>
  );
}
