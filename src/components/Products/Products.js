import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product";
import useStyles from "./styles";

const Products = ({ products, AddToCart }) => {
  console.log("mapproducts comp", products);
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div>
        <Grid container justify="center" spacing={4}>
          {products?.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} lg={3}>
              <Product product={product} AddToCart={AddToCart} />
            </Grid>
          ))}
        </Grid>
      </div>
    </main>
  );
};

export default Products;
