import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ViewList from "@material-ui/icons/ViewList"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenus } from "./menusSlice";
import { menuSelected } from './menusSlice';



const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    button: {
        
    }
  }));

function MenusContainer() {


    const dispatch = useDispatch()
    const menus = useSelector(state => state.menus.entities)

    // Retrieve menus with nested menu items
    useEffect(() => {
        dispatch(fetchMenus())
        dispatch(menuSelected(''))
      }, [dispatch])

    const classes = useStyles();

    function handleClick(menu) {
        dispatch(menuSelected(menu))
    }

    return (
        <Grid container spacing={3}>
            {menus?.map(menu => {
                return (
                    <Grid item xs={6} key={menu.id}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                                <Grid item>
                                    {menu.name}
                                </Grid>
                                <Grid item >
                                    <IconButton aria-label="view" className={classes.margin} size="small" onClick={() => handleClick(menu)}>
                                        <ArrowDownwardIcon fontSize="inherit" />
                                        <ViewList fontSize='inherit'/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                )
            })}            
        </Grid>
    )

}

export default MenusContainer; 




// function MenusContainer() {

//     const dispatch = useDispatch()
//     const menus = useSelector(state => state.menus.entities)

//     // Retrieve menus with nested menu items
//     useEffect(() => {
//         dispatch(fetchMenus())
//       }, [dispatch])

//     return (
//         <>
//         {menus?.map(menu => <Menu menu={menu} key={menu.name}/>)}
//         </>
//     )
// }

// export default MenusContainer;



