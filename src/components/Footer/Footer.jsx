import Container from 'components/Container/Container';
import '../../styles/footer.css';
import Logo from 'components/Header/Logo/Logo';
import LogoPhoto from '../../img/Tweakful.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-top">
          <div className="footer-left">
            <Logo logo={LogoPhoto} />
            <div className="footer-desc">
              <h3 className="about-tweakful">About Tweakful</h3>
              <ul>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
                <li>
                  <a href="#">Privacy Police</a>
                </li>
                <li>
                  <a href="#">Terms Of Services</a>
                </li>
                <li>
                  <a href="#">GDPR</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
            <div className="footer-main-desc">
              <p className="footer-description">
                Tweakful is HubSpot Theme Based On Engagement Design Framework, designed & developed by Openthrive.
              </p>
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Capabilities</a>
                </li>
                <li>
                  <a href="#">Resourses</a>
                </li>
                <li>
                  <a href="#">Partnership Intergration</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span></span>
        <div className="footer-bottom">
          <p>
            B2B website and engagement design solution that transform marketing and sales performance like never before.
          </p>
          <p>© 2015-2020 Openthrive. All right reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
