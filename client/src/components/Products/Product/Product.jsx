import { useNavigate } from "react-router-dom";
import "./Product.scss";

// import Earbuds from '../.../../../../assets/products/earbuds-prod-1.webp'

const Product = (props , {id , data , baseUrl}) => {
    console.log(props)
    console.log(props?.baseUrl + props.data.attributes.img?.data?.attributes?.url);

    const navigate = useNavigate();
    // console.log(props.id)

    return (
        <div className="prodcut-card" onClick={()=>navigate(`/product/${props?.id}`)}>
            <div className="thumbnails-image">
                <img src={props?.baseUrl + props?.data?.attributes?.img?.data?.attributes?.url} alt="img" />
            </div>
            <div className="product-details">
                <span className="name">{props?.data?.attributes?.title}</span>
                <span className="price">$ {props?.data?.attributes?.price}</span>
            </div>
        </div>
    )
};

export default Product;
