import "./Category.scss";

import {useNavigate} from 'react-router-dom'

// import catOne from '../../../assets/category/cat-1.jpg'
// import catTwo from '../../../assets/category/cat-2.jpg'
// import catThree from '../../../assets/category/cat-3.jpg'
// import catFour from '../../../assets/category/cat-4.jpg'

const Category = ({categories , baseUrl}) => {

    const navigate = useNavigate();

    console.log("Categories", baseUrl , categories)
    // category.map((item)=>{
    //     console.log(item)
    // })
    return (
        <div className="category-section">
            <div className="category-content">

                {
                  categories?.map((item)=>{
                    console.log(item?.attributes?.img?.data?.attributes?.url)
                    return(
                        <div key={item?.id} className="category" onClick={()=>navigate(`/category/${item?.id}`)}>
                           <img src={baseUrl + item?.attributes?.img?.data?.attributes?.url} alt="img" />
                        </div>
                    )
                 })
                }


                {/* <div className="category">
                    <img src={catTwo} alt="img" />
                </div>
                <div className="category">
                    <img src={catThree} alt="img" />
                </div>
                <div className="category">
                    <img src={catFour} alt="img" />
                </div> */}
            </div>
        </div>
    )
};

export default Category;
