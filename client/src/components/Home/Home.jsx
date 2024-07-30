
import "./Home.scss";

import {useContext, useEffect} from 'react'

import Banner from './Banner/Banner'
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
    const baseUrl = 'http://localhost:1337'
    const {category , setCategory, product , setProduct} = useContext(Context);

    useEffect(()=>{
        console.log("Print")
        getCategories();
        getProdcuts()
    }, [])

    const getCategories = () => {
        fetchDataFromApi("/api/cats?populate=*").then((res)=>{
            setCategory(res?.data);
        })
    }

    const getProdcuts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res)=>{
            console.log(res)
            setProduct(res?.data);
        })
    }


    return (
        <div>
            {/* Home */}
            <Banner />

            <div className="try">
                <div className="try-block">
                    <div className="block">
                        <img src={'https://eminence.ch/wp-content/uploads/2023/08/commerce-tips-2022.jpg'} alt="" />
                    </div>
                    <div className="block">
                    <img src={'https://miro.medium.com/v2/resize:fit:1400/1*SwFB1o_k1LGprN-XRUZQ8w.jpeg'} alt="" />

                    </div>
                    <div className="block">
                    <img src={'https://assets-160c6.kxcdn.com/wp-content/uploads/2022/08/2022-08-09-en-de.jpg'} alt="" />

                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="layout">
                    <Category categories={category} baseUrl={baseUrl}/>
                    <Products products = {product} innerValue={true} headingText = "Popular Products" baseUrl={baseUrl}/>
                </div>
            </div>
        </div>
    );
};

export default Home;
