import { useSelector, useDispatch } from "react-redux";
import EditMenu from "./EditMenu";
import { useState } from "react";
import { addMenu } from "./menusSlice";
import { useEffect } from "react";
import Title from "./Dashboard/Title";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {Container, Paper} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core";



function EditMenus() {


    const menus = useSelector(state => state.menus.entities)
    const user = useSelector(state => state.users.entities[0].id)

    const [newMenuName, setNewMenuName] = useState('')

    const dispatch = useDispatch()
    

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
            
        


    return(
        <>
        <Container className={classes.container}>
            <Paper>
                <Container>
                    <br></br>
                    <Title>Edit Menu Names: </Title>
                    {menus?.map(menu => <EditMenu name={menu.name} id={menu.id}/>)}

                    <br></br>

                    <Title>Create menu?</Title>
                    <br></br>

                    <div>
                    <Grid container direction="row" alignItems="center">
                        <TextField onChange={handleChange} value={newMenuName} label="Add name of new menu" style={{width: '50ch'}}></TextField>
                        <Button onClick={handleSubmit} variant="contained" color="primary" size='small'>Add</Button>
                    </Grid>
                    </div>
                    <br></br>
                    <br></br>
                </Container>
            </Paper>
        </Container>
        </>
    )
}

export default EditMenus;