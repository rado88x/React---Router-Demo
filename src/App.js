import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./pages/Products";
import Welecome from "./pages/Welcome";
import ProductDetail from "./pages/ProductDetail";
import HomePage from "./pages/HomePage";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <header>
        <MainHeader></MainHeader>
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
           <Redirect to="/Homepage"/>
          </Route>
          <Route path="/Homepage">
          <HomePage></HomePage>
          </Route>
          <Route path="/welcome">
            <Welecome></Welecome>
          </Route>
          <Route path="/products" exact>
            <Products></Products>
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
