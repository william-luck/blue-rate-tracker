import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import AddIngredientsChecklist from "./AddIngredientsChecklist";
import AddMenuToMenuItem from "./AddMenuToMenuItem";
import AddQuantities from "./AddQuantities";

import { assignName, clearPendingData } from "../../reducers/ingredientsSlice";
import { addMenuItem } from "../../reducers/menuItemsSlice";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, TextField } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";


function AddMenuItem() {

    const dispatch = useDispatch()
    const name = useSelector(state => state.ingredientsSelected.name)
    const pendingData = useSelector(state => state.ingredientsSelected)

    function handleSubmit() {
      dispatch(addMenuItem(pendingData))
      dispatch(clearPendingData())
      console.log('dispatched clear pending data')
    }

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
        },
        button: {
          marginRight: theme.spacing(1),
        },
        instructions: {
          marginTop: theme.spacing(1),
          marginBottom: theme.spacing(1),
        },
      }));

      const classes = useStyles();

      function getSteps() {
        return ['Enter name for Menu Item', 'Assign Menu', 'Add ingredients', 'Add quantities'];
      }
      
      function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <div>
                    <TextField value={name} onChange={e => dispatch(assignName(e.target.value))} label="Enter name for new menu item" style={{width: "50ch"}}/>
                    </div>
                )
            case 1:
                return (
                    <>
                        <AddMenuToMenuItem />
                    </>
                )
          case 2:
            return (
                <>
                    <AddIngredientsChecklist />
                </>
            )
          case 3:
            return (
                <>
                    <AddQuantities/>
                </>
            )
          default:
            return 'Unknown step';
        }
      }


    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {

        if (activeStep === 3) {
          handleSubmit()
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    const handleReset = () => {
        setActiveStep(0);
    };

    return( 
        <>
        <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              Menu Item added!
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Add another item
            </Button>
          </div>
        ) : (
          <div>
            <Container>
                <Paper>
                    <Container>
                        <br></br>
                        {getStepContent(activeStep)}
                        <br></br>
                        <br></br>
                    </Container>
                </Paper>
            </Container>
                
            
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Add Menu Item' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
        </>
    )
   

}

export default AddMenuItem; 