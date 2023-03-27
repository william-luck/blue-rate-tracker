import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productsSlice";


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
            {products?.map(product => <li key={product.id}>Name: {product.name}, Price per unit: {product.price}</li>)}
        </ul>
        </>
    )
}

export default EditProducts;