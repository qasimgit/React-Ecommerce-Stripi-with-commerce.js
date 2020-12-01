import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Cart = ({ cartItems }) => {
  const classes = useStyles();

  console.log("cart comp", cartItems);
  const CartEmpty = !cartItems.line_items.length;

  const EmptyCard = () => {
    return (
      <Typography variant="subtitle1">
        Your Cart 🛒 is Empty! , Starting Adding Some
      </Typography>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          Your Cart 🛒 is Empty! , Starting Adding Some
        </Grid>
      </>
    );
  };
  return (
    <Container>
      <div className={classes.toolbar} />y
      <Typography className={classes.title} variant="h3">
        Your Shopping Cart!
      </Typography>
      <Typography
        className={classes.title}
        variant="h5"
        style={{ marginTop: "50px" }}
      >
        {CartEmpty ? <EmptyCard /> : <FilledCart />}
      </Typography>
    </Container>
  );
};

export default Cart;
