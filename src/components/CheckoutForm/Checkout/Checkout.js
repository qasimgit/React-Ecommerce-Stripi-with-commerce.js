import React, { useEffect, useState } from "react";
import { Paper, Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import useStyles from "./styles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import Confirmation from "../Confirmation";
import { commerce } from "../../../lib/commerce";

const Checkout = ({ cart }) => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);

  const steps = ["Shipping Address", "Payment Details"];

  useEffect(() => {
    console.log(cart);
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart?.id, {
          type: "cart",
        });
        setCheckoutToken(token);
      } catch (error) {
        console.log("error", error);
      }
    };
    generateToken();
  }, []);
  // Steps to follow in form
  const Form = () => {
    if (activeStep == 0) {
      return <AddressForm checkoutToken={checkoutToken} />;
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
