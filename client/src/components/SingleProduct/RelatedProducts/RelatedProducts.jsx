import { useFetch } from '../../../hooks/useFetch';
import Products from '../../Products/Products'

const RelatedProducts = (props) => {
    const baseUrl = 'http://localhost:1337'
    console.log(props)


    const {data} = useFetch(`/api/products?populate=*&filters[id][$ne]${props.productId}
        &filters[categories][id]=${props.categoryId}&pagination[start]=0&pagination[limit]=4
        `)

    console.log(data)

    return (
        <div className="related-products">
            <Products innerValue={true} products={data?.data} baseUrl = {baseUrl} headingText = "Related Products"/>
        </div>
    )
};

export default RelatedProducts;
