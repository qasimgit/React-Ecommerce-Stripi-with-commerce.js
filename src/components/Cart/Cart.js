import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import CardItems from "./CartItem/CartItems";
import { Link } from "react-router-dom";

const Cart = ({
  cartItems,
  handleEmptyCart,
  handleDeleteItem,
  handleUpdateCartQty,
}) => {
  const classes = useStyles();

  const CartEmpty = !cartItems?.line_items.length;

  // Empty Card Componenet when it cart is empty
  const EmptyCard = () => {
    return (
      <Typography variant="subtitle1">
        Your Cart 🛒 is Empty! , Starting Adding Some{" "}
        <Link to="/" className={classes.link}>
          Start Adding Some Items :-)
        </Link>
      </Typography>
    );
  };

  // Filled Cart Component
  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cartItems.line_items.map((item) => {
            return (
              <Grid item xs={12} sm={4} key={item.id}>
                <CardItems
                  item={item}
                  handleDeleteItem={handleDeleteItem}
                  handleUpdateCartQty={handleUpdateCartQty}
                />
              </Grid>
            );
          })}
        </Grid>
        <div className={classes.cardDetails}>
          <Typography variant="h4">
            Subtotal:{cartItems.subtotal.formatted_with_symbol}
          </Typography>
          <div>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
              onClick={handleEmptyCart}
            >
              Empty Button
            </Button>
            <Button
              component={Link}
              to="/checkout"
              className={classes.checkout}
              size="large"
              type="button"
              variant="contained"
              color="primary"
            >
              Check Out
            </Button>
          </div>
        </div>
      </>
    );
  };

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4">
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
