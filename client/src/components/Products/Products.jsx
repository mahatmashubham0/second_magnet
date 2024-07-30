import "./Products.scss";

import Product from '../Products/Product/Product'

const Products = (props, {innerValue , headingText , products , baseUrl}) => {
    console.log(props)
    return (
        <div className="products-section">
            {/* inner value pass vo showing the heading to the component visit Category component and Home componen for understanding */}
            {innerValue && <div className="product-heading">{headingText}</div>} 
            <div className="products">
                {
                    props?.products?.map((item)=>{
                        console.log("-->",item)
                        return (
                            <Product key={item?.id} id={item?.id} data = {item} baseUrl = {props?.baseUrl}/>
                        )
                    })
                }
            </div>
            
        </div>
    )
};

export default Products;
