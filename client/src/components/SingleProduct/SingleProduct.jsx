import "./SingleProduct.scss";

import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedinIn,
  FaCartPlus,
  FaTwitter
} from "react-icons/fa";

import RelatedProducts from '../SingleProduct/RelatedProducts/RelatedProducts'

// import ProductImg from "../../assets/products/earbuds-prod-3.webp";
import { useParams } from "react-router-dom";
import {useFetch} from '../../hooks/useFetch';
import { useContext, useState } from "react";
import { Context } from "../../utils/context";

const SingleProduct = () => {

  const [quantity , setQuantity] = useState(1)

  const { handleAddToCart } = useContext(Context)

  const handleIncrement = () => {
      setQuantity((prev) => prev + 1)
  }

  const handledecrement = () => {
     setQuantity((prev) => {
      if(quantity === 1){
          return 1
       }
       return prev - 1
     })
  }

  const {id} = useParams()
  const baseUrl = 'http://localhost:1337'

  const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`)
  if(!data) return;

  const product = data?.data[0].attributes;
  return (
    <div className="single-product-page-content">
      <div className="layout">
        <div className="single-page-product">
          <div className="left-content">
            <img src={baseUrl + product?.img?.data?.attributes?.url} alt="img" />
          </div>
          <div className="right-content">
            <div className="name">{product?.title}</div>
            <div className="price">{product?.price}</div>
            <div className="description">{product?.des}</div>

            <div className="cart-btn">
              <div className="quantity-btn">
                <span onClick={handleIncrement}>+</span>
                <span>{quantity}</span>
                <span onClick={handledecrement}>-</span>
              </div>
              <div className="add-to-cart-btn" onClick={()=>{
                handleAddToCart(data?.data[0] , quantity)
                setQuantity(1)
                }}>
                <button className="button"><FaCartPlus className="icon"/>
                  Add to Cart</button>
              </div>
            </div>

            <span className="driver"/>

            <div className="info-item">
                <span className="text-bold">Category:

                  <span style={{margin: "0 5px"}}>{product?.categories?.data?.attributes?.title}</span>

                </span>

                <span className="text-bold">Share:
                    
                  <span className="social-icons">
                    <FaFacebook />
                    <FaYoutube />
                    <FaLinkedinIn />
                    <FaInstagram />
                    <FaTwitter />
                  </span>

                </span>
            </div>

          </div>
        </div>

        <RelatedProducts productId = {id} categoryId = {product?.categories?.data?.id}/>

      </div>
    </div>
  );
};

export default SingleProduct;
