import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product";

const products = [
  { id: 1, name: "Shoes", description: "Running Shoes", price: "10" },
  { id: 2, name: "Mobile", description: "Smart Phone", price: "20" },
  { id: 3, name: "Laptop", description: "Portable Laptop", price: "30" },
  { id: 4, name: "Computer", description: "Next Generation", price: "40" },
];
const Products = ({ product }) => {
  return (
    <main>
      <div>
        <Grid container justify="center" spacing={4}>
          {products.map((product) => {
            <Grid item key={product.id} xs={12} sm={6} lg={3}>
              <Product product={product} />
            </Grid>;
          })}
        </Grid>
      </div>
    </main>
  );
};

export default Products;
