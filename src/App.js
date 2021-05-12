import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductsList from "./Components/ProductsList";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import NoMatch from "./Components/NoMatch";
import { addToCart, getCart, removeFromCart } from "./services/cart";

function App() {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState({});

  console.log("CART: ", cart);

  useEffect(() => {
    // load cart
    const loadCart = async () => {
      const cartRes = await getCart();

      console.log("AFTER LOAD", cartRes);
      // Set cart state
      setCart(cartRes);
    };
    loadCart();
  }, []);

  const handleAddToCart = async (product) => {
    let productArr = [...cart];
    const res = await addToCart(product);
    if (res) {
      productArr.push(product);
      setCart(productArr);
    } else {
      setError({ name: "Error adding product" });
    }
  };

  const handleRemoveFromCart = async (index) => {
    console.log("INDEX: ", index);
    const updatedCart = await removeFromCart(index);
    setCart(updatedCart);
  };

  const cartRoutes = () => {
    if (cart.length !== 0) {
      return (
        <Route exact path="/checkout">
          <Checkout cart={cart} setCart={setCart} />
        </Route>
      );
    }
  };

  console.log("NEW CART: ", cart);

  return (
    <Router>
      <div>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart({cart.length})</Link>
            </li>
          </ul>
        </nav>

        {/* Switch paths */}
        <Switch>
          <Route exact path="/cart">
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
          </Route>
          {cartRoutes()}

          <Route exact path="/">
            <ProductsList handleAddToCart={handleAddToCart} />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
