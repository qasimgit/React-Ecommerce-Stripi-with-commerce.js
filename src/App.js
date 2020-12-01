import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Products, Cart } from "./components";
import { commerce } from "./lib/commerce";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState();
  console.log("cart", cart);

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
    console.log("cart", cart);
  }, [cart]);

  return (
    <Router>
      <Navbar totalItems={cart?.total_items} />
      <Switch>
        <Route exact path="/">
          <Products products={products} AddToCart={handleAddToCart} />
        </Route>
        <Route exact path="/cart"></Route>
        <Cart cartItems={cart} />
      </Switch>
    </Router>
  );
};

export default App;
