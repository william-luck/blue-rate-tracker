
import EditIngredient from "./EditIngredient";



function EditMenuItem({ item }) {

    

    return(
        <>
        <h1>{item.name}</h1>
        
            {item.ingredients?.map(ingredient => <EditIngredient ingredient={ingredient} key={ingredient.id}/>)}

        </>
    )

}

export default EditMenuItem; 