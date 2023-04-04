import { useSelector } from "react-redux"

function Menu() {

    const menu = useSelector(state => state.menus.selected)

    function calculatePrice(menu_item) {
        let sub_total = menu_item.ingredients.reduce((accum, curr) => accum + curr.price_of_ingredient, 0)
        let rounded_up = Math.ceil( (sub_total * menu_item.price_ratio) / 10 ) * 10
        return rounded_up
      }


    return(
        <>
        <div>
            {menu.name}
            <ul>
                {menu.menu_items.map(item => <li key={item.name}>{item.name}: {calculatePrice(item)}</li>)}
            </ul>
        </div>
        </>
    )
}

export default Menu;