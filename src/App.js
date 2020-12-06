import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Products, Cart, Checkout } from "./components";
import { commerce } from "./lib/commerce";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  //fecthcing prodicts from commerce

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
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

  // handling updating cart quantity
  const handleUpdateCartQty = async (productID, quantity) => {
    const responce = await commerce.cart.update(productID, { quantity });
    setCart(responce.cart);
  };

  //handle delete item from cart
  const handleDeleteItem = async (productID) => {
    const responce = await commerce.cart.remove(productID);
    setCart(responce.cart);
  };

  // handle Empty the cart
  const handleEmptyCart = async () => {
    const responce = await commerce.cart.empty();
    setCart(responce.cart);
  };
  //  Component Did Mount
  useEffect(() => {
    console.log("cart", cart);
    fetchProducts();
    fetchCart();
  }, []);
  console.log("cart APPPAPAPAPAPAPAPAPAP++++++++++++++++++++++++", cart);
  return (
    <Router>
      <Navbar totalItems={cart?.total_items} />
      <Switch>
        <Route exact path="/">
          <Products products={products} AddToCart={handleAddToCart} />
        </Route>
        <Route exact path="/cart">
          <Cart
            cartItems={cart}
            handleUpdateCartQty={handleUpdateCartQty}
            handleDeleteItem={handleDeleteItem}
            handleEmptyCart={handleEmptyCart}
          />
        </Route>
        <Route exact path="/checkout">
          <Checkout cart={cart} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
