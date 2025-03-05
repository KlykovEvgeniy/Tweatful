import BlueButton from '../../../reuse/BlueButton/Button';
import Logitach from '../../../img/Logitech.svg';
import AmazonLogo from '../../../img/Amazon.svg';
import GoogleLogo from '../../../img/Google.svg';

export default function HeaderLeft({ color }) {
  return (
    <div className="header-left">
      <h1 style={{ color: color }}>This headline is the gist of the Your whole Website </h1>
      <p style={{ color: color }} className="description">
        And the description of hero section is follow up message after the punch of a great headline. So, make it short,
        simple, descriptive and to the point.
      </p>

      <div className="controls">
        <BlueButton text="Book A Meeting " />
        <p style={{ color: color }}>Here you can put secondary action statement & CTA</p>
      </div>
      <div className="brends">
        <img src={Logitach} alt="Logitach" />
        <img src={GoogleLogo} alt="GoogleLogo" />
        <img src={AmazonLogo} alt="AmazonLogo" />
      </div>
    </div>
  );
}
