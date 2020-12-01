import React, { useState } from "react";
import { Paper, Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import useStyles from "./styles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import Confirmation from "../Confirmation";

const Checkout = () => {
  const classes = useStyles();

  const steps = ["Shipping Address", "Payment Details"];
  const [activeStep, setActiveStep] = useState(1);

  // Steps to follow in form
  const Form = () => {
    if (activeStep == 0) {
      return <AddressForm />;
    } else {
      return <PaymentForm />;
    }
  };

  return (
    <>
      <div className={classes.toolbar}>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((step) => {
                return (
                  <Step key={step}>
                    <StepLabel>{step}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep == steps.length ? <Confirmation /> : <Form />}
          </Paper>
        </main>
      </div>
    </>
  );
};

export default Checkout;
