import React from "react";
import { Paper, Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Checkout = () => {
  const steps = ["Shipping Address", "Payment Details"];

  const classes = useStyles();

  return (
    <>
      <div className={classes.toolbar}>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={0} className={classes.stepper}>
              {steps.map((step) => {
                return (
                  <Step key={step}>
                    <StepLabel>{step}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Paper>
        </main>
      </div>
    </>
  );
};

export default Checkout;
