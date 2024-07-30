import "./Category.scss";

import Products from '../Products/Products'
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const Category = () => {
    const baseUrl = "http://localhost:1337"

    const {id} = useParams()

    const data = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)

    console.log(data.data)

    return (
        <div className="category-main-content">

            <div className="layout">

                <div className="category-heading">Category Heading</div>

                <Products innerValue = {false} products = {data?.data?.data} baseUrl = {baseUrl}/>

            </div>
            
        </div>
    )
};

export default Category;
