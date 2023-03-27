import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productsSlice";
import Product from "./Product";


function EditProducts() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    },[])

    const products = useSelector(state => state.products.entities)


    return (
        <>
        Products
        <ul>
            {products?.map(product => <Product key={product.id} product={product}/>)}
        </ul>
        </>
    )
}

export default EditProducts;