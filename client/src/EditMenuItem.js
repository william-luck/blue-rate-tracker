import { useEffect } from "react";
import EditIngredient from "./EditIngredient";
import { fetchMenuItems } from "./menuItemsSlice";
import { useDispatch, useSelector } from "react-redux";


function EditMenuItem({ item }) {

    

    return(
        <>
        <h1>{item.name}</h1>
        
            {item.ingredients?.map(ingredient => <EditIngredient ingredient={ingredient} key={ingredient.id}/>)}

        </>
    )

}

export default EditMenuItem; 