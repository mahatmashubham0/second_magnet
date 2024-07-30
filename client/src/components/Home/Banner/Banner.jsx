import "./Banner.scss";

import bannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-banner-content">
        <div className="left-content">
          <h1>Sales</h1>
          <p>
            An e-commerce website is one that allows people to buy and sell
            physical goods, services, and digital products over the internet
            rather than at a brick-and-mortar location. Through an e-commerce
            website, a business can process orders, accept payments, manage
            shipping and logistics, and provide customer service.
          </p>
          {/* <div className="btn"> */}
            {/* <button className="btn1">Read More</button> */}
            {/* <button className="btn2" style={{color: 'white'}}>Shop Now</button> */}
          {/* </div> */}

        </div>
        <img src={bannerImg} alt="img" className="right-content" />
      </div>
    </div>
  );
};

export default Banner;
