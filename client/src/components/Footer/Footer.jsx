import "./Footer.scss";

import Payment from "../../assets/payments.png";

import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">

        <div className="footer-top">
          <div className="footer-top-one footer-block">
            <div>About</div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
              numquam aliquam! Quidem a sit, dignissimos dolorem beatae fugiat,
              repudiandae veritatis repellendus.
            </div>
          </div>
          <div className="footer-top-two footer-block">
            <div>Contact</div>
            <div className="footer-top-two-bottom">
                <div>
                    <span><FaLocationArrow /></span>
                   <div> Lorem ipsum dolor sit amet.</div>
                </div>
                <div>
                    <span><FaMobileAlt /></span>
                     <div>+91 8742589637</div>
                </div>
                <div>
                    <span><FaEnvelope /></span>
                     <div> info@techgmail.com</div>
                </div>
            </div>
          </div>
          <div className="footer-top-three footer-block">
             <div>Categories</div>
             <ul>
                <li>Headphones</li>
                <li>Mobiles</li>
                <li>Smart Watches</li>
                <li>Accessiries</li>
                <li>Bluetooth</li>
                <li>Clothes</li>
             </ul>
          </div>
          <div className="footer-top-four footer-block">
          <div>Pages</div>
             <ul>
                <li>About</li>
                <li>Services</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Returns</li>
                <li>Privacy</li>
             </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, fuga?
          </div>
          <div className="footer-bottom-right">
            <img src={Payment} alt="img" srcset="" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
