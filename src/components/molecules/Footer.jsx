import logo from "../../assets/img/wolftechPlata.svg";
import IconTwitter from "../../assets/img/TwitterX.svg";
import IconLIN from "../../assets/img/LinkedIn.svg";
import IconFB from "../../assets/img/Facebook.svg";
import IconIG from "../../assets/img/Instagram.svg";
import IconWolfTech from "../../assets/img/wolftech-icon.svg";
import '../../assets/css/footer.css'

function Footer() {
  return (
    <footer className="container-footer">
      <div className="row-footer">
        <div className="column-footer">
          <img src={logo} alt="Logo" className="logo-footer" />
        </div>
        <div className="column-footer about">
            <h4>Sobre nosotros</h4>
            <p>Somos una empresa mexicana, desarrolladora de software, que día a día busca innovar en este mercado para garantizar tu seguridad.</p>
          {/* <span>Proyecto Hackathon 2023</span> */}
        </div>

        <div className="column-footer social-container">
          <h4>Siguenos</h4>
          <div>
            <a
              href="mailto:example@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={IconTwitter} alt="Logo gmail" />
            </a>
            <a
              href="https://www.facebook.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={IconFB} alt="Logo facebook" />
            </a>
            <a
              href="https://www.instagram.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={IconLIN} alt="Logo Linkedin" />
            </a>
            <a
              href="https://www.linkedin.com/in/example"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={IconIG} alt="Logo Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright-info">© 2023 WolfTech <img src={IconWolfTech} alt="" /></div>
    </footer>
  );
}

export default Footer;
