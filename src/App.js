import { Router } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import { Navbar, Products } from "./components";
import { commerce } from "./lib/commerce";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState();

  //fecthcing prodicts from commerce

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    console.log("data", data);
    setProducts(data);
  };

  //fecthcing cart items from commerce

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  // handle add Cart

  const handleAddToCart = async (productID, quantity) => {
    const item = await commerce.cart.add(productID, quantity);
    setCart(item.cart);
    console.log("add to cart clicked");
  };

  //  Component Did Mount
  useEffect(() => {
    fetchProducts();
    fetchCart();
    console.log("products", products);
  }, []);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    // <Router>
    //   <Switch>
    //     <Route />
    <div>
      <Navbar totalItems={cart.total_items} />
      <Products products={products} AddToCart={handleAddToCart} />
    </div>
    //   </Switch>
    // </Router>
  );
};

export default App;
