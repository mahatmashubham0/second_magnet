import "./Newsletter.scss";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="title">News Letter</span>
        <span className="sub-title">Sign up for the latest update from Us</span>
        <div className="form">
          <input type="text" placeholder="Enter Your Email" />
          <button>Subcribe</button>
        </div>
        <div className="text">
            जो लोगों को भौतिक वस्तुओं, सेवाओं और डिजिटल उत्पादों को किसी ईंट-और-मोर्टार स्थान के बजाय इंटरनेट पर खरीदने और बेचने की अनुमति देती है।
        </div>
        <div className="social-icons">
            <div className="icon">
                <FaFacebook />
            </div>
            <div className="icon">
                <FaInstagram />
            </div>
            <div className="icon">
                <FaTwitter />
            </div>
            <div className="icon">
                <FaYoutube />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
