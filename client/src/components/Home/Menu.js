import { useSelector } from "react-redux"
import MenuItemCard from "./MenuItemCard"
import Title from "../Title"
import { Grid } from "@material-ui/core"

function Menu() {

    const menu = useSelector(state => state.menus.selected)

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