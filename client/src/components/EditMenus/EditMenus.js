import { useSelector, useDispatch } from "react-redux";
import EditMenu from "./EditMenu";
import { useState } from "react";
import { addMenu, deleteMenu, fetchMenus } from "../../reducers/menusSlice";
import { useEffect } from "react";
import Title from "../Title";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {Container, Paper} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";


function EditMenus() {


    const menus = useSelector(state => state.menus.entities)
    const user = useSelector(state => state.users.entities[0].id)
    const editingErrors = useSelector(state => state.menus.nameErrors)
    const addingErrors = useSelector(state => state.menus.addingErrors)

    const [newMenuName, setNewMenuName] = useState('')
    const [alertShow, setAlertShow] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        if (!menus.length > 0) {
            dispatch(fetchMenus())
        }
    }, [])
    

    function handleChange(e) {
        setNewMenuName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addMenu({name: newMenuName, user_id: user}))
        setNewMenuName('')
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

    function handleDelete() {
        dispatch(deleteMenu(alertShow.id))
        setAlertShow('')
    }

    const alert = () => {
        return (
            <>
            <br></br>
            <Alert
            severity="warning"
            action={
                <div>
                <Button color="secondary" size="small" variant='contained' onClick={handleDelete}>
                DELETE
                </Button>
                <Button onClick={() => setAlertShow('')}>
                    Cancel
                </Button>
                </div>
            
            }
            >
            <AlertTitle>DELETING {alertShow.name.toUpperCase()} MENU</AlertTitle>
            Deleting the {alertShow.name} menu will unassign all existing menu item. To reassign menu items to a different menu after deletion, please see the "Edit Menu Items" tab. 
            </Alert>
            </>
        )
        
    }
            
        
    return(
        <>
        <Container className={classes.container}>
            <Paper>
                <Container>

                    { alertShow ? 
                        alert() 
                        : 
                        <div>
                        <Title>Edit Menu Names: </Title>
                        
                        {menus?.map(menu => <EditMenu name={menu.name} id={menu.id} setAlertShow={setAlertShow}/>)} 

                        {editingErrors ? <div>Name can't be saved: {editingErrors}</div> : null}
                        
                        <br></br>
                        <br></br>

                        <Title>Create menu?</Title>
                        <br></br>

                        <div>
                        <Grid container direction="row" alignItems="center">
                            <TextField onChange={handleChange} value={newMenuName} label="Add name of new menu" style={{width: '50ch'}}></TextField>
                            <Button onClick={handleSubmit} variant="contained" color="primary" size='small'>Add</Button>
                        </Grid>
                        <br></br>
                        {addingErrors ? <div>Can't add menu: {addingErrors}</div> : null}
                        </div>
                        </div>
                    }

                    <br></br>
                    <br></br>
                </Container>
            </Paper>
        </Container>
        </>
    )
}

export default EditMenus;