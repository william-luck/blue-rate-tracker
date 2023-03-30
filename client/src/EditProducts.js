import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productsSlice";
import Product from "./Product";
import AddProduct from "./AddProduct";


function EditProducts() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    },[])

    const products = useSelector(state => state.products.entities)


    return (
        <>
        <AddProduct />
        <h1>Edit Products</h1>
        <ul>
            {products?.map(product => <Product key={product.id} product={product}/>)}
        </ul>
        </>
    )
}

export default EditProducts;