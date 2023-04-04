import { Card, CardContent } from "@material-ui/core"
import { useSelector } from "react-redux"
import MenuItemCard from "./MenuItemCard"
import Title from "./Dashboard/Title"
import { Grid } from "@material-ui/core"

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
            <Title>{menu.name}</Title>

            <Grid container spacing={3}>
                {menu.menu_items.map(item => {
                    return (
                        <Grid item xs={6} sm={4}>
                            <MenuItemCard key={item.name} item={item}/>
                        </Grid>
                    )
                })}
            </Grid>
            


        </div>

       
        </>
    )
}

export default Menu;