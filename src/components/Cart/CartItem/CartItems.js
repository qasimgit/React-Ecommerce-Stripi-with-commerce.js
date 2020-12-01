import {
  Card,
  CardActions,
  CardMedia,
  Typography,
  CardContent,
  Button,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const CartItems = ({ item, handleUpdateCartQty, handleDeleteItem }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total_formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <p>{item.quantity}</p>
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => handleDeleteItem(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItems;
