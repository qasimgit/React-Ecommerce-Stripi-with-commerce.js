import classes from "*.module.css";
import { Container, Typography } from "@material-ui/core";
import React from "react";

const Cart = () => {
  const isEmpty = true;

  const isEmpty = () => <Typography>Your Cart is Empty!</Typography>;
  return (
    <Container>
      <div className={classes.toolbar}>
        <Typography className={classes.title} variant="h3">
          Your Shopping Cart!
        </Typography>
        {isEmpty ? <isEmpty /> : <isFilled />}
      </div>
    </Container>
  );
};

export default Cart;
