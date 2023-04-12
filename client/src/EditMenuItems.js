import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import EditMenuItem from "./EditMenuItem";
import { fetchMenuItems, ingredientSelected } from "./menuItemsSlice";
import { Divider, Menu, MenuItem } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core";


function EditMenuItems() {



    const dispatch = useDispatch()
    const menuItems = useSelector(state => state.menuItems.entities)
    const selectedItem = useSelector(state => state.menuItems.selectedItem)

    useEffect(() => {
        dispatch(fetchMenuItems())
    }, [dispatch])

    function handleChange(e) {
        const item = menuItems.find(menuItem => menuItem.id == e.target.value)
        dispatch(ingredientSelected(item))
    }

    function selected(id) {
        if (selectedItem) {
            if (id == selectedItem.id) {
                return true
            } else {
                return false
            }
        }
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
          },
          paper: {
            padding: theme.spacing(2),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
          },
          fixedHeight: {
            height: 240,
          },
          container: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
          }
      }))
    
      const classes = useStyles();

    return (
        <>
        <Container maxWidth='lg' className={classes.container}>
        <Grid container spacing={3}>
            <Grid item xs={12} >
            <Paper>
                <Container className={classes.container}>
            <label>Select a menu Item to edit: </label>

                <select id='menuItem' name='menuItem' onChange={handleChange}>
                    <option value=''>None</option>
                    {menuItems?.map(menuItem => {
                    return <option key={menuItem.id} value={menuItem.id} selected={selected(menuItem.id)}>{menuItem.name}</option>
                    })}
                </select>
                <br></br>
                <br></br>
                <Divider/>

                {!Array.isArray(selectedItem) && selectedItem ? <EditMenuItem item={selectedItem}/> : null}
                </Container>
            </Paper>
            </Grid>
        </Grid>

        </Container>
        
        
        </>
    )
}

export default EditMenuItems;